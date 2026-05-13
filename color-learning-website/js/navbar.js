/**
 * Navbar: highlight current page, mobile menu toggle.
 */
(function () {
  "use strict";

  function setActiveNav() {
    const path = window.location.pathname.replace(/\\/g, "/");
    const file = path.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".site-nav__link[data-nav]");
    links.forEach(function (a) {
      const target = a.getAttribute("data-nav");
      if (!target) return;
      const testSubpage =
        target === "test.html" &&
        /^test(?:-[a-z]+)?\.html$/i.test(file);
      const communitySubpage =
        target === "community.html" &&
        /^community(?:-[a-z]+)?\.html$/i.test(file);
      const match =
        target === file ||
        testSubpage ||
        communitySubpage ||
        (file === "" && target === "index.html");
      a.classList.toggle("is-active", match);
    });
  }

  function bindMobileToggle() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector(".site-nav");
    if (!toggle || !nav) return;
    if (toggle.dataset.navToggleBound === "true") return;
    toggle.dataset.navToggleBound = "true";
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
      const open = nav.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function bindHeaderOverlapState() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    if (header.dataset.navOverlapBound === "true") return;
    header.dataset.navOverlapBound = "true";

    let rafId = 0;
    const shouldShowOverlapBackground = function () {
      const nav = document.querySelector(".site-nav");
      if (nav && nav.classList.contains("is-open")) return true;

      const headerRect = header.getBoundingClientRect();
      const main = document.querySelector("main");
      if (main) {
        // Show only when content actually reaches the header area.
        return main.getBoundingClientRect().top <= headerRect.bottom - 2;
      }
      return window.scrollY > Math.max(8, Math.round(headerRect.height));
    };

    const syncOverlapState = function () {
      rafId = 0;
      const overlapped = shouldShowOverlapBackground();
      header.classList.toggle("site-header--overlap", overlapped);
    };
    const requestSync = function () {
      if (rafId) return;
      rafId = window.requestAnimationFrame(syncOverlapState);
    };

    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);
    syncOverlapState();
  }

  function init() {
    setActiveNav();
    bindMobileToggle();
    bindHeaderOverlapState();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  document.addEventListener("site:components-ready", function () {
    setActiveNav();
    bindMobileToggle();
    bindHeaderOverlapState();
  });
})();
