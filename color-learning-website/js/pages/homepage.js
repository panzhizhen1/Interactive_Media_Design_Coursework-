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

  function hsvToRgb(h, s, v) {
    var hue = ((h % 360) + 360) % 360;
    var sat = Math.max(0, Math.min(100, s)) / 100;
    var val = Math.max(0, Math.min(100, v)) / 100;

    var c = val * sat;
    var x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    var m = val - c;
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

  function rgbToHsv(rgb) {
    var r = rgb.r / 255;
    var g = rgb.g / 255;
    var b = rgb.b / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    var hue = 0;

    if (delta !== 0) {
      if (max === r) {
        hue = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
      } else if (max === g) {
        hue = ((b - r) / delta + 2) * 60;
      } else {
        hue = ((r - g) / delta + 4) * 60;
      }
    }

    var sat = max === 0 ? 0 : delta / max;
    return {
      h: hue % 360,
      s: sat * 100,
      v: max * 100
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

  function setupWheelPicker(wheelCanvas, valueCanvas, wheelInput, onColorChange) {
    if (!wheelCanvas || !valueCanvas || !wheelInput || typeof onColorChange !== "function") return;
    var wheelCtx = wheelCanvas.getContext("2d");
    var valueCtx = valueCanvas.getContext("2d");
    if (!wheelCtx || !valueCtx) return;

    var parsed = parseHexColor(wheelInput.value) || { r: 0, g: 180, b: 216 };
    var hsv = rgbToHsv(parsed);
    var wheelImage = null;

    function buildWheelImage() {
      var w = wheelCanvas.width;
      var h = wheelCanvas.height;
      var centerX = w / 2;
      var centerY = h / 2;
      var radius = Math.min(w, h) / 2 - 3;
      var image = wheelCtx.createImageData(w, h);
      var data = image.data;

      for (var y = 0; y < h; y += 1) {
        for (var x = 0; x < w; x += 1) {
          var dx = x - centerX;
          var dy = y - centerY;
          var dist = Math.sqrt(dx * dx + dy * dy);
          var idx = (y * w + x) * 4;
          if (dist > radius) {
            data[idx + 3] = 0;
            continue;
          }

          var sat = Math.max(0, Math.min(1, dist / radius));
          var angle = Math.atan2(dy, dx);
          var hue = ((angle * 180) / Math.PI + 90 + 360) % 360;
          var rgb = hsvToRgb(hue, sat * 100, 100);
          data[idx] = Math.round(rgb.r);
          data[idx + 1] = Math.round(rgb.g);
          data[idx + 2] = Math.round(rgb.b);
          data[idx + 3] = 255;
        }
      }
      wheelImage = image;
    }

    function renderWheel() {
      if (!wheelImage) buildWheelImage();
      var size = Math.min(wheelCanvas.width, wheelCanvas.height);
      var center = size / 2;
      var radius = center - 3;
      var markerRadius = (hsv.s / 100) * radius;
      var markerAngle = (hsv.h * Math.PI) / 180 - Math.PI / 2;
      var markerX = center + Math.cos(markerAngle) * markerRadius;
      var markerY = center + Math.sin(markerAngle) * markerRadius;

      wheelCtx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);
      wheelCtx.putImageData(wheelImage, 0, 0);

      if (hsv.v < 100) {
        wheelCtx.fillStyle = "rgba(0,0,0," + String(1 - hsv.v / 100) + ")";
        wheelCtx.beginPath();
        wheelCtx.arc(center, center, radius, 0, Math.PI * 2);
        wheelCtx.fill();
      }

      wheelCtx.strokeStyle = "rgba(15, 23, 42, 0.28)";
      wheelCtx.lineWidth = 2;
      wheelCtx.beginPath();
      wheelCtx.arc(center, center, radius + 1, 0, Math.PI * 2);
      wheelCtx.stroke();

      wheelCtx.beginPath();
      wheelCtx.fillStyle = "#ffffff";
      wheelCtx.strokeStyle = "rgba(15, 23, 42, 0.9)";
      wheelCtx.lineWidth = 2;
      wheelCtx.arc(markerX, markerY, 6, 0, Math.PI * 2);
      wheelCtx.fill();
      wheelCtx.stroke();
    }

    function renderValueBar() {
      var w = valueCanvas.width;
      var h = valueCanvas.height;
      var markerX = (hsv.v / 100) * w;
      var fullColor = hsvToRgb(hsv.h, hsv.s, 100);
      var gradient = valueCtx.createLinearGradient(0, 0, w, 0);
      gradient.addColorStop(0, "#000000");
      gradient.addColorStop(1, rgbToHex(fullColor.r, fullColor.g, fullColor.b));

      valueCtx.clearRect(0, 0, w, h);
      valueCtx.fillStyle = gradient;
      valueCtx.fillRect(0, 0, w, h);

      valueCtx.strokeStyle = "rgba(15, 23, 42, 0.35)";
      valueCtx.lineWidth = 1;
      valueCtx.strokeRect(0.5, 0.5, w - 1, h - 1);

      valueCtx.beginPath();
      valueCtx.fillStyle = "#ffffff";
      valueCtx.strokeStyle = "rgba(15, 23, 42, 0.9)";
      valueCtx.lineWidth = 2;
      valueCtx.arc(markerX, h / 2, 6, 0, Math.PI * 2);
      valueCtx.fill();
      valueCtx.stroke();
    }

    function emitChange() {
      var rgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
      var hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      wheelInput.value = hex;
      onColorChange(hex);
    }

    function updateFromWheelPointer(clientX, clientY) {
      var rect = wheelCanvas.getBoundingClientRect();
      var scaleX = wheelCanvas.width / rect.width;
      var scaleY = wheelCanvas.height / rect.height;
      var x = (clientX - rect.left) * scaleX;
      var y = (clientY - rect.top) * scaleY;
      var centerX = wheelCanvas.width / 2;
      var centerY = wheelCanvas.height / 2;
      var dx = x - centerX;
      var dy = y - centerY;
      var radius = centerX - 3;
      var distance = Math.sqrt(dx * dx + dy * dy);
      var clampedDistance = Math.min(radius, Math.max(0, distance));
      var angle = Math.atan2(dy, dx);

      hsv.h = ((angle * 180) / Math.PI + 90 + 360) % 360;
      hsv.s = (clampedDistance / radius) * 100;
      emitChange();
      renderWheel();
      renderValueBar();
    }

    function updateFromValuePointer(clientX) {
      var rect = valueCanvas.getBoundingClientRect();
      var x = clientX - rect.left;
      var ratio = Math.max(0, Math.min(1, x / rect.width));
      hsv.v = ratio * 100;
      emitChange();
      renderWheel();
      renderValueBar();
    }

    function applyInputColor() {
      var next = parseHexColor(wheelInput.value);
      if (!next) return;
      hsv = rgbToHsv(next);
      renderWheel();
      renderValueBar();
    }

    var wheelDragging = false;
    wheelCanvas.addEventListener("pointerdown", function (event) {
      wheelDragging = true;
      wheelCanvas.setPointerCapture(event.pointerId);
      updateFromWheelPointer(event.clientX, event.clientY);
    });
    wheelCanvas.addEventListener("pointermove", function (event) {
      if (!wheelDragging) return;
      updateFromWheelPointer(event.clientX, event.clientY);
    });
    wheelCanvas.addEventListener("pointerup", function (event) {
      wheelDragging = false;
      wheelCanvas.releasePointerCapture(event.pointerId);
    });
    wheelCanvas.addEventListener("pointercancel", function () {
      wheelDragging = false;
    });

    var valueDragging = false;
    valueCanvas.addEventListener("pointerdown", function (event) {
      valueDragging = true;
      valueCanvas.setPointerCapture(event.pointerId);
      updateFromValuePointer(event.clientX);
    });
    valueCanvas.addEventListener("pointermove", function (event) {
      if (!valueDragging) return;
      updateFromValuePointer(event.clientX);
    });
    valueCanvas.addEventListener("pointerup", function (event) {
      valueDragging = false;
      valueCanvas.releasePointerCapture(event.pointerId);
    });
    valueCanvas.addEventListener("pointercancel", function () {
      valueDragging = false;
    });

    wheelInput.addEventListener("input", applyInputColor);
    applyInputColor();
  }

  function clearTaglineEffect(letters) {
    letters.forEach(function (letter) {
      letter.classList.remove("is-active");
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

    var section = document.querySelector("[data-theme-picker]");
    if (!section || !window.CLWTheme) return;
    var modeSelect = section.querySelector("[data-theme-mode]");
    var wheelInput = section.querySelector("[data-theme-wheel]");
    var wheelCanvas = section.querySelector("[data-theme-wheel-canvas]");
    var valueCanvas = section.querySelector("[data-theme-value-canvas]");

    section.querySelectorAll("[data-theme-option]").forEach(function (btn) {
      btn.setAttribute("role", "radio");
    });

    var storedWheelColor = readStoredValue(WHEEL_COLOR_STORAGE_KEY, "#00b4d8");
    if (wheelInput && /^#([a-f0-9]{6})$/i.test(storedWheelColor)) {
      wheelInput.value = storedWheelColor;
    }

    var storedMode = readStoredValue(MODE_STORAGE_KEY, "default");
    setupWheelPicker(wheelCanvas, valueCanvas, wheelInput, function (hex) {
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
