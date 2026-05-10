/**
 * Homepage-only intro splat sequence for existing fluid background.
 * Additive layer: does NOT modify fluid-background.js internals.
 */
(function () {
  "use strict";

  var PLAYED_KEY = "clw_home_fluid_intro_played_v1";

  function isHomepage() {
    var page = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    return page === "index.html" || page === "";
  }

  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function dispatchMouse(type, x, y) {
    var evt = new MouseEvent(type, {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: x,
      clientY: y,
      buttons: type === "mouseup" || type === "mouseleave" ? 0 : 1
    });
    window.dispatchEvent(evt);
  }

  function playIntroOnce() {
    if (!isHomepage() || prefersReducedMotion()) return;

    try {
      if (sessionStorage.getItem(PLAYED_KEY) === "1") return;
      sessionStorage.setItem(PLAYED_KEY, "1");
    } catch (e) {
      // Ignore storage failures, still play once for current runtime.
    }

    var canvas = document.getElementById("fluid-canvas");
    if (!canvas) return;

    var width = Math.max(window.innerWidth || 0, 1);
    var height = Math.max(window.innerHeight || 0, 1);
    var cx = width * 0.5;
    var cy = height * 0.5;
    var cols = 6;
    var rows = 4;
    var points = [];
    var marginX = width * 0.03;
    var marginY = height * 0.03;

    for (var r = 0; r < rows; r += 1) {
      for (var c = 0; c < cols; c += 1) {
        var fx = cols === 1 ? 0.5 : c / (cols - 1);
        var fy = rows === 1 ? 0.5 : r / (rows - 1);
        var baseX = marginX + fx * (width - marginX * 2);
        var baseY = marginY + fy * (height - marginY * 2);
        var jitterX = (Math.random() - 0.5) * width * 0.025;
        var jitterY = (Math.random() - 0.5) * height * 0.025;
        var x = Math.max(12, Math.min(width - 12, baseX + jitterX));
        var y = Math.max(12, Math.min(height - 12, baseY + jitterY));

        var vx = x - cx;
        var vy = y - cy;
        var len = Math.sqrt(vx * vx + vy * vy) || 1;
        var amp = Math.min(width, height) * (0.11 + Math.random() * 0.07);
        points.push({
          x: x,
          y: y,
          x2: x + (vx / len) * amp,
          y2: y + (vy / len) * amp
        });
      }
    }

    // Shuffle so visual spread feels organic.
    points.sort(function () {
      return Math.random() - 0.5;
    });

    var stepMs = 70;
    points.forEach(function (p, i) {
      window.setTimeout(function () {
        dispatchMouse("mousedown", p.x, p.y);
        dispatchMouse("mousemove", p.x2, p.y2);
        dispatchMouse("mouseup", p.x2, p.y2);
      }, i * stepMs);
    });

    window.setTimeout(function () {
      dispatchMouse("mouseup", width * 0.5, height * 0.5);
      dispatchMouse("mouseleave", width * 0.5, height * 0.5);
    }, points.length * stepMs + 120);
  }

  // Let fluid-background listeners finish binding first.
  window.setTimeout(playIntroOnce, 180);
})();
