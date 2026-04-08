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
  var EMBEDDED_NAVBAR =
    '<div class="site-header__inner">' +
    '<div class="site-header__end">' +
    '<button type="button" class="site-nav__toggle" data-nav-toggle aria-expanded="false" aria-controls="primary-nav">' +
    "Menu" +
    "</button>" +
    '<nav class="site-nav" id="primary-nav" aria-label="Primary">' +
    '<ul class="site-nav__list">' +
    '<li><a class="site-nav__link" href="index.html" data-nav="index.html">Home</a></li>' +
    '<li><a class="site-nav__link" href="learning.html" data-nav="learning.html">Learn</a></li>' +
    '<li><a class="site-nav__link" href="game.html" data-nav="game.html">Game</a></li>' +
    '<li><a class="site-nav__link" href="test.html" data-nav="test.html">Test</a></li>' +
    '<li><a class="site-nav__link" href="community.html" data-nav="community.html">Community</a></li>' +
    "</ul>" +
    "</nav>" +
    '<div class="user-menu" data-user-menu>' +
    '<button type="button" class="user-menu-trigger" aria-label="Account" title="Sign in" data-auth-trigger aria-haspopup="true" aria-expanded="false">' +
    '<span class="user-avatar user-avatar--placeholder" data-user-avatar aria-hidden="true"></span>' +
    "</button>" +
    '<div class="user-menu__dropdown" data-user-dropdown hidden>' +
    '<button type="button" class="user-menu__logout" data-auth-logout>Log out</button>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";

  var EMBEDDED_FOOTER =
    '<div class="site-footer__inner">' +
    "<p>Color Learning · Course project · <span id=\"footer-year\"></span></p>" +
    "</div>";
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

    document.dispatchEvent(new CustomEvent("site:components-ready"));
  });
})();
