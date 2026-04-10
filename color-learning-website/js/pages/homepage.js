/**
 * Homepage: theme picker UI (default mode only; RGB/HSV reserved).
 */
(function () {
  "use strict";

  function syncThemeSelection(section) {
    if (!window.CLWTheme) return;
    var current = window.CLWTheme.getCurrentId();
    section.querySelectorAll("[data-theme-option]").forEach(function (btn) {
      var id = btn.getAttribute("data-theme-option");
      btn.classList.toggle("theme-picker__theme-option--selected", id === current);
      btn.setAttribute("aria-checked", id === current ? "true" : "false");
    });
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
    Array.from(rawText).forEach(function (char) {
      var span = document.createElement("span");
      span.className = "home-hero__letter";

      if (char === " ") {
        span.classList.add("home-hero__letter--space");
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = char;
      }

      fragment.appendChild(span);
      letters.push(span);
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
        if (letter.classList.contains("home-hero__letter--space")) return;
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

    section.querySelectorAll("[data-theme-option]").forEach(function (btn) {
      btn.setAttribute("role", "radio");
    });

    syncThemeSelection(section);

    section.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-theme-option]");
      if (!btn) return;
      var id = btn.getAttribute("data-theme-option");
      if (!id) return;
      window.CLWTheme.applyTheme(id);
      syncThemeSelection(section);
    });
  });
})();
