/**
 * Homepage: theme picker UI (default mode only; RGB/HSV reserved).
 */
(function () {
  "use strict";

  var MODE_STORAGE_KEY = "clw_theme_mode";
  var WHEEL_COLOR_STORAGE_KEY = "clw_theme_wheel_color";

  function syncThemeSelection(section) {
    if (!window.CLWTheme) return;
    var current = window.CLWTheme.getCurrentId();
    section.querySelectorAll("[data-theme-option]").forEach(function (btn) {
      var id = btn.getAttribute("data-theme-option");
      btn.classList.toggle("theme-picker__theme-option--selected", id === current);
      btn.setAttribute("aria-checked", id === current ? "true" : "false");
    });
  }

  function clearThemeSelection(section) {
    section.querySelectorAll("[data-theme-option]").forEach(function (btn) {
      btn.classList.remove("theme-picker__theme-option--selected");
      btn.setAttribute("aria-checked", "false");
    });
  }

  function readStoredValue(key, fallback) {
    try {
      var value = localStorage.getItem(key);
      return value || fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeStoredValue(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      /* ignore */
    }
  }

  function parseHexColor(hex) {
    if (!hex || typeof hex !== "string") return null;
    var normalized = hex.trim().toLowerCase();
    var match = /^#([a-f0-9]{6})$/.exec(normalized);
    if (!match) return null;
    var value = match[1];
    return {
      r: parseInt(value.slice(0, 2), 16),
      g: parseInt(value.slice(2, 4), 16),
      b: parseInt(value.slice(4, 6), 16)
    };
  }

  function rgbToHex(r, g, b) {
    function toHexChannel(value) {
      var bounded = Math.max(0, Math.min(255, Math.round(value)));
      return bounded.toString(16).padStart(2, "0");
    }
    return "#" + toHexChannel(r) + toHexChannel(g) + toHexChannel(b);
  }

  function hslToRgb(h, s, l) {
    var hue = ((h % 360) + 360) % 360;
    var sat = Math.max(0, Math.min(100, s)) / 100;
    var light = Math.max(0, Math.min(100, l)) / 100;

    var c = (1 - Math.abs(2 * light - 1)) * sat;
    var x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    var m = light - c / 2;
    var r = 0;
    var g = 0;
    var b = 0;

    if (hue < 60) {
      r = c;
      g = x;
    } else if (hue < 120) {
      r = x;
      g = c;
    } else if (hue < 180) {
      g = c;
      b = x;
    } else if (hue < 240) {
      g = x;
      b = c;
    } else if (hue < 300) {
      r = x;
      b = c;
    } else {
      r = c;
      b = x;
    }

    return {
      r: (r + m) * 255,
      g: (g + m) * 255,
      b: (b + m) * 255
    };
  }

  function rgbToHue(rgb) {
    var r = rgb.r / 255;
    var g = rgb.g / 255;
    var b = rgb.b / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    if (delta === 0) return 0;

    var hue = 0;
    if (max === r) {
      hue = (g - b) / delta;
      if (g < b) hue += 6;
    } else if (max === g) {
      hue = (b - r) / delta + 2;
    } else {
      hue = (r - g) / delta + 4;
    }
    return Math.round(hue * 60) % 360;
  }

  function wrapHue(value) {
    var hue = value % 360;
    return hue < 0 ? hue + 360 : hue;
  }

  function createWheelPalette(hex) {
    var rgb = parseHexColor(hex);
    var hue = rgb ? rgbToHue(rgb) : 196;
    return {
      stops: [
        "hsl(" + wrapHue(hue - 30) + " 90% 28%)",
        "hsl(" + wrapHue(hue - 10) + " 92% 40%)",
        "hsl(" + wrapHue(hue) + " 95% 50%)",
        "hsl(" + wrapHue(hue + 18) + " 88% 66%)",
        "hsl(" + wrapHue(hue + 36) + " 85% 80%)"
      ],
      primaryHover: "hsl(" + wrapHue(hue - 12) + " 85% 36%)"
    };
  }

  function applyWheelTheme(hex) {
    var palette = createWheelPalette(hex);
    var root = document.documentElement;
    root.style.setProperty("--theme-stop-1", palette.stops[0]);
    root.style.setProperty("--theme-stop-2", palette.stops[1]);
    root.style.setProperty("--theme-stop-3", palette.stops[2]);
    root.style.setProperty("--theme-stop-4", palette.stops[3]);
    root.style.setProperty("--theme-stop-5", palette.stops[4]);
    root.style.setProperty("--color-primary-hover", palette.primaryHover);
  }

  function setThemeMode(section, mode) {
    var modeSelect = section.querySelector("[data-theme-mode]");
    var wheelWrap = section.querySelector("[data-theme-wheel-wrap]");
    var swatchWrap = section.querySelector(".theme-picker__swatches");
    var pickerCard = section.closest(".theme-picker");
    var isWheel = mode === "wheel";

    if (modeSelect && modeSelect.value !== mode) modeSelect.value = mode;
    if (wheelWrap) wheelWrap.hidden = !isWheel;
    if (swatchWrap) swatchWrap.hidden = isWheel;
    if (pickerCard) pickerCard.classList.toggle("theme-picker--wheel", isWheel);
    if (isWheel) {
      clearThemeSelection(section);
    } else {
      syncThemeSelection(section);
    }

    writeStoredValue(MODE_STORAGE_KEY, mode);
  }

  function setupWheelPicker(wheelCanvas, wheelInput, onColorChange) {
    if (!wheelCanvas || !wheelInput || typeof onColorChange !== "function") return;
    var wheelCtx = wheelCanvas.getContext("2d");
    if (!wheelCtx) return;

    function getHueFromInput() {
      return rgbToHue(parseHexColor(wheelInput.value) || { r: 0, g: 180, b: 216 });
    }

    function renderWheel() {
      var size = Math.min(wheelCanvas.width, wheelCanvas.height);
      var center = size / 2;
      var outerRadius = center - 3;
      var innerRadius = outerRadius * 0.58;
      var hue = getHueFromInput();

      wheelCtx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);
      var gradient = wheelCtx.createConicGradient(-Math.PI / 2, center, center);
      gradient.addColorStop(0, "#ff0044");
      gradient.addColorStop(1 / 6, "#ff8c00");
      gradient.addColorStop(2 / 6, "#ffd500");
      gradient.addColorStop(3 / 6, "#27c93f");
      gradient.addColorStop(4 / 6, "#00a5ff");
      gradient.addColorStop(5 / 6, "#7a35ff");
      gradient.addColorStop(1, "#ff0044");

      wheelCtx.fillStyle = gradient;
      wheelCtx.beginPath();
      wheelCtx.arc(center, center, outerRadius, 0, Math.PI * 2);
      wheelCtx.arc(center, center, innerRadius, 0, Math.PI * 2, true);
      wheelCtx.fill("evenodd");

      wheelCtx.strokeStyle = "rgba(15, 23, 42, 0.2)";
      wheelCtx.lineWidth = 2;
      wheelCtx.beginPath();
      wheelCtx.arc(center, center, outerRadius + 1, 0, Math.PI * 2);
      wheelCtx.stroke();

      var markerAngle = (hue * Math.PI) / 180 - Math.PI / 2;
      var markerRadius = (outerRadius + innerRadius) / 2;
      var markerX = center + Math.cos(markerAngle) * markerRadius;
      var markerY = center + Math.sin(markerAngle) * markerRadius;
      wheelCtx.beginPath();
      wheelCtx.fillStyle = "#ffffff";
      wheelCtx.strokeStyle = "rgba(15, 23, 42, 0.85)";
      wheelCtx.lineWidth = 2;
      wheelCtx.arc(markerX, markerY, 6, 0, Math.PI * 2);
      wheelCtx.fill();
      wheelCtx.stroke();
    }

    function updateFromPointer(clientX, clientY) {
      var rect = wheelCanvas.getBoundingClientRect();
      var scaleX = wheelCanvas.width / rect.width;
      var scaleY = wheelCanvas.height / rect.height;
      var x = (clientX - rect.left) * scaleX;
      var y = (clientY - rect.top) * scaleY;
      var centerX = wheelCanvas.width / 2;
      var centerY = wheelCanvas.height / 2;
      var dx = x - centerX;
      var dy = y - centerY;
      var distance = Math.sqrt(dx * dx + dy * dy);
      var outerRadius = centerX - 3;
      var innerRadius = outerRadius * 0.58;
      if (distance < innerRadius || distance > outerRadius) return;

      var angle = Math.atan2(dy, dx);
      var hue = ((angle * 180) / Math.PI + 90 + 360) % 360;
      var rgb = hslToRgb(hue, 95, 50);
      var hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      wheelInput.value = hex;
      onColorChange(hex);
      renderWheel();
    }

    var dragging = false;
    wheelCanvas.addEventListener("pointerdown", function (event) {
      dragging = true;
      wheelCanvas.setPointerCapture(event.pointerId);
      updateFromPointer(event.clientX, event.clientY);
    });
    wheelCanvas.addEventListener("pointermove", function (event) {
      if (!dragging) return;
      updateFromPointer(event.clientX, event.clientY);
    });
    wheelCanvas.addEventListener("pointerup", function (event) {
      dragging = false;
      wheelCanvas.releasePointerCapture(event.pointerId);
    });
    wheelCanvas.addEventListener("pointercancel", function () {
      dragging = false;
    });

    wheelInput.addEventListener("input", renderWheel);
    renderWheel();
  }

  function clearTaglineEffect(letters) {
    letters.forEach(function (letter) {
      letter.classList.remove("is-active");
    });
  }

  function setSketchStyle(ctx, scale) {
    var ratio = typeof scale === "number" ? scale : 1;
    ctx.lineWidth = Math.max(4 * ratio, 1);
    ctx.strokeStyle = "#000";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }

  function loadGameDrawingsLibrary() {
    return fetch("js/pages/game.js")
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load game library");
        return res.text();
      })
      .then(function (source) {
        var startToken = "const drawings=";
        var endToken = "\n\nconst galleryView";
        var startIndex = source.indexOf(startToken);
        var endIndex = source.indexOf(endToken, startIndex);
        if (startIndex < 0 || endIndex < 0) throw new Error("Could not parse drawings library");
        var expression = source.slice(startIndex + startToken.length, endIndex).trim();
        if (expression.endsWith(";")) expression = expression.slice(0, -1);
        return new Function("return " + expression + ";")();
      });
  }

  function setupHomeGameSpotlight() {
    var previewCanvas = document.querySelector("[data-home-game-preview]");
    var previewLink = document.querySelector("[data-home-game-link]");
    if (!previewCanvas || !previewLink) return;

    var ctx = previewCanvas.getContext("2d");
    if (!ctx) return;

    loadGameDrawingsLibrary()
      .then(function (drawings) {
        if (!Array.isArray(drawings) || !drawings.length) return;
        var randomIndex = Math.floor(Math.random() * drawings.length);
        var drawing = drawings[randomIndex];
        if (!drawing || typeof drawing.draw !== "function") return;

        ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
        setSketchStyle(ctx, 0.5);
        drawing.draw(ctx, previewCanvas.width, previewCanvas.height);

        previewLink.href = "game.html?openDrawing=" + String(randomIndex);
        previewLink.setAttribute("aria-label", "Start your color challenge with " + drawing.name);
      })
      .catch(function () {
        previewLink.href = "game.html";
      });
  }

  function setupHeroTagline() {
    var tagline = document.querySelector(".home-hero__tagline");
    if (!tagline) return;

    var rawText = tagline.textContent || "";
    if (!rawText.trim()) return;
    tagline.setAttribute("aria-label", rawText.trim());

    var letters = [];
    var fragment = document.createDocumentFragment();
    rawText.split(/(\s+)/).forEach(function (token) {
      if (!token) return;

      if (/^\s+$/.test(token)) {
        fragment.appendChild(document.createTextNode(token));
        return;
      }

      var word = document.createElement("span");
      word.className = "home-hero__word";

      Array.from(token).forEach(function (char) {
        var span = document.createElement("span");
        span.className = "home-hero__letter";
        span.textContent = char;
        word.appendChild(span);
        letters.push(span);
      });

      fragment.appendChild(word);
    });

    tagline.textContent = "";
    tagline.appendChild(fragment);

    function syncBandMetrics() {
      letters.forEach(function (letter) {
        letter.style.setProperty("--letter-x", letter.offsetLeft + "px");
      });
    }

    var animationId = 0;
    var speedPxPerSec = 100;
    var hueSpreadPx = 16;

    function animateBand(timestamp) {
      var flow = (timestamp / 1000) * speedPxPerSec;
      letters.forEach(function (letter) {
        var x = parseFloat(letter.style.getPropertyValue("--letter-x")) || 0;
        var hue = (flow / hueSpreadPx + x / hueSpreadPx) % 360;
        letter.style.setProperty("--letter-hue", String(hue));
      });
      animationId = window.requestAnimationFrame(animateBand);
    }

    syncBandMetrics();
    window.addEventListener("resize", syncBandMetrics);
    animationId = window.requestAnimationFrame(animateBand);

    tagline.addEventListener("pointermove", function (event) {
      var target = event.target.closest(".home-hero__letter");
      if (!target || !tagline.contains(target)) return;

      clearTaglineEffect(letters);
      target.classList.add("is-active");
    });

    tagline.addEventListener("pointerleave", function () {
      clearTaglineEffect(letters);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupHeroTagline();
    setupHomeGameSpotlight();

    var section = document.querySelector("[data-theme-picker]");
    if (!section || !window.CLWTheme) return;
    var modeSelect = section.querySelector("[data-theme-mode]");
    var wheelInput = section.querySelector("[data-theme-wheel]");
    var wheelCanvas = section.querySelector("[data-theme-wheel-canvas]");

    section.querySelectorAll("[data-theme-option]").forEach(function (btn) {
      btn.setAttribute("role", "radio");
    });

    var storedWheelColor = readStoredValue(WHEEL_COLOR_STORAGE_KEY, "#00b4d8");
    if (wheelInput && /^#([a-f0-9]{6})$/i.test(storedWheelColor)) {
      wheelInput.value = storedWheelColor;
    }

    var storedMode = readStoredValue(MODE_STORAGE_KEY, "default");
    setupWheelPicker(wheelCanvas, wheelInput, function (hex) {
      writeStoredValue(WHEEL_COLOR_STORAGE_KEY, hex);
      if (modeSelect && modeSelect.value === "wheel") {
        applyWheelTheme(hex);
      }
    });

    if (storedMode === "wheel") {
      setThemeMode(section, "wheel");
      applyWheelTheme(wheelInput ? wheelInput.value : "#00b4d8");
    } else {
      setThemeMode(section, "default");
      syncThemeSelection(section);
    }

    section.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-theme-option]");
      if (!btn) return;
      var id = btn.getAttribute("data-theme-option");
      if (!id) return;
      setThemeMode(section, "default");
      window.CLWTheme.applyTheme(id);
      syncThemeSelection(section);
    });

    if (modeSelect) {
      modeSelect.addEventListener("change", function () {
        if (modeSelect.value === "wheel") {
          setThemeMode(section, "wheel");
          applyWheelTheme(wheelInput ? wheelInput.value : "#00b4d8");
          return;
        }
        setThemeMode(section, "default");
        window.CLWTheme.applyTheme(window.CLWTheme.getCurrentId());
        syncThemeSelection(section);
      });
    }

    if (wheelInput) {
      wheelInput.addEventListener("input", function () {
        writeStoredValue(WHEEL_COLOR_STORAGE_KEY, wheelInput.value);
        if (modeSelect && modeSelect.value === "wheel") {
          applyWheelTheme(wheelInput.value);
        }
      });
    }
  });
})();
