/**
 * Injects shared HTML (navbar / footer).
 * Over HTTP: loads from components/*.html via fetch.
 * file://: uses EMBEDDED_* below (must match components — see scripts/sync-fragments.mjs).
 *
 * After editing components/navbar.html or components/footer.html, run:
 *   node scripts/sync-fragments.mjs
 */
(function () {
  "use strict";
  // --- BEGIN AUTO-GENERATED (node scripts/sync-fragments.mjs) ---
  var EMBEDDED_NAVBAR = "<div class=\"site-header__inner\">\r\n  <div class=\"site-header__end\">\r\n    <button type=\"button\" class=\"site-nav__toggle\" data-nav-toggle aria-expanded=\"false\" aria-controls=\"primary-nav\">\r\n      Menu\r\n    </button>\r\n    <nav class=\"site-nav\" id=\"primary-nav\" aria-label=\"Primary\">\r\n      <ul class=\"site-nav__list\">\r\n        <li><a class=\"site-nav__link\" href=\"index.html\" data-nav=\"index.html\">Home</a></li>\r\n        <li><a class=\"site-nav__link\" href=\"learning.html\" data-nav=\"learning.html\">Learn</a></li>\r\n        <li><a class=\"site-nav__link\" href=\"game.html\" data-nav=\"game.html\">Game</a></li>\r\n        <li><a class=\"site-nav__link\" href=\"test.html\" data-nav=\"test.html\">Test</a></li>\r\n        <li><a class=\"site-nav__link\" href=\"community.html\" data-nav=\"community.html\">Community</a></li>\r\n      </ul>\r\n    </nav>\r\n    <div class=\"user-menu\" data-user-menu>\r\n      <button\r\n        type=\"button\"\r\n        class=\"user-menu-trigger\"\r\n        aria-label=\"Account\"\r\n        title=\"Log in\"\r\n        data-auth-trigger\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        <span class=\"user-avatar user-avatar--placeholder\" data-user-avatar aria-hidden=\"true\"></span>\r\n      </button>\r\n      <div class=\"user-menu__dropdown\" data-user-dropdown hidden>\r\n        <button type=\"button\" class=\"user-menu__logout\" data-auth-logout>Log out</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
  var EMBEDDED_FOOTER = "<div class=\"site-footer__inner\">\r\n  <p>Color Learning · Course project · <span id=\"footer-year\"></span></p>\r\n</div>";
  // --- END AUTO-GENERATED ---




  async function loadFragment(targetSelector, url, embeddedHtml) {
    var el = document.querySelector(targetSelector);
    if (!el) return;
    try {
      var res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      el.innerHTML = await res.text();
    } catch (e) {
      console.warn("[main.js] fetch failed, using embedded fragment:", url, e);
      if (embeddedHtml) {
        el.innerHTML = embeddedHtml;
      } else {
        el.innerHTML =
          '<p class="load-error" style="padding:1rem;background:#fef2f2;color:#991b1b;font-size:0.875rem;">Could not load this component.</p>';
      }
    }
  }

  document.addEventListener("DOMContentLoaded", async function () {
    await loadFragment("#site-navbar", "components/navbar.html", EMBEDDED_NAVBAR);
    await loadFragment("#site-footer", "components/footer.html", EMBEDDED_FOOTER);

    var yearEl = document.getElementById("footer-year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    var pageName = window.location.pathname.split("/").pop();
    if (pageName === "game.html") {
      var openDrawing = new URLSearchParams(window.location.search).get("openDrawing");
      if (/^\d+$/.test(openDrawing || "")) {
        var drawingBtn = document.querySelector('[data-open-drawing="' + openDrawing + '"]');
        if (drawingBtn) drawingBtn.click();
      }
    }

    document.dispatchEvent(new CustomEvent("site:components-ready"));
  });
})();
