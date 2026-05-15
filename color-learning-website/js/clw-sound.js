/**
 * Global UI sound: Web Audio timeline playback, per-user soundEffects preference.
 * Modules register track URLs with registerTracks(); playback goes through play() or schedule().
 */
(function () {
  "use strict";

  var STORAGE_KEY = "clw_sound_effects_by_user_v1";

  var registry = [];
  var registrySet = Object.create(null);
  var audioBuffers = Object.create(null);
  var audioBufferPromises = Object.create(null);
  var htmlAudioElements = Object.create(null);
  var audioContext = null;
  var sfxUnlocked = false;
  var soundEnabled = true;
  var currentUserKey = "__guest__";
  var documentUnlockBound = false;

  function getUserKey() {
    if (window.CLWAuth && typeof CLWAuth.isLoggedIn === "function" && CLWAuth.isLoggedIn()) {
      var u = CLWAuth.getCurrentUsername && CLWAuth.getCurrentUsername();
      if (u && u !== "Guest") return String(u);
    }
    return "__guest__";
  }

  function readAllPrefs() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      var o = JSON.parse(raw);
      return o && typeof o === "object" ? o : {};
    } catch (e) {
      return {};
    }
  }

  function writePrefForUserKey(key, enabled) {
    var all = readAllPrefs();
    all[key] = !!enabled;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch (e) {}
  }

  function loadEnabledForCurrentUser() {
    currentUserKey = getUserKey();
    var all = readAllPrefs();
    if (Object.prototype.hasOwnProperty.call(all, currentUserKey)) {
      soundEnabled = !!all[currentUserKey];
    } else {
      soundEnabled = true;
    }
  }

  function emitPrefsChanged() {
    document.dispatchEvent(
      new CustomEvent("clw:sound-prefs-changed", {
        detail: { soundEffects: soundEnabled, userKey: currentUserKey }
      })
    );
  }

  function getAudioContext() {
    if (audioContext) return audioContext;
    var Ctor = window.AudioContext || window.webkitAudioContext;
    if (!Ctor) return null;
    try {
      audioContext = new Ctor();
    } catch (e) {
      audioContext = null;
    }
    return audioContext;
  }

  function resumeAudioContext() {
    var ctx = getAudioContext();
    if (!ctx) return null;
    if (ctx.state === "suspended" && typeof ctx.resume === "function") {
      return ctx.resume().catch(function () {});
    }
    return null;
  }

  function decodeArrayBuffer(ctx, arrayBuffer) {
    try {
      var decoded = ctx.decodeAudioData(arrayBuffer);
      if (decoded && typeof decoded.then === "function") return decoded;
    } catch (e) {}
    return new Promise(function (resolve, reject) {
      try {
        ctx.decodeAudioData(arrayBuffer, resolve, reject);
      } catch (e) {
        reject(e);
      }
    });
  }

  function shouldUseHtmlAudioFallback() {
    return window.location && window.location.protocol === "file:";
  }

  function getHtmlAudioForSrc(src) {
    if (!src || typeof Audio !== "function") return null;
    if (!htmlAudioElements[src]) {
      try {
        var audio = new Audio(src);
        audio.preload = "auto";
        htmlAudioElements[src] = audio;
      } catch (e) {
        return null;
      }
    }
    return htmlAudioElements[src];
  }

  function preloadHtmlAudio(src) {
    var audio = getHtmlAudioForSrc(src);
    if (!audio || typeof audio.load !== "function") return;
    try {
      audio.load();
    } catch (e) {}
  }

  function playHtmlAudio(src, opts) {
    if (!soundEnabled) return;
    var base = getHtmlAudioForSrc(src);
    if (!base) return;

    try {
      var audio = base.cloneNode ? base.cloneNode(true) : new Audio(src);
      var conf = opts || {};
      var volume = typeof conf.volume === "number" ? conf.volume : 1;
      audio.volume = Math.max(0, Math.min(1, volume));
      if (typeof conf.playbackRate === "number") {
        audio.playbackRate = Math.max(0.25, Math.min(4, conf.playbackRate));
      }
      audio.currentTime = 0;
      var started = audio.play();
      if (started && typeof started.catch === "function") started.catch(function () {});
    } catch (e) {}
  }

  function singleLayerOptions(opts) {
    var conf = opts || {};
    var copy = {};
    var key;
    for (key in conf) {
      if (Object.prototype.hasOwnProperty.call(conf, key)) copy[key] = conf[key];
    }
    copy.layers = 1;
    copy.staggerMs = 0;
    return copy;
  }

  function scheduleHtmlAudio(src, delayMs, opts) {
    if (!soundEnabled) return;
    var conf = opts || {};
    var layers = Math.max(1, Number(conf.layers) || 1);
    var staggerMs = Math.max(0, Number(conf.staggerMs) || 0);
    var baseDelayMs = Math.max(0, Number(delayMs) || 0);
    var i;

    for (i = 0; i < layers; i++) {
      var delay = baseDelayMs + i * staggerMs;
      if (delay <= 0) {
        playHtmlAudio(src, conf);
      } else {
        window.setTimeout(function () {
          playHtmlAudio(src, conf);
        }, delay);
      }
    }
  }

  function ensureBufferForSrc(src) {
    if (!src) return Promise.reject(new Error("Missing sound source"));
    if (audioBuffers[src]) return Promise.resolve(audioBuffers[src]);
    if (audioBufferPromises[src]) return audioBufferPromises[src];

    var ctx = getAudioContext();
    if (shouldUseHtmlAudioFallback() || !ctx || typeof fetch !== "function") {
      return Promise.reject(new Error("Web Audio is unavailable"));
    }

    audioBufferPromises[src] = fetch(src)
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load sound: " + src);
        return res.arrayBuffer();
      })
      .then(function (arrayBuffer) {
        return decodeArrayBuffer(ctx, arrayBuffer);
      })
      .then(function (buffer) {
        audioBuffers[src] = buffer;
        return buffer;
      })
      .catch(function (error) {
        delete audioBufferPromises[src];
        if (window.console && console.warn) console.warn("[CLWSound] sound decode failed:", src, error);
        throw error;
      });

    return audioBufferPromises[src];
  }

  function preloadRegistry() {
    if (!soundEnabled) return;
    getAudioContext();
    var i;
    for (i = 0; i < registry.length; i++) {
      if (shouldUseHtmlAudioFallback()) {
        preloadHtmlAudio(registry[i]);
      } else {
        ensureBufferForSrc(registry[i]).catch(function () {});
      }
    }
  }

  function registerTracks(urls) {
    if (!urls || !urls.length) return;
    var i;
    for (i = 0; i < urls.length; i++) {
      var s = urls[i];
      if (!s || registrySet[s]) continue;
      registrySet[s] = true;
      registry.push(s);
      if (soundEnabled) {
        if (shouldUseHtmlAudioFallback()) {
          preloadHtmlAudio(s);
        } else {
          ensureBufferForSrc(s).catch(function () {});
        }
      }
    }
  }

  function scheduleSource(src, whenSeconds, opts) {
    if (!soundEnabled) return;
    var ctx = getAudioContext();
    if (!ctx || shouldUseHtmlAudioFallback()) {
      scheduleHtmlAudio(src, 0, opts);
      return;
    }
    resumeAudioContext();

    var conf = opts || {};
    var volume = typeof conf.volume === "number" ? conf.volume : 1;
    var gainValue = Math.max(0, Math.min(1, volume));

    ensureBufferForSrc(src)
      .then(function (buffer) {
        try {
          var source = ctx.createBufferSource();
          var gain = ctx.createGain();
          source.buffer = buffer;
          gain.gain.setValueAtTime(gainValue, ctx.currentTime);
          source.connect(gain);
          gain.connect(ctx.destination);
          source.start(Math.max(ctx.currentTime, whenSeconds));
        } catch (e) {}
      })
      .catch(function () {
        var fallbackDelayMs = Math.max(0, (whenSeconds - ctx.currentTime) * 1000);
        scheduleHtmlAudio(src, fallbackDelayMs, singleLayerOptions(opts));
      });
  }

  function schedule(src, delayMs, opts) {
    if (!soundEnabled) return;
    if (shouldUseHtmlAudioFallback()) {
      scheduleHtmlAudio(src, delayMs, opts);
      return;
    }

    var ctx = getAudioContext();
    if (!ctx) {
      scheduleHtmlAudio(src, delayMs, opts);
      return;
    }

    var conf = opts || {};
    var layers = Math.max(1, Number(conf.layers) || 1);
    var staggerMs = Math.max(0, Number(conf.staggerMs) || 0);
    var baseDelayMs = Math.max(0, Number(delayMs) || 0);
    var startSeconds = ctx.currentTime + baseDelayMs / 1000;
    var i;

    for (i = 0; i < layers; i++) {
      scheduleSource(src, startSeconds + (i * staggerMs) / 1000, conf);
    }
  }

  function play(src, opts) {
    schedule(src, 0, opts);
  }

  function silentUnlock() {
    if (sfxUnlocked) return;
    sfxUnlocked = true;

    var ctx = getAudioContext();
    if (!ctx) return;
    resumeAudioContext();

    try {
      var buffer = ctx.createBuffer(1, 1, Math.max(1, ctx.sampleRate));
      var source = ctx.createBufferSource();
      var gain = ctx.createGain();
      source.buffer = buffer;
      gain.gain.setValueAtTime(0, ctx.currentTime);
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(ctx.currentTime);
    } catch (e) {}
  }

  function ensureReadyForPlayback() {
    if (!soundEnabled) return;
    getAudioContext();
    preloadRegistry();
    silentUnlock();
  }

  function setSoundEffectsEnabled(on) {
    soundEnabled = !!on;
    writePrefForUserKey(currentUserKey, soundEnabled);
    emitPrefsChanged();
    if (soundEnabled) ensureReadyForPlayback();
  }

  function isSoundEffectsEnabled() {
    return soundEnabled;
  }

  function bindDocumentUnlockOnce() {
    if (documentUnlockBound) return;
    documentUnlockBound = true;
    function once() {
      if (soundEnabled) ensureReadyForPlayback();
    }
    document.addEventListener("pointerdown", once, { once: true, passive: true });
    document.addEventListener("touchstart", once, { once: true, passive: true });
    document.addEventListener("click", once, { once: true });
  }

  function onAuthChanged() {
    loadEnabledForCurrentUser();
    if (soundEnabled && registry.length) preloadRegistry();
    emitPrefsChanged();
  }

  function onReadySync() {
    loadEnabledForCurrentUser();
    if (soundEnabled && registry.length) preloadRegistry();
    emitPrefsChanged();
  }

  window.CLWSound = {
    registerTracks: registerTracks,
    play: play,
    schedule: schedule,
    setSoundEffectsEnabled: setSoundEffectsEnabled,
    isSoundEffectsEnabled: isSoundEffectsEnabled,
    ensureReadyForPlayback: ensureReadyForPlayback,
    bindDocumentUnlockOnce: bindDocumentUnlockOnce
  };

  loadEnabledForCurrentUser();
  bindDocumentUnlockOnce();
  document.addEventListener("DOMContentLoaded", onReadySync);
  document.addEventListener("site:components-ready", onReadySync);
  document.addEventListener("clw:auth-changed", onAuthChanged);
})();
