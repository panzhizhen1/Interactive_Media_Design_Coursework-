/**
 * Site color themes: each theme is five gradient stops (deepest → lightest).
 * Persists choice in localStorage; applied on every page load.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "clw_theme_id";
  var AUTH_USER_KEY = "clw_current_user";
  var GUEST_SESSION_THEME_KEY = "clw_guest_session_theme_id";

  /**
   * @typedef {{ id: string, swatch: string, stops: string[], primaryHover: string }} ThemeGroup
   */
  var THEME_REGISTRY = {
    blue: {
      id: "blue",
      swatch: "#00b4d8",
      stops: ["#03045e", "#0077b6", "#00b4d8", "#90e0ef", "#caf0f8"],
      primaryHover: "#006199"
    }
  };

  var currentId = "blue";

  function hasLoggedInUser() {
    try {
      var raw = localStorage.getItem(AUTH_USER_KEY);
      if (!raw) return false;
      var parsed = JSON.parse(raw);
      return !!(parsed && typeof parsed.username === "string" && parsed.username.trim());
    } catch (e) {
      return false;
    }
  }

  function normalizeHex(hex) {
    return hex.trim().toLowerCase();
  }

  function resolveThemeId(id) {
    if (id && THEME_REGISTRY[id]) return id;
    return "blue";
  }

  function readStoredThemeId() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw && THEME_REGISTRY[raw]) return raw;
    } catch (e) {
      /* ignore */
    }
    return "";
  }

  function readGuestSessionThemeId() {
    try {
      var raw = sessionStorage.getItem(GUEST_SESSION_THEME_KEY);
      if (raw && THEME_REGISTRY[raw]) return raw;
    } catch (e) {
      /* ignore */
    }
    return "";
  }

  function writeGuestSessionThemeId(themeId) {
    try {
      sessionStorage.setItem(GUEST_SESSION_THEME_KEY, themeId);
    } catch (e) {
      /* ignore */
    }
  }

  function applyTheme(themeId) {
    var id = resolveThemeId(themeId);
    var t = THEME_REGISTRY[id];
    currentId = id;
    var root = document.documentElement;
    root.style.setProperty("--theme-stop-1", normalizeHex(t.stops[0]));
    root.style.setProperty("--theme-stop-2", normalizeHex(t.stops[1]));
    root.style.setProperty("--theme-stop-3", normalizeHex(t.stops[2]));
    root.style.setProperty("--theme-stop-4", normalizeHex(t.stops[3]));
    root.style.setProperty("--theme-stop-5", normalizeHex(t.stops[4]));
    root.style.setProperty("--color-primary-hover", normalizeHex(t.primaryHover));
    if (hasLoggedInUser()) {
      try {
        localStorage.setItem(STORAGE_KEY, id);
      } catch (err) {
        /* ignore */
      }
    } else {
      writeGuestSessionThemeId(id);
    }
  }

  var storedThemeId = hasLoggedInUser() ? readStoredThemeId() : readGuestSessionThemeId();
  currentId = resolveThemeId(storedThemeId || "blue");
  applyTheme(currentId);

  window.CLWTheme = {
    /** @param {string} themeId */
    applyTheme: function (themeId) {
      applyTheme(themeId);
    },
    getCurrentId: function () {
      return currentId;
    },
    getRegistry: function () {
      return THEME_REGISTRY;
    },
    applyRandomTheme: function () {
      applyTheme("blue");
    }
  };
})();
