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

  document.addEventListener("DOMContentLoaded", function () {
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
