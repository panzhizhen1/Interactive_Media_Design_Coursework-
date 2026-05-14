/**
 * Profile & Settings — popover UI (anchored to header avatar).
 * Sound effects preference persists per user via CLWSound + localStorage.
 */
(function () {
  "use strict";

  var FONT_SIZE_STORAGE_KEY = "clw_font_size_by_user_v1";
  var FONT_SIZE_ATTR = "data-clw-font-size";
  var COLOUR_MODE_STORAGE_KEY = "clw_colour_mode_by_user_v1";
  var COLOUR_MODE_ATTR = "data-clw-colour-mode";

  /** @type {{ soundEffects: boolean, language: 'zh'|'en', colourMode: 'default'|'accessible', fontSize: 's'|'m'|'l' }} */
  var prefState = {
    soundEffects: true,
    language: "en",
    colourMode: "default",
    fontSize: "m"
  };

  var defaults = Object.freeze({
    soundEffects: true,
    language: "en",
    colourMode: "default",
    fontSize: "m"
  });

  var rootEl = null;
  var backdropEl = null;
  var panelEl = null;
  var triggerEl = null;
  var lastFocusEl = null;
  var isOpen = false;

  var ICON_SOUND =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M4 9.5v5h3.2L12 18.2V5.8L7.2 9.5H4z"/>' +
    '<path d="M16 9a4.5 4.5 0 010 6"/>' +
    '<path d="M18.5 6.5a8 8 0 010 11"/>' +
  '</svg>';

  var ICON_GLOBE =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="8.5"/>' +
      '<path d="M3.5 12h17"/>' +
      '<path d="M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5S14.2 18.2 12 20.5"/>' +
      '<path d="M12 3.5C9.8 5.8 8.7 8.6 8.7 12s1.1 6.2 3.3 8.5"/>' +
    '</svg>';

  var ICON_PALETTE =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.05" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M12 3.8a8.2 8.2 0 100 16.4h1.1a1.8 1.8 0 001.4-3 1.65 1.65 0 011.25-2.7H17a3.7 3.7 0 000-7.4h-.4A8.1 8.1 0 0012 3.8z"/>' +
      '<circle cx="8.1" cy="10" r="0.9" fill="currentColor" stroke="none"/>' +
      '<circle cx="11" cy="7.8" r="0.9" fill="currentColor" stroke="none"/>' +
      '<circle cx="14.5" cy="9" r="0.9" fill="currentColor" stroke="none"/>' +
    '</svg>';

  var ICON_AA =
    '<span class="settings-icon-text" aria-hidden="true">Aa</span>';

  function getUserKey() {
    if (window.CLWAuth && typeof CLWAuth.isLoggedIn === "function" && CLWAuth.isLoggedIn()) {
      var u = CLWAuth.getCurrentUsername && CLWAuth.getCurrentUsername();
      if (u && u !== "Guest") return String(u);
    }
    return "__guest__";
  }

  function readFontSizePrefs() {
    try {
      var raw = localStorage.getItem(FONT_SIZE_STORAGE_KEY);
      if (!raw) return {};
      var parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  function writeFontSizeForCurrentUser(fontSize) {
    var all = readFontSizePrefs();
    all[getUserKey()] = normalizeFontSize(fontSize);
    try {
      localStorage.setItem(FONT_SIZE_STORAGE_KEY, JSON.stringify(all));
    } catch (e) {}
  }

  function normalizeFontSize(fontSize) {
    return fontSize === "s" || fontSize === "l" ? fontSize : "m";
  }

  function normalizeColourMode(colourMode) {
    return colourMode === "accessible" ? "accessible" : "default";
  }

  function readColourModePrefs() {
    try {
      var raw = localStorage.getItem(COLOUR_MODE_STORAGE_KEY);
      if (!raw) return {};
      var parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  function writeColourModeForCurrentUser(colourMode) {
    var all = readColourModePrefs();
    all[getUserKey()] = normalizeColourMode(colourMode);
    try {
      localStorage.setItem(COLOUR_MODE_STORAGE_KEY, JSON.stringify(all));
    } catch (e) {}
  }

  function applyColourMode(colourMode, options) {
    var next = normalizeColourMode(colourMode);
    prefState.colourMode = next;
    document.documentElement.setAttribute(COLOUR_MODE_ATTR, next);
    if (!options || options.persist !== false) {
      writeColourModeForCurrentUser(next);
    }
  }

  function syncColourModeFromStorage() {
    var all = readColourModePrefs();
    var next = Object.prototype.hasOwnProperty.call(all, getUserKey())
      ? all[getUserKey()]
      : defaults.colourMode;
    applyColourMode(next, { persist: false });
  }

  function emitFontSizeChanged(fontSize) {
    document.dispatchEvent(
      new CustomEvent("clw:font-size-changed", {
        detail: { fontSize: fontSize, userKey: getUserKey() }
      })
    );
  }

  function applyFontSize(fontSize, options) {
    var next = normalizeFontSize(fontSize);
    prefState.fontSize = next;
    document.documentElement.setAttribute(FONT_SIZE_ATTR, next);
    if (!options || options.persist !== false) {
      writeFontSizeForCurrentUser(next);
    }
    if (options && options.emit) {
      emitFontSizeChanged(next);
    }
  }

  function syncFontSizeFromStorage() {
    var all = readFontSizePrefs();
    var next = Object.prototype.hasOwnProperty.call(all, getUserKey())
      ? all[getUserKey()]
      : defaults.fontSize;
    applyFontSize(next, { persist: false });
  }

  function tr(key) {
    if (window.CLWLocale && typeof CLWLocale.translate === "function") {
      return CLWLocale.translate(key, "global");
    }
    return key;
  }

  function buildMarkup() {
    return (
      '<div class="profile-settings-backdrop" data-profile-settings-backdrop tabindex="-1"></div>' +
      '<div class="profile-settings-panel" id="profile-settings-dialog" role="dialog" aria-modal="true" aria-labelledby="profile-settings-title" data-profile-settings-panel>' +
      '  <header class="profile-settings-panel__header">' +
      '    <h2 class="profile-settings-panel__title" id="profile-settings-title">' + tr("Profile & Settings") + "</h2>" +
      '    <button type="button" class="profile-settings-panel__close" data-profile-settings-close aria-label="' + tr("Close settings") + '">&times;</button>' +
      "  </header>" +
      '  <div class="profile-settings-panel__body">' +
      '    <section class="profile-settings-profile" aria-label="' + tr("Profile") + '" data-profile-settings-profile-card>' +
      '      <div class="profile-settings-profile__avatar" data-profile-settings-avatar aria-hidden="true">G</div>' +
      '      <div class="profile-settings-profile__meta">' +
      '        <p class="profile-settings-profile__name" data-profile-settings-display-name>' + tr("Guest") + "</p>" +
      '        <p class="profile-settings-profile__status" data-profile-settings-status><span class="profile-settings-profile__status-dot" data-profile-settings-status-dot aria-hidden="true"></span><span data-profile-settings-status-text>' + tr("Not logged in") + "</span></p>" +
      "      </div>" +
      '      <div class="profile-settings-profile__actions" data-profile-settings-actions>' +
      '        <button type="button" class="profile-settings-profile__btn profile-settings-profile__btn--logout" data-auth-logout data-profile-auth-when="logged-in" hidden>' + tr("Log out") + "</button>" +
      '        <button type="button" class="profile-settings-profile__btn profile-settings-profile__btn--primary" data-profile-settings-login data-profile-auth-when="guest" hidden>' + tr("Log in") + "</button>" +
      '        <button type="button" class="profile-settings-profile__btn profile-settings-profile__btn--primary" data-profile-settings-signup data-profile-auth-when="guest" hidden>' + tr("Create account") + "</button>" +
      "      </div>" +
      "    </section>" +
      '    <section class="profile-settings-progress" aria-label="' + tr("Learning Progress") + '">' +
      '      <div class="profile-settings-progress__head">' +
      '        <span class="profile-settings-progress__eyebrow">' + tr("Learning Progress") + "</span>" +
      '        <strong data-profile-progress-rank>--</strong>' +
      "      </div>" +
      '      <div class="profile-settings-progress__stats">' +
      '        <p><span>' + tr("Total Points") + '</span><strong data-profile-progress-points>0</strong></p>' +
      '        <p><span>' + tr("Posts") + '</span><strong data-profile-progress-posts>0</strong></p>' +
      '        <p><span>' + tr("Streak") + '</span><strong data-profile-progress-streak>0</strong></p>' +
      "      </div>" +
      '      <p class="profile-settings-progress__note" data-profile-progress-note>' + tr("Publish reflections and discuss posts to build your community profile.") + "</p>" +
      "    </section>" +
      '    <div class="profile-settings-privacy-row">' +
      '      <a class="profile-settings-privacy-link" href="privacy-policy.html" data-privacy-policy-link target="_blank" rel="noopener noreferrer">' +
      tr("Privacy & Data Policy") +
      "</a>" +
      "    </div>" +
      '    <div data-clw-pref-panel="settings">' +
      '      <div class="profile-settings-row">' +
      '        <div class="profile-settings-row__icon profile-settings-row__icon--sound">' +
      ICON_SOUND +
      "</div>" +
      '        <div class="profile-settings-row__text">' +
      '          <h3 class="profile-settings-row__title">' + tr("Sound effects") + "</h3>" +
      '          <p class="profile-settings-row__desc">' + tr("Play sounds for interactions and feedback.") + "</p>" +
      "        </div>" +
      '        <button type="button" class="profile-settings-toggle" role="switch" data-clw-pref="sound-effects" aria-checked="true" aria-label="' + tr("Sound effects") + '"></button>' +
      "      </div>" +
      '      <div class="profile-settings-row">' +
      '        <div class="profile-settings-row__icon profile-settings-row__icon--lang">' +
      ICON_GLOBE +
      "</div>" +
      '        <div class="profile-settings-row__text">' +
      '          <h3 class="profile-settings-row__title">' + tr("Language") + "</h3>" +
      '          <p class="profile-settings-row__desc">' + tr("Choose your preferred language.") + "</p>" +
      "        </div>" +
      '        <div class="profile-settings-seg" role="group" aria-label="' + tr("Language") + '">' +
      '          <button type="button" class="profile-settings-seg__btn" data-clw-pref="language" data-clw-pref-value="zh" aria-pressed="false">中文</button>' +
      '          <button type="button" class="profile-settings-seg__btn is-selected" data-clw-pref="language" data-clw-pref-value="en" aria-pressed="true">EN</button>' +
      "        </div>" +
      "      </div>" +
      '      <div class="profile-settings-row">' +
      '        <div class="profile-settings-row__icon profile-settings-row__icon--colour">' +
      ICON_PALETTE +
      "</div>" +
      '        <div class="profile-settings-row__text">' +
      '          <h3 class="profile-settings-row__title">' + tr("Colour mode") + "</h3>" +
      '          <p class="profile-settings-row__desc">' + tr("Improves contrast and uses colour-blind friendly status colours.") + "</p>" +
      "        </div>" +
      '        <div class="profile-settings-seg" role="group" aria-label="' + tr("Colour mode") + '">' +
      '          <button type="button" class="profile-settings-seg__btn is-selected" data-clw-pref="colour-mode" data-clw-pref-value="default" aria-pressed="true">' + tr("Default") + "</button>" +
      '          <button type="button" class="profile-settings-seg__btn" data-clw-pref="colour-mode" data-clw-pref-value="accessible" aria-pressed="false">' + tr("Accessible") + "</button>" +
      "        </div>" +
      "      </div>" +
      '      <div class="profile-settings-row">' +
      '        <div class="profile-settings-row__icon profile-settings-row__icon--font">' +
      ICON_AA +
      "</div>" +
      '        <div class="profile-settings-row__text">' +
      '          <h3 class="profile-settings-row__title">' + tr("Font size") + "</h3>" +
      '          <p class="profile-settings-row__desc">' + tr("Adjust text size for easier reading.") + "</p>" +
      "        </div>" +
      '        <div class="profile-settings-seg" role="group" aria-label="' + tr("Font size") + '">' +
      '          <button type="button" class="profile-settings-seg__btn" data-clw-pref="font-size" data-clw-pref-value="s" aria-pressed="false">S</button>' +
      '          <button type="button" class="profile-settings-seg__btn is-selected" data-clw-pref="font-size" data-clw-pref-value="m" aria-pressed="true">M</button>' +
      '          <button type="button" class="profile-settings-seg__btn" data-clw-pref="font-size" data-clw-pref-value="l" aria-pressed="false">L</button>' +
      "        </div>" +
      "      </div>" +
      "    </div>" +
      "  </div>" +
      '  <footer class="profile-settings-footer">' +
      '    <button type="button" class="profile-settings-footer__reset" data-profile-settings-reset>' +
      '      <svg class="profile-settings-footer__reset-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
      '        <path d="M18.4 7.2A7 7 0 1 0 19.2 15.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '        <path d="M16.4 10.4L20.6 10.6L20.4 6.4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '      </svg>' +
      "      " + tr("Reset to defaults") +
      "    </button>" +
      "  </footer>" +
      "</div>"
    );
  }

  function getAuthProfile() {
    if (!window.CLWAuth || typeof CLWAuth.isLoggedIn !== "function") {
      return { loggedIn: false, displayName: "Guest", initial: "G" };
    }
    if (!CLWAuth.isLoggedIn()) {
      return { loggedIn: false, displayName: "Guest", initial: "G" };
    }
    var u = CLWAuth.getCurrentUsername && CLWAuth.getCurrentUsername();
    if (!u || u === "Guest") {
      return { loggedIn: false, displayName: "Guest", initial: "G" };
    }
    var rec = CLWAuth.getUserRecord(u);
    var name =
      rec && rec.profile && rec.profile.displayName ? String(rec.profile.displayName) : u;
    var initial = name.length ? name.charAt(0).toUpperCase() : u.charAt(0).toUpperCase();
    return { loggedIn: true, displayName: name, initial: initial };
  }

  function syncSoundFromCLW() {
    if (window.CLWSound && typeof CLWSound.isSoundEffectsEnabled === "function") {
      prefState.soundEffects = CLWSound.isSoundEffectsEnabled();
    }
  }

  function refreshProfileCard() {
    if (!rootEl) return;
    var p = getAuthProfile();
    var av = rootEl.querySelector("[data-profile-settings-avatar]");
    var nm = rootEl.querySelector("[data-profile-settings-display-name]");
    var dot = rootEl.querySelector("[data-profile-settings-status-dot]");
    var st = rootEl.querySelector("[data-profile-settings-status-text]");
    var btnOut = rootEl.querySelector("[data-profile-settings-profile-card] [data-auth-logout]");
    var btnIn = rootEl.querySelector("[data-profile-settings-login]");
    var btnUp = rootEl.querySelector("[data-profile-settings-signup]");

    if (av) av.textContent = p.initial;
    if (nm) nm.textContent = p.loggedIn ? p.displayName : tr("Guest");
    if (dot) {
      dot.classList.toggle("profile-settings-profile__status-dot--on", p.loggedIn);
    }
    if (st) st.textContent = p.loggedIn ? tr("Logged in") : tr("Not logged in");

    if (btnOut) btnOut.hidden = !p.loggedIn;
    if (btnIn) btnIn.hidden = p.loggedIn;
    if (btnUp) btnUp.hidden = p.loggedIn;
    refreshProgressCard();
  }

  function refreshProgressCard() {
    if (!rootEl) return;
    var p = getAuthProfile();
    var pointsEl = rootEl.querySelector("[data-profile-progress-points]");
    var postsEl = rootEl.querySelector("[data-profile-progress-posts]");
    var streakEl = rootEl.querySelector("[data-profile-progress-streak]");
    var rankEl = rootEl.querySelector("[data-profile-progress-rank]");
    var noteEl = rootEl.querySelector("[data-profile-progress-note]");
    if (!pointsEl || !postsEl || !streakEl || !rankEl || !noteEl) return;

    if (!p.loggedIn || !window.CLWAuth || typeof CLWAuth.getCurrentUsername !== "function") {
      pointsEl.textContent = "0";
      postsEl.textContent = "0";
      streakEl.textContent = "0";
      rankEl.textContent = tr("Guest");
      noteEl.textContent = tr("Log in to build a visible community learning profile.");
      return;
    }

    var username = CLWAuth.getCurrentUsername();
    var stats = CLWAuth.getUserStats && CLWAuth.getUserStats(username);
    var points = Math.max(0, Number(stats && stats.points ? stats.points : 0));
    var posts = Math.max(0, Number(stats && stats.postCount ? stats.postCount : 0));
    var streak = Math.max(0, Number(stats && stats.streakDays ? stats.streakDays : 0));
    pointsEl.textContent = String(points);
    postsEl.textContent = String(posts);
    streakEl.textContent = String(streak);
    rankEl.textContent = points ? tr("Active learner") : tr("New learner");
    noteEl.textContent = posts
      ? tr("Your posts and reactions shape your learning identity.")
      : tr("Publish your first reflection to start your social learning profile.");
  }

  function updatePrivacyPolicyLinkHref() {
    if (!rootEl) return;
    var a = rootEl.querySelector("[data-privacy-policy-link]");
    if (!a) return;
    var lang = prefState.language === "zh" ? "zh" : "en";
    a.setAttribute("href", "privacy-policy.html?lang=" + lang);
  }

  function applyPrefStateToDom() {
    if (!rootEl) return;
    updatePrivacyPolicyLinkHref();
    var soundBtn = rootEl.querySelector('[data-clw-pref="sound-effects"]');
    if (soundBtn) {
      soundBtn.setAttribute("aria-checked", prefState.soundEffects ? "true" : "false");
    }

    rootEl.querySelectorAll('[data-clw-pref="language"]').forEach(function (btn) {
      var v = btn.getAttribute("data-clw-pref-value");
      var on = v === prefState.language;
      btn.classList.toggle("is-selected", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    rootEl.querySelectorAll('[data-clw-pref="colour-mode"]').forEach(function (btn) {
      var v = btn.getAttribute("data-clw-pref-value");
      var on = v === prefState.colourMode;
      btn.classList.toggle("is-selected", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    rootEl.querySelectorAll('[data-clw-pref="font-size"]').forEach(function (btn) {
      var v = btn.getAttribute("data-clw-pref-value");
      var on = v === prefState.fontSize;
      btn.classList.toggle("is-selected", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function rebuildPanelContent() {
    if (!rootEl) return;
    rootEl.innerHTML = buildMarkup();
    backdropEl = rootEl.querySelector("[data-profile-settings-backdrop]");
    panelEl = rootEl.querySelector("[data-profile-settings-panel]");
    refreshProfileCard();
    refreshProgressCard();
    applyPrefStateToDom();
    if (isOpen) {
      backdropEl.classList.add("is-open");
      panelEl.classList.add("is-open");
      positionPanel();
    }
  }

  function syncLocaleFromCLW() {
    if (window.CLWLocale && typeof CLWLocale.getLocale === "function") {
      prefState.language = CLWLocale.getLocale();
    }
  }

  function resetPrefs() {
    prefState.soundEffects = defaults.soundEffects;
    prefState.language = defaults.language;
    applyColourMode(defaults.colourMode);
    prefState.fontSize = defaults.fontSize;
    if (window.CLWSound && typeof CLWSound.setSoundEffectsEnabled === "function") {
      CLWSound.setSoundEffectsEnabled(defaults.soundEffects);
    }
    if (window.CLWLocale && typeof CLWLocale.setLocale === "function") {
      CLWLocale.setLocale(defaults.language);
    }
    applyFontSize(defaults.fontSize, { emit: true });
    applyPrefStateToDom();
  }

  function positionPanel() {
    if (!panelEl || !triggerEl) return;
    var mobile = window.matchMedia && window.matchMedia("(max-width: 36rem)").matches;
    var headerH = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--header-height")
    );
    var headerPx =
      (Number.isFinite(headerH) ? headerH : 3.5) *
      parseFloat(getComputedStyle(document.documentElement).fontSize || 16);

    if (mobile) {
      panelEl.style.left = "50%";
      panelEl.style.right = "auto";
      panelEl.style.top = Math.round(headerPx + 8) + "px";
      return;
    }

    var rect = triggerEl.getBoundingClientRect();
    var gap = 8;
    var top = rect.bottom + gap;
    var right = Math.max(12, window.innerWidth - rect.right);
    panelEl.style.top = top + "px";
    panelEl.style.right = right + "px";
    panelEl.style.left = "auto";
  }

  function openPanel() {
    if (isOpen || !rootEl || !backdropEl || !panelEl) return;
    triggerEl = document.querySelector("[data-auth-trigger]");
    lastFocusEl = document.activeElement;
    isOpen = true;
    positionPanel();
    backdropEl.classList.add("is-open");
    panelEl.classList.add("is-open");
    if (triggerEl) {
      triggerEl.setAttribute("aria-expanded", "true");
    }
    refreshProfileCard();
    refreshProgressCard();
    syncSoundFromCLW();
    syncLocaleFromCLW();
    applyPrefStateToDom();
    var closeBtn = rootEl.querySelector("[data-profile-settings-close]");
    if (closeBtn) closeBtn.focus();
  }

  function closePanel() {
    if (!isOpen || !rootEl || !backdropEl || !panelEl) return;
    isOpen = false;
    backdropEl.classList.remove("is-open");
    panelEl.classList.remove("is-open");
    if (triggerEl) {
      triggerEl.setAttribute("aria-expanded", "false");
    }
    if (lastFocusEl && typeof lastFocusEl.focus === "function") {
      lastFocusEl.focus();
    }
  }

  function togglePanel() {
    if (isOpen) closePanel();
    else openPanel();
  }

  function onDocumentKeydown(e) {
    if (!isOpen) return;
    if (e.key === "Escape") {
      e.preventDefault();
      closePanel();
    }
  }

  function onResize() {
    if (isOpen) positionPanel();
  }

  function bindPanelEvents() {
    if (!rootEl || rootEl.dataset.bound === "1") return;
    rootEl.dataset.bound = "1";

    rootEl.addEventListener("click", function (e) {
      var t = e.target;
      if (t.closest("[data-profile-settings-backdrop]")) {
        closePanel();
        return;
      }
      if (t.closest("[data-profile-settings-close]")) {
        closePanel();
        return;
      }
      if (t.closest('[data-clw-pref="sound-effects"]')) {
        var sw = t.closest('[data-clw-pref="sound-effects"]');
        var on = sw.getAttribute("aria-checked") !== "true";
        prefState.soundEffects = on;
        sw.setAttribute("aria-checked", on ? "true" : "false");
        if (window.CLWSound && typeof CLWSound.setSoundEffectsEnabled === "function") {
          CLWSound.setSoundEffectsEnabled(on);
        }
        return;
      }
      var seg = t.closest("[data-clw-pref][data-clw-pref-value]");
      if (seg && seg.getAttribute("data-clw-pref") !== "sound-effects") {
        var key = seg.getAttribute("data-clw-pref");
        var val = seg.getAttribute("data-clw-pref-value");
        if (key === "language" && (val === "zh" || val === "en")) {
          prefState.language = val;
          if (window.CLWLocale && typeof CLWLocale.setLocale === "function") {
            CLWLocale.setLocale(val);
          }
        } else if (key === "colour-mode" && (val === "default" || val === "accessible")) {
          applyColourMode(val);
        } else if (key === "font-size" && (val === "s" || val === "m" || val === "l")) {
          applyFontSize(val, { emit: true });
        }
        applyPrefStateToDom();
      }
      if (t.closest("[data-profile-settings-reset]")) {
        resetPrefs();
      }
      if (t.closest("[data-profile-settings-login]")) {
        closePanel();
        if (window.CLWAuth && typeof CLWAuth.openLoginModal === "function") {
          CLWAuth.openLoginModal({ mode: "signin" });
        }
        return;
      }
      if (t.closest("[data-profile-settings-signup]")) {
        closePanel();
        if (window.CLWAuth && typeof CLWAuth.openLoginModal === "function") {
          CLWAuth.openLoginModal({ mode: "signup" });
        }
        return;
      }
    });
  }

  function bindTrigger() {
    var trig = document.querySelector("[data-auth-trigger]");
    if (!trig || trig.dataset.profileSettingsTriggerBound === "1") return;
    trig.dataset.profileSettingsTriggerBound = "1";
    trig.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      togglePanel();
    });
  }

  function mount() {
    if (rootEl) return;
    rootEl = document.createElement("div");
    rootEl.className = "profile-settings-root";
    rootEl.setAttribute("data-profile-settings-root", "");
    rootEl.innerHTML = buildMarkup();
    document.body.appendChild(rootEl);
    backdropEl = rootEl.querySelector("[data-profile-settings-backdrop]");
    panelEl = rootEl.querySelector("[data-profile-settings-panel]");
    bindPanelEvents();
    document.addEventListener("keydown", onDocumentKeydown);
    window.addEventListener("resize", onResize);
  }

  function init() {
    mount();
    bindTrigger();
    refreshProfileCard();
    syncSoundFromCLW();
    syncLocaleFromCLW();
    syncColourModeFromStorage();
    syncFontSizeFromStorage();
    applyPrefStateToDom();
  }

  syncFontSizeFromStorage();

  document.addEventListener("site:components-ready", init);
  document.addEventListener("clw:auth-changed", function () {
    refreshProfileCard();
    syncSoundFromCLW();
    syncLocaleFromCLW();
    syncColourModeFromStorage();
    syncFontSizeFromStorage();
    applyPrefStateToDom();
  });
  document.addEventListener("clw:locale-changed", function (ev) {
    var loc = ev.detail && ev.detail.locale;
    if (loc === "zh" || loc === "en") {
      prefState.language = loc;
      rebuildPanelContent();
      applyPrefStateToDom();
    }
  });
  document.addEventListener("clw:sound-prefs-changed", function () {
    syncSoundFromCLW();
    applyPrefStateToDom();
  });
  document.addEventListener("clw:user-data-updated", refreshProgressCard);
  document.addEventListener("clw:activity-recorded", refreshProgressCard);

  window.CLWProfileSettings = {
    open: openPanel,
    close: closePanel,
    toggle: togglePanel,
    isOpen: function () {
      return isOpen;
    },
    /** Read-only snapshot for future persistence hooks */
    getPreferenceState: function () {
      return Object.assign({}, prefState);
    },
    setFontSize: function (fontSize) {
      applyFontSize(fontSize, { emit: true });
      applyPrefStateToDom();
    }
  };
})();
