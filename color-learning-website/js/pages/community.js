/**
 * Community page v2:
 * - Learning-oriented filters and cross-page draft integration
 * - Weekly leaderboard from global activity events
 * - Lightweight moderation actions (hide/report/feature simulation)
 */
(function () {
  "use strict";

  var STORAGE = {
    currentUser: "clw_current_user",
    accounts: "clw_accounts_v1",
    activityLog: "clw_activity_log_v1",
    posts: "clw_posts_v3",
    legacyPostsV2: "clw_posts_v2",
    legacyPostsV1: "clw_posts_v1",
    draft: "clw_community_draft_v1",
    reports: "clw_community_reports_v1",
    hiddenPosts: "clw_community_hidden_posts_v1",
    rankSnapshot: "clw_community_rank_snapshot_v1"
  };

  var POINTS_PER_POST = 5;
  var DEFAULT_FILTER = "latest";
  var DEFAULT_TAG = "#Accessibility";
  var DEFAULT_COLOR = "#2b78e4";
  var MIN_POST_LENGTH = 8;
  var MAX_POST_LENGTH = 500;
  var SUBMIT_COOLDOWN_MS = 2500;
  var LIKE_COOLDOWN_MS = 600;
  var DEMO_MODERATOR_USERS = ["studentA"];
  var ALLOWED_ORIGINS = ["learning", "game", "test"];

  var seedPosts = [
    {
      id: "seed_1",
      author: "studentA",
      content: "Low contrast text can fail accessibility quickly. I now test pairs before publishing.",
      tag: "#Accessibility",
      colorHex: "#2b78e4",
      likes: 12,
      likedBy: [],
      pointsAwarded: 5,
      createdAt: "2026-04-09T06:00:00.000Z",
      origin: "learning",
      originMeta: { section: "Color accessibility primer" },
      featured: true
    },
    {
      id: "seed_2",
      author: "studentB",
      content: "HSV helped me quickly compare hue families before locking export values in RGB.",
      tag: "#Color_Theory",
      colorHex: "#1e4fb0",
      likes: 8,
      likedBy: [],
      pointsAwarded: 5,
      createdAt: "2026-04-09T03:30:00.000Z",
      origin: "test",
      originMeta: { chapter: "Color Models", score: 22, accuracy: 0.78 },
      featured: false
    }
  ];

  var baseLeaderboard = {
    studentA: 120,
    studentB: 95,
    studentC: 82
  };

  var state = {
    posts: [],
    activityLog: [],
    reports: [],
    filter: DEFAULT_FILTER,
    tagSearch: "",
    selectedTag: DEFAULT_TAG,
    selectedPostId: "",
    submitLockUntil: 0,
    likeLocks: {},
    toastTimer: 0
  };

  function getQueryParams() {
    var search = window.location.search.replace(/^\?/, "");
    if (!search) return {};
    return search.split("&").reduce(function (acc, pair) {
      if (!pair) return acc;
      var parts = pair.split("=");
      var key = decodeURIComponent(parts[0] || "");
      if (!key) return acc;
      acc[key] = decodeURIComponent(parts.slice(1).join("=") || "");
      return acc;
    }, {});
  }

  function applyHomeRouteState() {
    var params = getQueryParams();
    var view = getCommunityView();
    if (params.from !== "home-community") return;
    if (view === "all" && params.postId) {
      state.selectedPostId = String(params.postId);
      return;
    }
  }

  function jumpToHomeRouteTarget() {
    var params = getQueryParams();
    if (params.from !== "home-community") return;
    if (getCommunityView() !== "preview") return;
    if (params.focus !== "leaderboard") return;
    var leaderboardSection = document.querySelector("[data-total-leaderboard-list]");
    if (!leaderboardSection) return;
    var target = leaderboardSection.closest(".widget-card") || leaderboardSection;
    window.requestAnimationFrame(function () {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function readJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return fallback;
      var parsed = JSON.parse(raw);
      return parsed == null ? fallback : parsed;
    } catch (error) {
      console.warn("[community.js] readJSON failed:", key, error);
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn("[community.js] writeJSON failed:", key, error);
    }
  }

  function getAuthApi() {
    return window.CLWAuth || null;
  }

  function getCloudApi() {
    return window.CLWCommunityCloud || null;
  }

  function isCloudEnabled() {
    var cloud = getCloudApi();
    return !!(cloud && cloud.isConfigured && cloud.isConfigured());
  }

  function getLocale() {
    if (window.CLWLocale && typeof window.CLWLocale.getLocale === "function") {
      return window.CLWLocale.getLocale() === "zh" ? "zh" : "en";
    }
    return "en";
  }

  function isZhLocale() {
    return getLocale() === "zh";
  }

  function tr(key) {
    if (window.CLWLocale && typeof window.CLWLocale.translate === "function") {
      return window.CLWLocale.translate(String(key || ""), "global");
    }
    return String(key || "");
  }

  function localizeSourceLabel(source) {
    var normalized = String(source || "community").toLowerCase();
    if (normalized === "learning") return tr("From Learning");
    if (normalized === "game") return tr("From Game");
    if (normalized === "test") return tr("From Test");
    return tr("Community");
  }

  function setDocumentLocaleChrome() {
    document.documentElement.lang = isZhLocale() ? "zh-CN" : "en";
    document.title = getCommunityView() === "all" ? tr("All Community Posts — Color Learning") : tr("Community — Color Learning");
  }

  function isLoggedIn() {
    return !!(getAuthApi() && getAuthApi().isLoggedIn && getAuthApi().isLoggedIn());
  }

  function getCurrentUsername() {
    var auth = getAuthApi();
    if (auth && auth.getCurrentUsername) return auth.getCurrentUsername();
    var user = readJSON(STORAGE.currentUser, null);
    if (user && typeof user.username === "string" && user.username.trim()) return user.username.trim();
    return "Guest";
  }

  function isDemoModerator() {
    return DEMO_MODERATOR_USERS.indexOf(getCurrentUsername()) >= 0;
  }

  function isPostOwner(post) {
    return !!(post && post.author && post.author === getCurrentUsername() && getCurrentUsername() !== "Guest");
  }

  function getAccountsStore() {
    var raw = readJSON(STORAGE.accounts, { users: {} });
    if (!raw || typeof raw !== "object" || !raw.users || typeof raw.users !== "object") {
      return { users: {} };
    }
    return raw;
  }

  function readLocalActivityLog() {
    var rows = readJSON(STORAGE.activityLog, []);
    return Array.isArray(rows) ? rows : [];
  }

  function writeLocalActivityLog(rows) {
    writeJSON(STORAGE.activityLog, Array.isArray(rows) ? rows.slice(0, 1000) : []);
  }

  function readLocalReports() {
    var rows = readJSON(STORAGE.reports, []);
    return Array.isArray(rows) ? rows : [];
  }

  function writeLocalReports(rows) {
    writeJSON(STORAGE.reports, Array.isArray(rows) ? rows.slice(0, 400) : []);
  }

  function normalizeHex(value) {
    if (!value) return DEFAULT_COLOR;
    var hex = String(value).trim().toLowerCase();
    if (!hex.startsWith("#")) hex = "#" + hex;
    if (!/^#[0-9a-f]{6}$/.test(hex)) return DEFAULT_COLOR;
    return hex;
  }

  function normalizePaletteList(list, fallbackHex) {
    var rows = Array.isArray(list) ? list : [];
    var normalized = [];
    rows.forEach(function (item) {
      if (item == null) return;
      var text = String(item).trim().toLowerCase();
      if (!text) return;
      if (!text.startsWith("#")) text = "#" + text;
      if (!/^#[0-9a-f]{6}$/.test(text)) return;
      normalized.push(text);
    });
    if (!normalized.length) normalized.push(normalizeHex(fallbackHex || DEFAULT_COLOR));
    return normalized.slice(0, 24);
  }

  function sanitizeImageDataUrl(value) {
    if (!value) return "";
    var text = String(value);
    return text.indexOf("data:image/") === 0 ? text : "";
  }

  function parsePaletteInput(text, fallbackHex) {
    if (!text) return normalizePaletteList([], fallbackHex);
    var raw = String(text).trim().toLowerCase();
    if (!raw) return normalizePaletteList([], fallbackHex);

    var source = raw;
    var palettePathMatch = source.match(/coolors\.co\/palette\/([0-9a-f\-]+)/i);
    if (palettePathMatch && palettePathMatch[1]) {
      source = palettePathMatch[1];
    } else if (source.indexOf("coolors.co/") >= 0) {
      var fromCoolors = source.split("coolors.co/")[1] || "";
      source = fromCoolors.split("?")[0].split("#")[0];
    }
    source = source.split("?")[0].split("#")[0];

    var parts;
    if (source.indexOf("-") >= 0 && source.indexOf(",") < 0) {
      parts = source.split("-");
    } else {
      parts = source.split(/[,\s]+/);
    }
    return normalizePaletteList(parts, fallbackHex);
  }

  function paletteToInputText(list) {
    return normalizePaletteList(list, DEFAULT_COLOR)
      .map(function (hex) { return hex.replace("#", ""); })
      .join("-");
  }

  function readPaletteFromHiddenInput() {
    var input = document.querySelector("[data-palette-input]");
    if (!input) return [DEFAULT_COLOR];
    return parsePaletteInput(input.value, DEFAULT_COLOR);
  }

  function writePaletteToHiddenInput(colors) {
    var input = document.querySelector("[data-palette-input]");
    if (!input) return;
    input.value = paletteToInputText(colors);
  }

  function syncPrimaryColorInputs(colors) {
    var palette = normalizePaletteList(colors, DEFAULT_COLOR);
    var first = palette[0] || DEFAULT_COLOR;
    var colorPicker = document.querySelector("[data-color-picker]");
    var hexInput = document.querySelector("[data-color-hex]");
    if (colorPicker) colorPicker.value = first;
    if (hexInput) hexInput.value = first;
  }

  function setComposerPalette(colors, persist) {
    var palette = normalizePaletteList(colors, DEFAULT_COLOR);
    writePaletteToHiddenInput(palette);
    syncPrimaryColorInputs(palette);
    renderPaletteBuilder(palette);
    if (persist) persistComposerDraft();
  }

  function renderPaletteBuilder(colors) {
    var row = document.querySelector("[data-palette-row]");
    if (!row) return;
    var palette = normalizePaletteList(colors, DEFAULT_COLOR);
    row.innerHTML =
      '<div class="palette-strip" role="list" aria-label="' + tr("Post palette colors") + '">' +
      palette
        .map(function (hex, index) {
          var displayHex = normalizeHex(hex).replace("#", "").toUpperCase();
          var textColor = getContrastText(hex);
          return (
            '<div class="palette-strip__cell" role="listitem" data-palette-cell="' + index + '">' +
              '<button type="button" class="palette-strip__block" data-palette-block="' + index + '" style="background:' + hex + ';color:' + textColor + '" aria-label="' + (isZhLocale() ? ("编辑颜色 " + hex) : ("Edit color " + hex)) + '">' +
                '<span class="palette-strip__hex">' + displayHex + "</span>" +
              "</button>" +
              '<div class="palette-strip__actions" style="color:' + textColor + '">' +
                '<button type="button" class="palette-strip__action palette-strip__action--danger" data-palette-delete="' + index + '" aria-label="' + (isZhLocale() ? ("删除颜色 " + hex) : ("Delete color " + hex)) + '">' + tr("Remove") + "</button>" +
              "</div>" +
            "</div>"
          );
        })
        .join("") +
      '<button type="button" class="palette-strip__add" role="listitem" data-palette-add aria-label="' + (isZhLocale() ? "添加配色" : "Add palette color") + '">+</button>' +
      "</div>";
  }

  function copyText(text) {
    var content = String(text || "");
    if (!content) return Promise.resolve(false);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(content).then(function () { return true; }).catch(function () { return false; });
    }
    var input = document.createElement("textarea");
    input.value = content;
    input.setAttribute("readonly", "readonly");
    input.style.position = "fixed";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (error) {
      ok = false;
    }
    document.body.removeChild(input);
    return Promise.resolve(ok);
  }

  function openNativeColorPicker(initialHex, onChange) {
    var picker = document.createElement("input");
    picker.type = "color";
    picker.value = normalizeHex(initialHex || DEFAULT_COLOR);
    picker.style.position = "fixed";
    picker.style.width = "1px";
    picker.style.height = "1px";
    picker.style.opacity = "0";
    picker.style.pointerEvents = "none";
    picker.style.left = "-9999px";
    picker.style.top = "-9999px";

    var cleaned = false;
    function cleanup() {
      if (cleaned) return;
      cleaned = true;
      if (picker.parentNode) picker.parentNode.removeChild(picker);
    }

    picker.addEventListener("input", function () {
      onChange(normalizeHex(picker.value));
    });
    picker.addEventListener("change", cleanup, { once: true });
    picker.addEventListener("blur", cleanup, { once: true });

    document.body.appendChild(picker);
    picker.click();
  }

  function extractPaletteFromImageDataUrl(dataUrl, count) {
    return new Promise(function (resolve) {
      var safe = sanitizeImageDataUrl(dataUrl);
      if (!safe) {
        resolve([]);
        return;
      }
      var img = new Image();
      img.onload = function () {
        var canvas = document.createElement("canvas");
        var size = 56;
        canvas.width = size;
        canvas.height = size;
        var ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve([]);
          return;
        }
        ctx.drawImage(img, 0, 0, size, size);
        var pixels = ctx.getImageData(0, 0, size, size).data;
        var buckets = {};
        for (var i = 0; i < pixels.length; i += 4) {
          var r = pixels[i];
          var g = pixels[i + 1];
          var b = pixels[i + 2];
          var a = pixels[i + 3];
          if (a < 24) continue;
          var qr = Math.round(r / 32) * 32;
          var qg = Math.round(g / 32) * 32;
          var qb = Math.round(b / 32) * 32;
          var key = toHex(Math.min(255, qr)) + toHex(Math.min(255, qg)) + toHex(Math.min(255, qb));
          buckets[key] = (buckets[key] || 0) + 1;
        }
        var sorted = Object.keys(buckets)
          .sort(function (a, b) { return buckets[b] - buckets[a]; })
          .slice(0, count || 5)
          .map(function (key) { return normalizeHex(key); });
        resolve(normalizePaletteList(sorted, DEFAULT_COLOR));
      };
      img.onerror = function () {
        resolve([]);
      };
      img.src = safe;
    });
  }

  function normalizePost(post) {
    var colorHex = normalizeHex(post && post.colorHex ? post.colorHex : DEFAULT_COLOR);
    var paletteHexes = normalizePaletteList(
      post && post.paletteHexes ? post.paletteHexes : [colorHex],
      colorHex
    );
    var imageDataUrl = sanitizeImageDataUrl(post && post.imageDataUrl ? post.imageDataUrl : "");
    var includePalette = post && typeof post.includePalette === "boolean" ? post.includePalette : true;
    var includeImage = post && typeof post.includeImage === "boolean" ? post.includeImage : !!imageDataUrl;
    return {
      id: String(post && post.id ? post.id : createId()),
      author: String(post && post.author ? post.author : "Guest"),
      content: String(post && post.content ? post.content : "").trim().slice(0, MAX_POST_LENGTH),
      tag: String(post && post.tag ? post.tag : DEFAULT_TAG),
      colorHex: colorHex,
      paletteHexes: paletteHexes,
      includePalette: includePalette,
      includeImage: includeImage,
      imageDataUrl: includeImage ? imageDataUrl : "",
      likes: Math.max(0, Number(post && post.likes ? post.likes : 0)),
      likedBy: Array.isArray(post && post.likedBy)
        ? Array.from(new Set(post.likedBy.map(function (item) { return typeof item === "string" ? item.trim() : ""; }).filter(Boolean)))
        : [],
      pointsAwarded: Math.max(0, Number(post && post.pointsAwarded ? post.pointsAwarded : POINTS_PER_POST)),
      createdAt: post && post.createdAt ? post.createdAt : new Date().toISOString(),
      origin: post && post.origin ? String(post.origin) : "community",
      originMeta: post && post.originMeta && typeof post.originMeta === "object" ? post.originMeta : {},
      featured: !!(post && post.featured)
    };
  }

  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function createId() {
    return "post_" + Date.now() + "_" + Math.random().toString(16).slice(2, 8);
  }

  function timeAgo(isoString) {
    var ts = Date.parse(isoString);
    if (Number.isNaN(ts)) return tr("just now");
    var diffMs = Date.now() - ts;
    var mins = Math.floor(diffMs / 60000);
    if (mins < 1) return tr("just now");
    if (mins < 60) return isZhLocale() ? mins + tr("m ago") : mins + "m ago";
    var hours = Math.floor(mins / 60);
    if (hours < 24) return isZhLocale() ? hours + tr("h ago") : hours + "h ago";
    return isZhLocale() ? Math.floor(hours / 24) + tr("d ago") : Math.floor(hours / 24) + "d ago";
  }

  function formatAbsoluteDate(isoString) {
    var ts = Date.parse(isoString || "");
    if (Number.isNaN(ts)) return tr("Recently");
    return new Date(ts).toLocaleString(isZhLocale() ? "zh-CN" : "en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function toRgb(hex) {
    var value = normalizeHex(hex).replace("#", "");
    return {
      r: parseInt(value.slice(0, 2), 16),
      g: parseInt(value.slice(2, 4), 16),
      b: parseInt(value.slice(4, 6), 16)
    };
  }

  function toHex(value) {
    return Number(value).toString(16).padStart(2, "0");
  }

  function getContrastText(hex) {
    var rgb = toRgb(hex);
    var luminance = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
    return luminance > 0.62 ? "#0f172a" : "#ffffff";
  }

  function getCommunityView() {
    return document.body && document.body.getAttribute("data-community-view") === "all" ? "all" : "preview";
  }

  function isMobileViewport() {
    return !!(window.matchMedia && window.matchMedia("(max-width: 48rem)").matches);
  }

  function scrollToComposer() {
    var composer = document.getElementById("composer");
    if (!composer) {
      if (getCommunityView() === "all") window.location.href = "community.html";
      return;
    }
    composer.scrollIntoView({ behavior: "smooth", block: "start" });
    var input = document.querySelector("[data-post-content]");
    if (input) input.focus();
  }

  function updateOverlayScrollLock() {
    var body = document.body;
    if (!body) return;
    var hasGuidelinesOpen = false;
    var hasLightboxOpen = false;
    var guidelines = document.querySelector("[data-guidelines-modal]");
    var lightbox = document.querySelector("[data-image-lightbox]");
    if (guidelines && !guidelines.hidden) hasGuidelinesOpen = true;
    if (lightbox && !lightbox.hidden) hasLightboxOpen = true;
    body.classList.toggle("is-scroll-locked", hasGuidelinesOpen || hasLightboxOpen);
  }

  function readPosts() {
    var saved = readJSON(STORAGE.posts, null);
    if (!Array.isArray(saved)) saved = readJSON(STORAGE.legacyPostsV2, null);
    if (!Array.isArray(saved)) saved = readJSON(STORAGE.legacyPostsV1, null);
    if (!Array.isArray(saved) || !saved.length) saved = seedPosts.slice();
    saved = saved.map(normalizePost).filter(function (post) { return !!post.content; });
    writeJSON(STORAGE.posts, saved);
    return saved;
  }

  function writePosts(posts) {
    state.posts = posts.map(normalizePost);
    writeJSON(STORAGE.posts, state.posts);
  }

  function readHiddenMap() {
    var raw = readJSON(STORAGE.hiddenPosts, {});
    return raw && typeof raw === "object" ? raw : {};
  }

  function writeHiddenMap(map) {
    writeJSON(STORAGE.hiddenPosts, map || {});
  }

  function isPostHiddenForUser(postId, username) {
    if (!postId || !username || username === "Guest") return false;
    var map = readHiddenMap();
    var list = Array.isArray(map[username]) ? map[username] : [];
    return list.indexOf(postId) >= 0;
  }

  function toggleHidePost(postId) {
    var username = getCurrentUsername();
    if (!username || username === "Guest") return;
    var map = readHiddenMap();
    var list = Array.isArray(map[username]) ? map[username].slice() : [];
    var idx = list.indexOf(postId);
    if (idx >= 0) list.splice(idx, 1);
    else list.push(postId);
    map[username] = list;
    writeHiddenMap(map);
  }
  async function reportPost(postId) {
    var reporter = getCurrentUsername();
    if (!reporter || reporter === "Guest") return false;
    var rows = Array.isArray(state.reports) && state.reports.length ? state.reports.slice() : readLocalReports();
    for (var i = 0; i < rows.length; i += 1) {
      if (rows[i].postId === postId && rows[i].reporter === reporter) return false;
    }
    var entry = {
      id: "report_" + Date.now() + "_" + Math.random().toString(16).slice(2, 6),
      postId: postId,
      reporter: reporter,
      createdAt: new Date().toISOString()
    };
    if (isCloudEnabled()) {
      try {
        var cloud = getCloudApi();
        var exists = await cloud.hasReport(postId, reporter);
        if (exists && exists.error) {
          console.warn("[community.js] report lookup failed:", exists.error);
          return false;
        }
        if (exists && exists.data) return false;
        var result = await cloud.insertReport(entry);
        if (result && result.error) {
          console.warn("[community.js] report save failed:", result.error);
          return false;
        }
      } catch (error) {
        console.warn("[community.js] report save failed:", error);
        return false;
      }
    }
    rows.unshift(entry);
    state.reports = rows.slice(0, 400);
    writeLocalReports(state.reports);
    return true;
  }

  function readDraft() {
    var raw = readJSON(STORAGE.draft, null);
    if (!raw || typeof raw !== "object") return null;
    var colorHex = normalizeHex(raw.colorHex || DEFAULT_COLOR);
    var imageDataUrl = sanitizeImageDataUrl(raw.imageDataUrl || "");
    return {
      content: String(raw.content || ""),
      tag: String(raw.tag || DEFAULT_TAG),
      colorHex: colorHex,
      paletteHexes: normalizePaletteList(raw.paletteHexes || [colorHex], colorHex),
      includePalette: typeof raw.includePalette === "boolean" ? raw.includePalette : raw.origin !== "test",
      includeImage: typeof raw.includeImage === "boolean" ? raw.includeImage : !!imageDataUrl,
      imageDataUrl: imageDataUrl,
      origin: raw.origin ? String(raw.origin) : "",
      originMeta: raw.originMeta && typeof raw.originMeta === "object" ? raw.originMeta : {},
      updatedAt: raw.updatedAt || ""
    };
  }

  function writeDraft(draft) {
    if (!draft || typeof draft !== "object") {
      localStorage.removeItem(STORAGE.draft);
      return;
    }
    writeJSON(STORAGE.draft, {
      content: String(draft.content || "").slice(0, MAX_POST_LENGTH),
      tag: String(draft.tag || DEFAULT_TAG),
      colorHex: normalizeHex(draft.colorHex || DEFAULT_COLOR),
      paletteHexes: normalizePaletteList(draft.paletteHexes || [draft.colorHex || DEFAULT_COLOR], draft.colorHex || DEFAULT_COLOR),
      includePalette: typeof draft.includePalette === "boolean" ? draft.includePalette : true,
      includeImage: typeof draft.includeImage === "boolean" ? draft.includeImage : !!draft.imageDataUrl,
      imageDataUrl: sanitizeImageDataUrl(draft.imageDataUrl || ""),
      origin: draft.origin ? String(draft.origin) : "community",
      originMeta: draft.originMeta && typeof draft.originMeta === "object" ? draft.originMeta : {},
      updatedAt: new Date().toISOString()
    });
  }

  function getUserTagSet(username) {
    var set = {};
    state.posts.forEach(function (post) {
      if (post.author !== username) return;
      set[post.tag] = true;
    });
    return Object.keys(set);
  }

  function getHelpfulScore(post) {
    var likes = Number(post.likes || 0);
    var featuredBoost = post.featured ? 8 : 0;
    var originBoost = post.origin && post.origin !== "community" ? 2 : 0;
    return likes * 2 + featuredBoost + originBoost;
  }

  function normalizeTagQuery(value) {
    return String(value || "").trim().replace(/^#/, "").replace(/[\s-]+/g, "_").toLowerCase();
  }

  function getFilterLabel(filterValue) {
    if (filterValue === "origin:learning") return tr("From Learning");
    if (filterValue === "origin:game") return tr("From Game");
    if (filterValue === "origin:test") return tr("From Test");
    return tr("Latest");
  }

  function syncRouteQuery() {
    if (!window.history || !window.history.replaceState || !window.URLSearchParams) return;
    var params = new URLSearchParams(window.location.search);
    var origin = state.filter.indexOf("origin:") === 0 ? state.filter.split(":")[1] : "";
    if (ALLOWED_ORIGINS.indexOf(origin) >= 0) params.set("from", origin);
    else params.delete("from");
    if (state.tagSearch) params.set("tag", state.tagSearch.replace(/^#/, ""));
    else params.delete("tag");
    var next = window.location.pathname + (params.toString() ? "?" + params.toString() : "") + window.location.hash;
    window.history.replaceState(null, "", next);
  }

  function applyRouteQuery() {
    if (!window.URLSearchParams) return;
    var params = new URLSearchParams(window.location.search);
    var origin = String(params.get("from") || "").trim().toLowerCase();
    var tag = String(params.get("tag") || "").trim().replace(/^#/, "");
    state.filter = ALLOWED_ORIGINS.indexOf(origin) >= 0 ? "origin:" + origin : DEFAULT_FILTER;
    state.tagSearch = tag;
  }

  function sortPosts(posts) {
    var rows = posts.slice();
    var user = getCurrentUsername();
    var tagQuery = normalizeTagQuery(state.tagSearch);

    if (state.filter === "my-tags") {
      var myTags = getUserTagSet(user);
      if (!myTags.length) return [];
      rows = rows.filter(function (post) { return myTags.indexOf(post.tag) >= 0; });
    } else if (state.filter.indexOf("origin:") === 0) {
      var origin = state.filter.split(":")[1] || "";
      rows = rows.filter(function (post) {
        return String(post.origin || "community") === origin;
      });
    } else if (state.filter.charAt(0) === "#") {
      rows = rows.filter(function (post) { return post.tag === state.filter; });
    }

    if (tagQuery) {
      rows = rows.filter(function (post) {
        return normalizeTagQuery(post.tag).indexOf(tagQuery) >= 0;
      });
    }

    rows.sort(function (a, b) {
      if (!!b.featured !== !!a.featured) return b.featured ? 1 : -1;
      if (state.filter === "helpful") {
        var helpfulDelta = getHelpfulScore(b) - getHelpfulScore(a);
        if (helpfulDelta !== 0) return helpfulDelta;
      }
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    });
    return rows;
  }

  function getActivityLog() {
    if (Array.isArray(state.activityLog) && state.activityLog.length) return state.activityLog.slice();
    return readLocalActivityLog();
  }

  function getWeeklyPointsMap() {
    var cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
    var map = {};
    getActivityLog().forEach(function (item) {
      if (!item || !item.username) return;
      var ts = Date.parse(item.createdAt || "");
      if (Number.isNaN(ts) || ts < cutoff) return;
      var delta = Number(item.pointsDelta || 0);
      if (Number.isNaN(delta)) return;
      map[item.username] = Number(map[item.username] || 0) + delta;
    });
    return map;
  }

  function getTotalPointsMap() {
    var map = {};
    Object.keys(baseLeaderboard).forEach(function (username) {
      map[username] = Number(baseLeaderboard[username] || 0);
    });
    getActivityLog().forEach(function (item) {
      if (!item || !item.username) return;
      var delta = Number(item.pointsDelta || 0);
      if (Number.isNaN(delta)) return;
      map[item.username] = Number(map[item.username] || 0) + delta;
    });
    state.posts.forEach(function (post) {
      if (!post || !post.author) return;
      if (!map[post.author]) map[post.author] = Number(baseLeaderboard[post.author] || 0);
    });
    return map;
  }

  function getUserActivityStats(username) {
    var rows = getActivityLog().filter(function (item) {
      return !!(item && item.username === username);
    });
    var dayMap = {};
    var points = 0;
    rows.forEach(function (item) {
      var delta = Number(item.pointsDelta || 0);
      if (!Number.isNaN(delta)) points += delta;
      var day = String(item.createdAt || "").slice(0, 10);
      if (day) dayMap[day] = true;
    });
    var days = Object.keys(dayMap).sort();
    var streakDays = 0;
    var lastActiveDate = days.length ? days[days.length - 1] : "";
    if (lastActiveDate) {
      streakDays = 1;
      var cursor = Date.parse(lastActiveDate + "T00:00:00.000Z");
      for (var i = days.length - 2; i >= 0; i -= 1) {
        var check = Date.parse(days[i] + "T00:00:00.000Z");
        if (cursor - check === 86400000) {
          streakDays += 1;
          cursor = check;
          continue;
        }
        break;
      }
    }
    return {
      points: Math.max(0, points),
      postCount: state.posts.filter(function (post) { return post.author === username; }).length,
      streakDays: streakDays,
      lastActiveDate: lastActiveDate
    };
  }

  function toSortedRows(pointsMap, limit) {
    var rows = Object.keys(pointsMap).map(function (username) {
      return { username: username, points: Number(pointsMap[username] || 0) };
    });
    rows.sort(function (a, b) {
      if (b.points !== a.points) return b.points - a.points;
      return a.username.localeCompare(b.username);
    });
    return typeof limit === "number" ? rows.slice(0, limit) : rows;
  }

  function setFeedback(message, kind) {
    var el = document.querySelector("[data-community-feedback]");
    if (!el) return;
    el.classList.remove("is-error", "is-success");
    el.textContent = message || "";
    if (kind === "error" || kind === "success") el.classList.add("is-" + kind);
    showToast(message, kind);
  }

  function applyStaticLocale() {
    setDocumentLocaleChrome();
    var feedRegion = document.querySelector(".community-feed");
    if (feedRegion) feedRegion.setAttribute("aria-label", tr("Community feed"));
    var sideRegion = document.querySelector(".community-side");
    if (sideRegion) sideRegion.setAttribute("aria-label", tr("Community insights"));
    var feedGrid = document.querySelector(".community-feed-grid");
    if (feedGrid) feedGrid.setAttribute("aria-label", tr("All posts and details"));
    var isAllView = getCommunityView() === "all";
    var title = document.getElementById("community-title");
    if (title) title.textContent = isAllView ? tr("All Community Posts") : tr("Color Learning Community");
    var lead = document.querySelector(".community-hero__lead");
    if (lead) {
      lead.textContent = isAllView
        ? tr("Browse the full feed, inspect post details, and trace each discussion back to Learning, Game, or Test.")
        : tr("Publish reflections, palettes, and visual results from Learning, Game, and Test in one shared learning space.");
    }
    var note = document.querySelector(".community-hero__note");
    if (note) note.textContent = tr("Why this page matters: Community turns practice from other pages into visible learning evidence your team can review and discuss.");

    var heroCreate = document.querySelector(".community-hero__actions [data-scroll-composer]");
    if (heroCreate) heroCreate.textContent = tr("+ Create Post");
    var heroGuide = document.querySelector(".community-hero__actions [data-open-guidelines]");
    if (heroGuide) heroGuide.textContent = tr("Community Guidelines");
    var heroBack = document.querySelector('.community-hero__actions a[href="community.html"]');
    if (heroBack) heroBack.textContent = tr("Back to Community");

    var composerTitle = document.getElementById("composer-title");
    if (composerTitle) composerTitle.textContent = tr("Create a new post");
    var prompt = document.querySelector(".composer-card__prompt");
    if (prompt) prompt.textContent = tr("Learning Prompt: How does this color choice impact users with color vision deficiency?");
    var hint = document.querySelector(".composer-card__hint");
    if (hint) hint.textContent = tr("Explain why your color decision works, what changed your thinking, or what you want feedback on.");
    var textarea = document.querySelector("[data-post-content]");
    if (textarea) {
      textarea.placeholder = tr("Write your learning note here...");
      textarea.setAttribute("aria-label", tr("Post content"));
    }
    var rules = document.querySelector(".composer-card__rules");
    if (rules) rules.textContent = tr("Text is required. Palette and image are optional. Publishing a post adds +5 community points.");

    var toggleLabels = document.querySelectorAll(".composer-toggle span");
    if (toggleLabels[0]) toggleLabels[0].textContent = tr("Publish palette");
    if (toggleLabels[1]) toggleLabels[1].textContent = tr("Publish image");
    var paletteBtn = document.querySelector("[data-palette-from-image]");
    if (paletteBtn) paletteBtn.textContent = tr("Extract Palette from Image");
    var uploadTitle = document.querySelector(".composer-upload__title");
    if (uploadTitle) uploadTitle.textContent = tr("Attach Image");
    var uploadHint = document.querySelector(".composer-upload__hint");
    if (uploadHint) uploadHint.textContent = tr("Tap to upload");
    var imageClear = document.querySelector("[data-image-clear]");
    if (imageClear) imageClear.textContent = tr("Remove");
    var imagePreview = document.querySelector("[data-image-preview]");
    if (imagePreview) imagePreview.alt = tr("Selected post attachment preview");

    var filterLabel = document.querySelector(".feed-filter__label");
    if (filterLabel) filterLabel.textContent = tr("Filter by:");
    document.querySelectorAll(".feed-filter").forEach(function (el) {
      el.setAttribute("aria-label", tr("Feed filters"));
    });
    document.querySelectorAll("[data-filter]").forEach(function (btn) {
      var value = btn.getAttribute("data-filter");
      if (value === "latest") btn.textContent = tr("Latest");
      if (value === "origin:learning") btn.textContent = tr("From Learning");
      if (value === "origin:game") btn.textContent = tr("From Game");
      if (value === "origin:test") btn.textContent = tr("From Test");
    });
    var tagSearch = document.querySelector("[data-tag-search]");
    if (tagSearch) {
      tagSearch.placeholder = tr("Search tag");
      tagSearch.setAttribute("aria-label", tr("Search posts by tag"));
    }

    var featuredTitle = document.getElementById("featured-posts-title");
    if (featuredTitle) featuredTitle.textContent = tr("Featured Learning Picks");
    var featuredCaption = document.querySelector(".post-preview-head__caption");
    if (featuredCaption) featuredCaption.textContent = tr("Showcase-highlighted demo posts");
    var latestTitle = document.querySelector(".post-preview-head:not(.post-preview-head--featured) .post-preview-head__title");
    if (latestTitle) latestTitle.textContent = tr("Latest Posts");
    var viewAll = document.querySelector("[data-view-all-posts]");
    if (viewAll) viewAll.textContent = tr("Browse All Posts");

    var progressTitle = document.getElementById("progress-title");
    if (progressTitle) progressTitle.textContent = tr("My Learning Progress");
    var statLabels = document.querySelectorAll(".stats-grid__label");
    if (statLabels[0]) statLabels[0].textContent = tr("Total Points");
    if (statLabels[1]) statLabels[1].textContent = tr("Posts");
    var progressMeta = document.querySelectorAll(".widget-card__note-copy span");
    if (progressMeta[0]) progressMeta[0].textContent = tr("Streak");
    if (progressMeta[1]) progressMeta[1].textContent = tr("Today");
    if (progressMeta[2]) progressMeta[2].textContent = tr("Rank");
    var leaderboardTitle = document.getElementById("leaderboard-title");
    if (leaderboardTitle) leaderboardTitle.textContent = tr("Weekly Top Learners");
    var compact = document.querySelectorAll(".widget-card__note--compact");
    if (compact[0]) compact[0].textContent = tr("7-day points");
    var alltimeTitle = document.getElementById("alltime-title");
    if (alltimeTitle) alltimeTitle.textContent = tr("All-time Top Learners");
    if (compact[1]) compact[1].textContent = tr("Includes demo seed learners for showcase.");

    var detail = document.querySelector("[data-post-detail]");
    if (detail && !detail.querySelector(".post-detail-card")) {
      detail.innerHTML = "<h2>" + tr("Select a post") + "</h2><p>" + tr("Choose a post on the left to preview full details here.") + "</p>";
    }

    var guideTitle = document.getElementById("guidelines-title");
    if (guideTitle) guideTitle.textContent = tr("Community Guidelines");
    var guideItems = document.querySelectorAll(".community-modal__list li");
    var guideTextKeys = [
      "Share constructive learning reflections, not only final answers.",
      "Use respectful language and explain why a color decision works.",
      "Do not spam repeated posts or irrelevant links.",
      "If you see problematic content, use Report to flag it."
    ];
    guideItems.forEach(function (item, index) {
      if (guideTextKeys[index]) item.textContent = tr(guideTextKeys[index]);
    });
    document.querySelectorAll("[data-close-guidelines]").forEach(function (btn) {
      if (btn.textContent.trim() !== "×") btn.textContent = tr("Got it");
      btn.setAttribute("aria-label", tr("Close guidelines"));
    });
    var toastClose = document.querySelector("[data-community-toast-close]");
    if (toastClose) toastClose.setAttribute("aria-label", tr("Close message"));
    var imageClose = document.querySelector("[data-close-image-lightbox]");
    if (imageClose) imageClose.setAttribute("aria-label", tr("Close image preview"));
    var lightbox = document.querySelector("[data-lightbox-image]");
    if (lightbox) lightbox.alt = tr("Expanded post preview");
  }

  function hideToast() {
    var toast = document.querySelector("[data-community-toast]");
    if (!toast) return;
    if (state.toastTimer) {
      clearTimeout(state.toastTimer);
      state.toastTimer = 0;
    }
    toast.hidden = true;
    toast.classList.remove("is-error", "is-success");
  }

  function showToast(message, kind) {
    var toast = document.querySelector("[data-community-toast]");
    var text = document.querySelector("[data-community-toast-message]");
    if (!toast || !text) return;

    if (!message) {
      hideToast();
      return;
    }

    if (state.toastTimer) clearTimeout(state.toastTimer);
    toast.classList.remove("is-error", "is-success");
    if (kind === "error" || kind === "success") toast.classList.add("is-" + kind);
    text.textContent = message;
    toast.hidden = false;
    state.toastTimer = setTimeout(function () {
      hideToast();
    }, 3000);
  }

  function updateCharCounter() {
    var input = document.querySelector("[data-post-content]");
    var counter = document.querySelector("[data-char-counter]");
    if (!input || !counter) return;
    counter.textContent = input.value.length + " / " + MAX_POST_LENGTH;
  }

  function updateDraftOriginLabel(draft) {
    var el = document.querySelector("[data-draft-origin]");
    if (!el) return;
    if (!draft || !draft.origin || draft.origin === "community") {
      el.hidden = true;
      el.textContent = "";
      updateComposerContext("");
      return;
    }
    el.hidden = false;
    if (draft.origin === "test") {
      el.textContent = tr("Imported from Test. Focus on your result image and reflection. Palette is optional.");
    } else if (draft.origin === "game") {
      el.textContent = tr("Imported from Game. Your image and palette are ready to publish together.");
    } else if (draft.origin === "learning") {
      el.textContent = tr("Imported from Learning. Refine the note, choose a tag, and publish your takeaway.");
    } else {
      el.textContent = tr("Draft imported from ") + draft.origin + ".";
    }
    updateComposerContext(draft.origin);
  }

  function setComposerImagePreview(imageDataUrl) {
    var wrap = document.querySelector("[data-image-preview-wrap]");
    var img = document.querySelector("[data-image-preview]");
    if (!wrap || !img) return;
    var safe = sanitizeImageDataUrl(imageDataUrl);
    if (!safe) {
      wrap.hidden = true;
      img.src = "";
      return;
    }
    img.src = safe;
    wrap.hidden = false;
  }

  function getIncludePalette() {
    var input = document.querySelector("[data-include-palette]");
    return input ? !!input.checked : true;
  }

  function getIncludeImage() {
    var input = document.querySelector("[data-include-image]");
    return input ? !!input.checked : true;
  }

  function setComposerIncludeOptions(includePalette, includeImage) {
    var paletteInput = document.querySelector("[data-include-palette]");
    var imageInput = document.querySelector("[data-include-image]");
    if (paletteInput) paletteInput.checked = includePalette !== false;
    if (imageInput) imageInput.checked = includeImage !== false;
    updateComposerAttachmentState();
  }

  function updateComposerAttachmentState() {
    var paletteBuilder = document.querySelector("[data-palette-builder]");
    var extras = document.querySelector(".composer-card__extras");
    if (paletteBuilder) paletteBuilder.classList.toggle("is-disabled", !getIncludePalette());
    if (extras) extras.classList.toggle("is-disabled", !getIncludeImage());
  }

  function updateComposerState() {
    var button = document.querySelector(".btn-post");
    if (!button) return;
    button.disabled = !isLoggedIn();
    button.textContent = isLoggedIn() ? tr("Publish Post") : tr("Log in to Publish");
  }

  function updateComposerContext(origin) {
    var composer = document.querySelector(".composer-card");
    if (!composer) return;
    composer.classList.remove("composer-card--origin-learning", "composer-card--origin-game", "composer-card--origin-test");
    if (!origin || origin === "community") return;
    composer.classList.add("composer-card--origin-" + origin);
  }

  function getActorId() {
    return isLoggedIn() ? getCurrentUsername() : "";
  }

  function hasLiked(post) {
    var actor = getActorId();
    if (!actor || !post || !Array.isArray(post.likedBy)) return false;
    return post.likedBy.indexOf(actor) >= 0;
  }

  function formatOrigin(post) {
    var source = post.origin || "community";
    var label = localizeSourceLabel(source).replace(/^来自\s*/, "");
    var extra = "";
    if (source === "test" && post.originMeta && typeof post.originMeta.score === "number") {
      extra = tr("score ") + post.originMeta.score;
    } else if (source === "game" && post.originMeta && post.originMeta.drawingName) {
      extra = post.originMeta.drawingName;
    } else if (source === "learning" && post.originMeta && post.originMeta.section) {
      extra = post.originMeta.section;
    }
    return extra ? label + " · " + extra : label;
  }

  function renderOriginMetaHtml(post) {
    if (!post || !post.originMeta) return "";
    if (post.origin === "test") {
      var chapter = post.originMeta.chapter ? escapeHtml(String(post.originMeta.chapter)) : tr("Test");
      var score = Number(post.originMeta.score || 0);
      var maxScore = Number(post.originMeta.maxScore || 0);
      var accuracy = Number(post.originMeta.accuracy || 0);
      var accuracyText = post.originMeta.zeroAccuracy ? "00%" : accuracy + "%";
      var zeroFlag = post.originMeta.zeroAccuracy ? '<span class="post-origin-meta__flag">' + tr("00% accuracy") + "</span>" : "";
      return '<div class="post-origin-meta"><strong>' + tr("Test Result:") + '</strong> ' + chapter + " · " + tr("Score ") + score + "/" + maxScore + " · " + tr("Accuracy ") + accuracyText + zeroFlag + "</div>";
    }
    if (post.origin === "game" && post.originMeta.drawingName) {
      return '<div class="post-origin-meta"><strong>' + tr("Game Artwork:") + '</strong> ' + escapeHtml(String(post.originMeta.drawingName)) + "</div>";
    }
    return "";
  }

  function renderPaletteHtml(post) {
    if (post && post.includePalette === false) return "";
    var palette = normalizePaletteList(post && post.paletteHexes ? post.paletteHexes : [post.colorHex], post.colorHex);
    return (
      '<div class="post-palette" role="list" aria-label="' + tr("Post palette colors") + '">' +
      palette.map(function (hex, index) {
        var displayHex = normalizeHex(hex).replace("#", "").toUpperCase();
        var textColor = getContrastText(hex);
        return (
          '<div class="post-palette__cell" role="listitem" data-post-palette-cell="' + index + '">' +
            '<div class="post-palette__block" style="background:' + hex + ';color:' + textColor + '" title="' + hex + '">' +
              '<span class="post-palette__hex">' + displayHex + "</span>" +
            "</div>" +
          "</div>"
        );
      }).join("") +
      "</div>"
    );
  }

  function renderImageHtml(post, detailMode) {
    if (post && post.includeImage === false) return "";
    var image = sanitizeImageDataUrl(post && post.imageDataUrl ? post.imageDataUrl : "");
    if (!image) return "";
    return (
      '<figure class="post-image' + (detailMode ? " post-image--detail" : "") + '">' +
      '<button type="button" class="post-image__zoom" data-image-zoom="' + image + '">' +
      '<img src="' + image + '" alt="' + tr("Shared attachment for this post") + '">' +
      "</button>" +
      "</figure>"
    );
  }

  function buildPostActionsHtml(post, currentUser) {
    var actions = [];
    if (isDemoModerator()) {
      actions.push(
        '<button type="button" class="post-action-btn' + (post.featured ? ' is-active' : '') + '" data-post-action="feature" data-post-id="' + post.id + '">' +
        (post.featured ? tr("Highlighted") : tr("Demo Highlight")) +
        "</button>"
      );
    }
    actions.push('<button type="button" class="post-action-btn" data-post-action="hide" data-post-id="' + post.id + '">' + (isPostHiddenForUser(post.id, currentUser) ? tr("Show Again") : tr("Hide for Me")) + "</button>");
    actions.push('<button type="button" class="post-action-btn" data-post-action="report" data-post-id="' + post.id + '">' + tr("Report for Review") + "</button>");
    if (isPostOwner(post)) {
      actions.push('<button type="button" class="post-action-btn post-action-btn--danger" data-post-action="delete" data-post-id="' + post.id + '">' + tr("Delete Post") + "</button>");
    }
    return '<div class="post-actions">' + actions.join("") + "</div>";
  }

  function buildPostCardsHtml(rows, currentUser, options) {
    var opts = options || {};
    var selectable = !!opts.selectable;
    var selectedId = opts.selectedPostId || "";
    return rows
      .map(function (post) {
        var content = escapeHtml(post.content);
        var username = escapeHtml(post.author);
        var tag = escapeHtml(post.tag || "#General");
        var hex = normalizeHex(post.colorHex);
        var likes = Number(post.likes || 0);
        var points = Number(post.pointsAwarded || POINTS_PER_POST);
        var liked = hasLiked(post);
        var hidden = isPostHiddenForUser(post.id, currentUser);
        var originText = escapeHtml(formatOrigin(post));
        var initial = escapeHtml((post.author || "?").slice(0, 1).toUpperCase());
        var paletteHtml = renderPaletteHtml(post);
        var imageHtml = renderImageHtml(post, false);
        var originMetaHtml = renderOriginMetaHtml(post);
        var selected = selectable && selectedId === post.id;
        return (
          '<article class="post-card' + (post.featured ? ' is-featured' : '') + (hidden ? ' is-hidden' : '') + (selected ? ' is-selected' : '') + '"' + (selectable ? ' data-post-select="' + post.id + '"' : "") + ">" +
          '<header class="post-header">' +
          '<div class="post-user">' +
          '<span class="post-user__avatar" aria-hidden="true">' + initial + '</span>' +
          '<div>' +
          '<p class="post-user__name">' + username + '</p>' +
          '<div class="post-meta">' +
          '<button type="button" class="post-tag post-tag--button" data-filter-tag="' + tag + '">' + tag + '</button>' +
          '<span class="post-origin"><strong>' + tr("From:") + '</strong> ' + originText + '</span>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '<span class="post-time">' + timeAgo(post.createdAt) + '</span>' +
          '</header>' +
          '<p class="post-content">' + (hidden ? tr("This post is hidden for your account.") : content) + '</p>' +
          originMetaHtml +
          imageHtml +
          paletteHtml +
          '<footer class="post-footer">' +
          '<button type="button" class="like-btn' + (liked ? ' is-liked' : '') + '" data-like-id="' + post.id + '" aria-pressed="' + (liked ? 'true' : 'false') + '">' + (liked ? tr("Liked ") : tr("Like ")) + likes + '</button>' +
          '<span class="post-points">' + tr("Community reward +") + points + " " + tr("pts") + "</span>" +
          buildPostActionsHtml(post, currentUser) +
          '</footer>' +
          '</article>'
        );
      })
      .join("");
  }

  function renderDetailFactsHtml(post) {
    if (!post) return "";
    var facts = [
      '<span class="detail-chip detail-chip--source">' + tr("From:") + " " + escapeHtml(localizeSourceLabel(post.origin || "community").replace(/^来自\s*/, "")) + "</span>",
      '<span class="detail-chip detail-chip--tag">' + escapeHtml(post.tag || DEFAULT_TAG) + "</span>"
    ];
    if (post.origin === "learning" && post.originMeta && post.originMeta.section) {
      facts.push('<span class="detail-chip">' + escapeHtml(String(post.originMeta.section)) + "</span>");
    }
    if (post.origin === "game" && post.originMeta) {
      if (post.originMeta.drawingName) facts.push('<span class="detail-chip">' + escapeHtml(String(post.originMeta.drawingName)) + "</span>");
      if (post.originMeta.mode) facts.push('<span class="detail-chip">' + tr("Mode: ") + escapeHtml(String(post.originMeta.mode)) + "</span>");
      if (post.originMeta.fillProgress) facts.push('<span class="detail-chip">' + escapeHtml(String(post.originMeta.fillProgress)) + "</span>");
    }
    if (post.origin === "test" && post.originMeta) {
      facts.push('<span class="detail-chip">' + tr("Score ") + Number(post.originMeta.score || 0) + "/" + Number(post.originMeta.maxScore || 0) + "</span>");
      facts.push('<span class="detail-chip">' + tr("Accuracy ") + (post.originMeta.zeroAccuracy ? "00%" : Number(post.originMeta.accuracy || 0) + "%") + "</span>");
    }
    return '<div class="detail-chip-row">' + facts.join("") + "</div>";
  }

  function renderPostDetail(post, currentUser) {
    var panel = document.querySelector("[data-post-detail]");
    if (!panel) return;
    if (!post) {
      panel.innerHTML = "<h2>" + tr("Select a post") + "</h2><p>" + tr("Choose a post on the left to preview full details here.") + "</p>";
      return;
    }
    var likes = Number(post.likes || 0);
    var points = Number(post.pointsAwarded || POINTS_PER_POST);
    var liked = hasLiked(post);
    var hidden = isPostHiddenForUser(post.id, currentUser);
    panel.innerHTML =
      '<article class="post-detail-card' + (post.featured ? " is-featured" : "") + '">' +
        '<div class="post-detail-card__eyebrow">' + tr("Post details") + "</div>" +
        '<div class="post-detail-card__header">' +
          '<div>' +
            '<h2>' + escapeHtml(post.author) + "</h2>" +
            '<p class="post-detail-card__time">' + escapeHtml(formatAbsoluteDate(post.createdAt)) + "</p>" +
          "</div>" +
          renderDetailFactsHtml(post) +
        "</div>" +
        '<p class="post-detail-card__content">' + escapeHtml(hidden ? tr("This post is hidden for your account. Use Show Again to restore it.") : post.content) + "</p>" +
        (hidden ? "" : renderOriginMetaHtml(post)) +
        (hidden ? "" : renderImageHtml(post, true)) +
        (hidden ? "" : renderPaletteHtml(post)) +
        '<div class="post-detail-card__footer">' +
          '<button type="button" class="like-btn' + (liked ? ' is-liked' : '') + '" data-like-id="' + post.id + '" aria-pressed="' + (liked ? 'true' : 'false') + '">' + (liked ? tr("Liked ") : tr("Like ")) + likes + '</button>' +
          '<span class="post-points">' + tr("Community reward +") + points + " " + tr("pts") + "</span>" +
        "</div>" +
        buildPostActionsHtml(post, currentUser) +
      "</article>";
  }

  function renderFeedStatus(rows) {
    var el = document.querySelector("[data-feed-status]");
    if (!el) return;
    var summary = [];
    if (isZhLocale()) summary.push("显示 " + rows.length + " 条帖子");
    else summary.push("Showing " + rows.length + (rows.length === 1 ? " post" : " posts"));
    summary.push(getFilterLabel(state.filter));
    if (state.tagSearch) summary.push((isZhLocale() ? "标签 #" : "Tag #") + escapeHtml(state.tagSearch.replace(/^#/, "")));
    el.innerHTML =
      '<span class="feed-status__text">' + summary.join(" · ") + "</span>" +
      (state.tagSearch ? '<button type="button" class="feed-status__clear" data-clear-tag-search>' + tr("Clear tag search") + "</button>" : "");
  }

  function updateViewAllLink() {
    var link = document.querySelector("[data-view-all-posts]");
    if (!link) return;
    var parts = [];
    var origin = state.filter.indexOf("origin:") === 0 ? state.filter.split(":")[1] : "";
    if (origin) parts.push("from=" + encodeURIComponent(origin));
    if (state.tagSearch) parts.push("tag=" + encodeURIComponent(state.tagSearch.replace(/^#/, "")));
    link.setAttribute("href", "community-posts.html" + (parts.length ? "?" + parts.join("&") : ""));
  }

  function renderFeaturedPreview() {
    var section = document.querySelector("[data-featured-section]");
    var list = document.querySelector("[data-featured-list]");
    if (!section || !list || getCommunityView() !== "preview") return;
    var featuredRows = state.posts
      .filter(function (post) { return !!post.featured; })
      .sort(function (a, b) { return Date.parse(b.createdAt) - Date.parse(a.createdAt); })
      .slice(0, 3);
    section.hidden = !featuredRows.length;
    list.innerHTML = featuredRows.length ? buildPostCardsHtml(featuredRows, getCurrentUsername(), { selectable: false }) : "";
  }

  function renderPosts() {
    var container = document.querySelector("[data-post-list]");
    if (!container) return;
    var view = getCommunityView();
    var rows = sortPosts(state.posts);
    var currentUser = getCurrentUsername();

    if (!rows.length) {
      var emptyHtml =
        '<article class="post-card post-empty">' +
        '<h3>' + tr("Start the first learning thread") + "</h3>" +
        '<p>' + tr("Share one insight from Learning, a result from Test, or a palette from Game.") + "</p>" +
        '<button type="button" class="community-hero__cta" data-scroll-composer>' + tr("Use this template") + "</button>" +
        '</article>';
      container.innerHTML = emptyHtml;
      renderFeedStatus(rows);
      updateViewAllLink();
      renderFeaturedPreview();
      renderPostDetail(null, currentUser);
      return;
    }

    if (view === "all") {
      if (!state.selectedPostId || !rows.some(function (item) { return item.id === state.selectedPostId; })) {
        state.selectedPostId = rows[0].id;
      }
      container.innerHTML = buildPostCardsHtml(rows, currentUser, { selectable: true, selectedPostId: state.selectedPostId });
      var selectedPost = null;
      for (var i = 0; i < rows.length; i += 1) {
        if (rows[i].id === state.selectedPostId) {
          selectedPost = rows[i];
          break;
        }
      }
      renderFeedStatus(rows);
      updateViewAllLink();
      renderPostDetail(selectedPost || rows[0], currentUser);
      return;
    }

    container.innerHTML = buildPostCardsHtml(rows.slice(0, 3), currentUser, { selectable: false });
    renderFeedStatus(rows);
    updateViewAllLink();
    renderFeaturedPreview();
  }

  function readRankSnapshot() {
    var raw = readJSON(STORAGE.rankSnapshot, { weeklyRanks: {} });
    return raw && typeof raw === "object" ? raw : { weeklyRanks: {} };
  }

  function writeRankSnapshot(snapshot) {
    writeJSON(STORAGE.rankSnapshot, snapshot || { weeklyRanks: {} });
  }

  function renderStats(weeklyRows) {
    var user = getCurrentUsername();
    var remoteStats = getUserActivityStats(user);
    var postsMine = state.posts.filter(function (post) { return post.author === user; });
    var pointsEl = document.querySelector("[data-user-points]");
    var postsEl = document.querySelector("[data-user-posts]");
    var streakEl = document.querySelector("[data-user-streak]");
    var goalEl = document.querySelector("[data-user-goal]");
    var rankEl = document.querySelector("[data-rank-trend]");
    if (!pointsEl || !postsEl || !streakEl || !goalEl || !rankEl) return;

    var points = Number(remoteStats && remoteStats.points ? remoteStats.points : 0);
    var postCount = Number(remoteStats && remoteStats.postCount ? remoteStats.postCount : postsMine.length);
    var streak = Number(remoteStats && remoteStats.streakDays ? remoteStats.streakDays : 0);

    pointsEl.textContent = String(points);
    postsEl.textContent = String(postCount);

    if (!isLoggedIn()) {
      streakEl.textContent = tr("Sign in");
      goalEl.textContent = tr("1 post");
      rankEl.textContent = "--";
      return;
    }

    if (streak) {
      streakEl.textContent = isZhLocale() ? (streak + " 天") : (streak + " " + (streak === 1 ? "day" : "days"));
    } else {
      streakEl.textContent = tr("Start today");
    }

    var today = new Date().toISOString().slice(0, 10);
    var postedToday = postsMine.some(function (post) { return String(post.createdAt || "").slice(0, 10) === today; });
    goalEl.textContent = postedToday ? tr("Done") : tr("1 post");

    var currentWeeklyRank = 0;
    for (var i = 0; i < weeklyRows.length; i += 1) {
      if (weeklyRows[i].username === user) {
        currentWeeklyRank = i + 1;
        break;
      }
    }
    var snapshot = readRankSnapshot();
    var prevRank = Number(snapshot.weeklyRanks && snapshot.weeklyRanks[user] ? snapshot.weeklyRanks[user] : 0);
    if (!currentWeeklyRank) {
      rankEl.textContent = "--";
    } else if (!prevRank || prevRank === currentWeeklyRank) {
      rankEl.textContent = "#" + currentWeeklyRank;
    } else if (currentWeeklyRank < prevRank) {
      rankEl.textContent = isZhLocale()
        ? ("#" + currentWeeklyRank + " " + tr("up ") + (prevRank - currentWeeklyRank))
        : ("#" + currentWeeklyRank + " up " + (prevRank - currentWeeklyRank));
    } else {
      rankEl.textContent = isZhLocale()
        ? ("#" + currentWeeklyRank + " " + tr("down ") + (currentWeeklyRank - prevRank))
        : ("#" + currentWeeklyRank + " down " + (currentWeeklyRank - prevRank));
    }

    var nextSnapshot = { weeklyRanks: Object.assign({}, snapshot.weeklyRanks || {}), updatedAt: new Date().toISOString() };
    weeklyRows.forEach(function (row, idx) { nextSnapshot.weeklyRanks[row.username] = idx + 1; });
    writeRankSnapshot(nextSnapshot);
  }

  function renderLeaderboards() {
    var weeklyEl = document.querySelector("[data-weekly-leaderboard-list]");
    var totalEl = document.querySelector("[data-total-leaderboard-list]");
    if (!weeklyEl || !totalEl) return;

    var weeklyRows = toSortedRows(getWeeklyPointsMap(), 6);
    var totalRows = toSortedRows(getTotalPointsMap(), 6);
    var currentUser = getCurrentUsername();
    function renderLeaderboardRows(rows, emptyText) {
      if (!rows.length) {
        return '<li class="leaderboard__item leaderboard__item--empty"><span class="leaderboard__rank">--</span><span class="leaderboard__name">' + emptyText + '</span><strong class="leaderboard__points">0 ' + tr("pts") + "</strong></li>";
      }
      return rows.map(function (row, index) {
        var rank = index + 1;
        var isCurrent = currentUser && row.username === currentUser;
        return (
          '<li class="leaderboard__item leaderboard__item--rank-' + rank + (isCurrent ? ' is-current-user' : '') + '">' +
            '<span class="leaderboard__rank" aria-label="' + (isZhLocale() ? (tr("Rank ") + rank + " 名") : ("Rank " + rank)) + '">' + rank + '</span>' +
            '<span class="leaderboard__name">' + escapeHtml(row.username) + '</span>' +
            '<strong class="leaderboard__points">' + row.points + " " + tr("pts") + "</strong>" +
          '</li>'
        );
      }).join("");
    }

    weeklyEl.innerHTML = renderLeaderboardRows(weeklyRows, tr("No activity yet"));
    totalEl.innerHTML = renderLeaderboardRows(totalRows, tr("No users yet"));

    renderStats(weeklyRows);
  }

  async function syncCommunityStateFromCloud(options) {
    if (!isCloudEnabled()) return false;
    try {
      var cloud = getCloudApi();
      var silent = !!(options && options.silent);
      var ensure = await cloud.ensureSeedPosts(seedPosts);
      if (ensure && ensure.error) {
        console.warn("[community.js] seed sync failed:", ensure.error);
      }
      var results = await Promise.all([
        cloud.listPosts(),
        cloud.listActivity(1000),
        cloud.listReports(400)
      ]);
      var postsResult = results[0];
      var activityResult = results[1];
      var reportsResult = results[2];

      if (postsResult && postsResult.error) console.warn("[community.js] post sync failed:", postsResult.error);
      if (activityResult && activityResult.error) console.warn("[community.js] activity sync failed:", activityResult.error);
      if (reportsResult && reportsResult.error) console.warn("[community.js] report sync failed:", reportsResult.error);

      if (postsResult && Array.isArray(postsResult.data) && postsResult.data.length) {
        writePosts(postsResult.data);
      } else if (postsResult && Array.isArray(postsResult.data)) {
        writePosts([]);
      }
      if (activityResult && Array.isArray(activityResult.data)) {
        state.activityLog = activityResult.data.slice();
        writeLocalActivityLog(state.activityLog);
      }
      if (reportsResult && Array.isArray(reportsResult.data)) {
        state.reports = reportsResult.data.slice();
        writeLocalReports(state.reports);
      }
      if (!silent) refreshAll();
      return true;
    } catch (error) {
      console.warn("[community.js] cloud sync failed:", error);
      return false;
    }
  }

  function refreshAll() {
    renderPosts();
    renderLeaderboards();
    updateComposerState();
    updateComposerAttachmentState();
    updateCharCounter();
  }

  function setFilter(filterValue) {
    state.filter = filterValue || DEFAULT_FILTER;
    document.querySelectorAll("[data-filter]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-filter") === state.filter);
    });
    syncRouteQuery();
    renderPosts();
  }

  function syncTagSearchInputs() {
    document.querySelectorAll("[data-tag-search]").forEach(function (input) {
      if (input.value !== state.tagSearch) input.value = state.tagSearch;
    });
  }

  function setTagSearch(value) {
    state.tagSearch = String(value || "").trim().replace(/^#/, "");
    syncTagSearchInputs();
    syncRouteQuery();
    renderPosts();
  }

  function getTagButtons() {
    return Array.prototype.slice.call(document.querySelectorAll("[data-tag]"));
  }

  function setActiveTag(tagValue) {
    state.selectedTag = tagValue || DEFAULT_TAG;
    getTagButtons().forEach(function (btn) {
      var active = btn.getAttribute("data-tag") === state.selectedTag;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function syncHexInputs(fromPicker) {
    var colorPicker = document.querySelector("[data-color-picker]");
    var hexInput = document.querySelector("[data-color-hex]");
    if (!colorPicker || !hexInput) return;
    var palette = readPaletteFromHiddenInput();
    if (fromPicker) {
      var picked = normalizeHex(colorPicker.value);
      hexInput.value = picked;
      palette[0] = picked;
      setComposerPalette(palette, false);
      return;
    }
    var normalized = normalizeHex(hexInput.value);
    hexInput.value = normalized;
    colorPicker.value = normalized;
    palette[0] = normalized;
    setComposerPalette(palette, false);
  }

  function persistComposerDraft() {
    var input = document.querySelector("[data-post-content]");
    var colorPicker = document.querySelector("[data-color-picker]");
    var paletteInput = document.querySelector("[data-palette-input]");
    if (!input || !colorPicker || !paletteInput) return;
    var existing = readDraft();
    var keepImported = existing && existing.origin && existing.origin !== "community";
    var paletteHexes = parsePaletteInput(paletteInput.value, colorPicker.value);
    writeDraft({
      content: input.value,
      tag: state.selectedTag,
      colorHex: colorPicker.value,
      paletteHexes: paletteHexes,
      includePalette: getIncludePalette(),
      includeImage: getIncludeImage(),
      imageDataUrl: existing && existing.imageDataUrl ? existing.imageDataUrl : "",
      origin: keepImported ? existing.origin : "community",
      originMeta: keepImported ? (existing.originMeta || {}) : {}
    });
  }

  function applyDraftToComposer() {
    var draft = readDraft();
    if (!draft) return;
    var input = document.querySelector("[data-post-content]");
    var draftContent = String(draft.content || "").slice(0, MAX_POST_LENGTH);
    if (input) input.value = draftContent;
    var hasMeaningfulDraft = !!(draftContent.trim() || draft.imageDataUrl);
    if (hasMeaningfulDraft) setComposerPalette(draft.paletteHexes || [draft.colorHex], false);
    else setComposerPalette([normalizeHex(draft.colorHex || DEFAULT_COLOR)], false);
    setComposerImagePreview(draft.imageDataUrl || "");
    setComposerIncludeOptions(draft.includePalette, draft.includeImage);
    setActiveTag(draft.tag || DEFAULT_TAG);
    updateDraftOriginLabel(draft);
    updateCharCounter();
  }

  function buildPostFromForm(text, colorHex, paletteHexes, imageDataUrl, includePalette, includeImage) {
    var draft = readDraft();
    var origin = draft && draft.origin ? draft.origin : "community";
    var originMeta = draft && draft.originMeta ? draft.originMeta : {};
    return normalizePost({
      id: createId(),
      author: getCurrentUsername(),
      content: text,
      tag: state.selectedTag,
      colorHex: colorHex,
      paletteHexes: paletteHexes,
      includePalette: includePalette,
      includeImage: includeImage,
      imageDataUrl: includeImage ? imageDataUrl : "",
      likes: 0,
      likedBy: [],
      pointsAwarded: POINTS_PER_POST,
      createdAt: new Date().toISOString(),
      origin: origin,
      originMeta: originMeta,
      featured: false
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    var now = Date.now();
    if (now < state.submitLockUntil) {
      setFeedback(tr("Please wait a moment before publishing another post."), "error");
      return;
    }
    if (!isLoggedIn()) {
      setFeedback(tr("Log in from the avatar menu before posting."), "error");
      return;
    }

    var form = event.currentTarget;
    var input = form.querySelector("[data-post-content]");
    var colorPicker = form.querySelector("[data-color-picker]");
    var paletteInput = form.querySelector("[data-palette-input]");
    if (!input || !colorPicker || !paletteInput) return;
    var text = input.value.trim();
    if (text.length < MIN_POST_LENGTH) {
      setFeedback((isZhLocale() ? "请至少输入 " + MIN_POST_LENGTH + " 个字符，让每条帖子都有实际学习价值。" : "Write at least " + MIN_POST_LENGTH + " characters so each post has real learning value."), "error");
      input.focus();
      return;
    }

    var colorHex = normalizeHex(colorPicker.value);
    var paletteHexes = parsePaletteInput(paletteInput.value, colorHex);
    var draft = readDraft();
    var includePalette = getIncludePalette();
    var includeImage = getIncludeImage();
    var imageDataUrl = includeImage && draft && draft.imageDataUrl ? sanitizeImageDataUrl(draft.imageDataUrl) : "";
    var post = buildPostFromForm(text, colorHex, paletteHexes, imageDataUrl, includePalette, includeImage);
    if (isCloudEnabled()) {
      try {
        var cloudSave = await getCloudApi().savePost(post);
        if (cloudSave && cloudSave.error) {
          setFeedback(tr("Could not publish this post to the shared community yet."), "error");
          console.warn("[community.js] save post failed:", cloudSave.error);
          return;
        }
        post = normalizePost(cloudSave && cloudSave.data ? cloudSave.data : post);
      } catch (error) {
        setFeedback(tr("Could not publish this post to the shared community yet."), "error");
        console.warn("[community.js] save post failed:", error);
        return;
      }
    }
    state.posts.unshift(post);
    writePosts(state.posts);
    writeDraft(null);
    state.submitLockUntil = now + SUBMIT_COOLDOWN_MS;

    var auth = getAuthApi();
    if (auth && auth.recordActivity) {
      await auth.recordActivity(post.author, {
        pointsDelta: POINTS_PER_POST,
        postDelta: 1,
        source: "community",
        type: "post",
        refId: post.id
      });
    }
    state.activityLog = readLocalActivityLog();

    input.value = "";
    setComposerPalette([DEFAULT_COLOR], false);
    setComposerIncludeOptions(true, true);
    var imageInput = form.querySelector("[data-image-input]");
    if (imageInput) imageInput.value = "";
    setComposerImagePreview("");
    updateDraftOriginLabel(null);
    setTagSearch("");
    setFilter(DEFAULT_FILTER);
    setFeedback(tr("Post published. You earned 5 points."), "success");
    if (isCloudEnabled()) await syncCommunityStateFromCloud({ silent: true });
    refreshAll();
    document.dispatchEvent(new CustomEvent("clw:post-created", { detail: { post: post } }));
  }

  async function handleLikeClick(event) {
    var btn = event.target.closest("[data-like-id]");
    if (!btn) return false;
    if (!isLoggedIn()) {
      setFeedback(tr("Log in to like posts and save your reaction."), "error");
      return true;
    }

    var postId = btn.getAttribute("data-like-id");
    var actorId = getActorId();
    if (!postId || !actorId) return true;

    var now = Date.now();
    if (state.likeLocks[postId] && now - state.likeLocks[postId] < LIKE_COOLDOWN_MS) return true;
    state.likeLocks[postId] = now;

    var addedLike = false;
    var updatedPost = null;
    state.posts = state.posts.map(function (post) {
      if (post.id !== postId) return post;
      var likedBy = Array.isArray(post.likedBy) ? post.likedBy.slice() : [];
      var idx = likedBy.indexOf(actorId);
      var likes = Number(post.likes || 0);
      if (idx >= 0) {
        likedBy.splice(idx, 1);
        likes = Math.max(0, likes - 1);
      } else {
        likedBy.push(actorId);
        likes += 1;
        addedLike = true;
      }
      updatedPost = Object.assign({}, post, { likes: likes, likedBy: likedBy });
      return updatedPost;
    });
    if (isCloudEnabled() && updatedPost) {
      try {
        var likeSave = await getCloudApi().savePost(updatedPost);
        if (likeSave && likeSave.error) {
          setFeedback(tr("Could not sync your reaction right now."), "error");
          console.warn("[community.js] like sync failed:", likeSave.error);
          await syncCommunityStateFromCloud({ silent: true });
          refreshAll();
          return true;
        }
        updatedPost = normalizePost(likeSave && likeSave.data ? likeSave.data : updatedPost);
        state.posts = state.posts.map(function (post) {
          return post.id === postId ? updatedPost : post;
        });
      } catch (error) {
        setFeedback(tr("Could not sync your reaction right now."), "error");
        console.warn("[community.js] like sync failed:", error);
        await syncCommunityStateFromCloud({ silent: true });
        refreshAll();
        return true;
      }
    }
    writePosts(state.posts);

    if (addedLike) {
      var auth = getAuthApi();
      if (auth && auth.recordActivity) {
        await auth.recordActivity(actorId, { pointsDelta: 0, postDelta: 0, source: "community", type: "like", refId: postId });
      }
    }
    state.activityLog = readLocalActivityLog();

    setFeedback("", "");
    refreshAll();
    return true;
  }

  async function toggleFeature(postId) {
    if (!isDemoModerator()) {
      setFeedback(tr("Demo highlight is reserved for the showcase moderator account."), "error");
      return;
    }
    var target = null;
    state.posts = state.posts.map(function (post) {
      if (post.id !== postId) return post;
      target = Object.assign({}, post, { featured: !post.featured });
      return target;
    });
    if (isCloudEnabled() && target) {
      try {
        var featureSave = await getCloudApi().savePost(target);
        if (featureSave && featureSave.error) {
          setFeedback(tr("Could not update demo highlight right now."), "error");
          console.warn("[community.js] feature sync failed:", featureSave.error);
          await syncCommunityStateFromCloud({ silent: true });
          refreshAll();
          return;
        }
        target = normalizePost(featureSave && featureSave.data ? featureSave.data : target);
        state.posts = state.posts.map(function (post) {
          return post.id === postId ? target : post;
        });
      } catch (error) {
        setFeedback(tr("Could not update demo highlight right now."), "error");
        console.warn("[community.js] feature sync failed:", error);
        await syncCommunityStateFromCloud({ silent: true });
        refreshAll();
        return;
      }
    }
    writePosts(state.posts);
    setFeedback(tr("Demo highlight updated for showcase."), "success");
    refreshAll();
  }

  async function deletePost(postId) {
    var target = null;
    for (var i = 0; i < state.posts.length; i += 1) {
      if (state.posts[i].id === postId) {
        target = state.posts[i];
        break;
      }
    }
    if (!target || !isPostOwner(target)) {
      setFeedback(tr("Only the author can delete this post."), "error");
      return;
    }
    if (!window.confirm(tr("Delete this post from the shared community feed?"))) return;
    if (isCloudEnabled()) {
      try {
        var removal = await getCloudApi().deletePost(postId);
        if (removal && removal.error) {
          setFeedback(tr("Could not delete this post from the shared feed yet."), "error");
          console.warn("[community.js] delete sync failed:", removal.error);
          return;
        }
      } catch (error) {
        setFeedback(tr("Could not delete this post from the shared feed yet."), "error");
        console.warn("[community.js] delete sync failed:", error);
        return;
      }
    }
    state.posts = state.posts.filter(function (post) { return post.id !== postId; });
    writePosts(state.posts);
    if (state.selectedPostId === postId) state.selectedPostId = "";
    var auth = getAuthApi();
    if (auth && auth.getUserStats && auth.updateUserStats) {
      var stats = auth.getUserStats(target.author);
      auth.updateUserStats(target.author, {
        points: Number(stats && stats.points ? stats.points : 0),
        postCount: Math.max(0, Number(stats && stats.postCount ? stats.postCount : 0) - 1),
        streakDays: Number(stats && stats.streakDays ? stats.streakDays : 0),
        lastActiveDate: stats && stats.lastActiveDate ? stats.lastActiveDate : ""
      });
    }
    setFeedback(tr("Post deleted from the shared community feed."), "success");
    refreshAll();
  }

  function handlePostAction(event) {
    var actionBtn = event.target.closest("[data-post-action]");
    if (!actionBtn) return false;
    var action = actionBtn.getAttribute("data-post-action");
    var postId = actionBtn.getAttribute("data-post-id");
    if (!postId) return true;
    if (!isLoggedIn()) {
      setFeedback(tr("Log in to use moderation actions."), "error");
      return true;
    }

    if (action === "feature") {
      void toggleFeature(postId);
      return true;
    }
    if (action === "hide") {
      toggleHidePost(postId);
      setFeedback(tr("Visibility preference updated for your account."), "success");
      refreshAll();
      return true;
    }
    if (action === "report") {
      reportPost(postId).then(function (saved) {
        setFeedback(saved ? tr("Thanks. The post was sent for review.") : tr("You already reported this post."), saved ? "success" : "error");
      }).catch(function (error) {
        console.warn("[community.js] report action failed:", error);
        setFeedback(tr("Could not send this report right now."), "error");
      });
      return true;
    }
    if (action === "delete") {
      void deletePost(postId);
      return true;
    }
    return true;
  }

  function openGuidelines() {
    var modal = document.querySelector("[data-guidelines-modal]");
    if (modal) {
      modal.hidden = false;
      updateOverlayScrollLock();
    }
  }

  function closeGuidelines() {
    var modal = document.querySelector("[data-guidelines-modal]");
    if (modal) {
      modal.hidden = true;
      updateOverlayScrollLock();
    }
  }

  function openImageLightbox(src) {
    var modal = document.querySelector("[data-image-lightbox]");
    var img = document.querySelector("[data-lightbox-image]");
    if (!modal || !img) return;
    var safe = sanitizeImageDataUrl(src);
    if (!safe) return;
    img.src = safe;
    modal.hidden = false;
    updateOverlayScrollLock();
  }

  function closeImageLightbox() {
    var modal = document.querySelector("[data-image-lightbox]");
    var img = document.querySelector("[data-lightbox-image]");
    if (img) img.src = "";
    if (modal) modal.hidden = true;
    updateOverlayScrollLock();
  }

  function scrollDetailIntoViewOnMobile() {
    if (getCommunityView() !== "all" || !isMobileViewport()) return;
    var detail = document.querySelector("[data-post-detail]");
    if (!detail) return;
    window.requestAnimationFrame(function () {
      detail.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function bindTagKeyboardNavigation() {
    var tags = getTagButtons();
    tags.forEach(function (btn, index) {
      btn.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          tags[(index + 1) % tags.length].focus();
          return;
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          tags[(index - 1 + tags.length) % tags.length].focus();
          return;
        }
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setActiveTag(btn.getAttribute("data-tag"));
          persistComposerDraft();
        }
      });
    });
  }

  function bindEvents() {
    var form = document.querySelector("[data-post-form]");
    if (form) form.addEventListener("submit", handleSubmit);

    document.querySelectorAll("[data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setFilter(btn.getAttribute("data-filter"));
      });
    });

    document.querySelectorAll("[data-tag-search]").forEach(function (input) {
      input.addEventListener("input", function () {
        setTagSearch(input.value);
      });
    });

    document.addEventListener("click", function (event) {
      var scrollBtn = event.target.closest("[data-scroll-composer]");
      if (scrollBtn) {
        event.preventDefault();
        scrollToComposer();
        return;
      }
      var clearBtn = event.target.closest("[data-clear-tag-search]");
      if (clearBtn) {
        event.preventDefault();
        setTagSearch("");
      }
    });

    document.querySelectorAll("[data-tag]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setActiveTag(btn.getAttribute("data-tag"));
        persistComposerDraft();
      });
    });
    bindTagKeyboardNavigation();

    var colorPicker = document.querySelector("[data-color-picker]");
    var hexInput = document.querySelector("[data-color-hex]");
    var contentInput = document.querySelector("[data-post-content]");
    var paletteInput = document.querySelector("[data-palette-input]");
    var imageInput = document.querySelector("[data-image-input]");
    var imageClearBtn = document.querySelector("[data-image-clear]");
    var paletteRow = document.querySelector("[data-palette-row]");
    var paletteFromImageBtn = document.querySelector("[data-palette-from-image]");
    var includePaletteInput = document.querySelector("[data-include-palette]");
    var includeImageInput = document.querySelector("[data-include-image]");

    if (colorPicker) {
      colorPicker.addEventListener("input", function () {
        syncHexInputs(true);
        persistComposerDraft();
      });
    }
    if (hexInput) {
      hexInput.addEventListener("blur", function () {
        syncHexInputs(false);
        persistComposerDraft();
      });
      hexInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          syncHexInputs(false);
          persistComposerDraft();
        }
      });
    }
    if (contentInput) {
      contentInput.addEventListener("input", function () {
        updateCharCounter();
        persistComposerDraft();
      });
    }
    if (includePaletteInput) {
      includePaletteInput.addEventListener("change", function () {
        updateComposerAttachmentState();
        persistComposerDraft();
      });
    }
    if (includeImageInput) {
      includeImageInput.addEventListener("change", function () {
        updateComposerAttachmentState();
        persistComposerDraft();
      });
    }
    if (paletteInput) paletteInput.addEventListener("change", persistComposerDraft);
    if (paletteFromImageBtn) {
      paletteFromImageBtn.addEventListener("click", function () {
        var draft = readDraft();
        var image = draft && draft.imageDataUrl ? draft.imageDataUrl : "";
        if (!image) {
          setFeedback(tr("Please attach an image first, then extract palette."), "error");
          return;
        }
        extractPaletteFromImageDataUrl(image, 6).then(function (colors) {
          if (!colors.length) {
            setFeedback(tr("Could not extract palette from this image."), "error");
            return;
          }
          var merged = readPaletteFromHiddenInput().concat(colors);
          setComposerPalette(merged, true);
          setFeedback(tr("Palette extracted from image."), "success");
        });
      });
    }
    if (paletteRow) {
      paletteRow.addEventListener("click", function (event) {
        var addBtn = event.target.closest("[data-palette-add]");
        if (addBtn) {
          var nextPalette = readPaletteFromHiddenInput();
          var seed = nextPalette.length ? nextPalette[nextPalette.length - 1] : DEFAULT_COLOR;
          nextPalette.push(seed);
          setComposerPalette(nextPalette, true);
          return;
        }
        var deleteBtn = event.target.closest("[data-palette-delete]");
        if (deleteBtn) {
          var deleteIdx = Number(deleteBtn.getAttribute("data-palette-delete"));
          if (!Number.isFinite(deleteIdx)) return;
          var deletePalette = readPaletteFromHiddenInput();
          if (deletePalette.length <= 1) {
            setFeedback(tr("At least one color is required."), "error");
            return;
          }
          deletePalette.splice(deleteIdx, 1);
          setComposerPalette(deletePalette, true);
          setFeedback(tr("Color removed."), "success");
          return;
        }
        var blockBtn = event.target.closest("[data-palette-block]");
        if (!blockBtn) return;
        var idx = Number(blockBtn.getAttribute("data-palette-block"));
        if (!Number.isFinite(idx)) return;
        var palette = readPaletteFromHiddenInput();
        openNativeColorPicker(palette[idx], function (nextHex) {
          palette[idx] = nextHex;
          setComposerPalette(palette, true);
        });
      });
    }
    if (imageInput) {
      imageInput.addEventListener("change", function (event) {
        var file = event.target.files && event.target.files[0] ? event.target.files[0] : null;
        if (!file) return;
        if (!/^image\//.test(file.type)) {
          setFeedback(tr("Please select a valid image file."), "error");
          return;
        }
        var reader = new FileReader();
        reader.onload = function () {
          var dataUrl = sanitizeImageDataUrl(reader.result);
          if (!dataUrl) {
            setFeedback(tr("Could not read this image."), "error");
            return;
          }
          var draft = readDraft() || {};
          writeDraft({
            content: document.querySelector("[data-post-content]") ? document.querySelector("[data-post-content]").value : "",
            tag: state.selectedTag,
            colorHex: document.querySelector("[data-color-picker]") ? document.querySelector("[data-color-picker]").value : DEFAULT_COLOR,
            paletteHexes: parsePaletteInput(document.querySelector("[data-palette-input]") ? document.querySelector("[data-palette-input]").value : "", DEFAULT_COLOR),
            includePalette: getIncludePalette(),
            includeImage: true,
            imageDataUrl: dataUrl,
            origin: draft.origin || "community",
            originMeta: draft.originMeta || {}
          });
          setComposerIncludeOptions(getIncludePalette(), true);
          setComposerImagePreview(dataUrl);
          setFeedback(tr("Image attached to your post."), "success");
        };
        reader.readAsDataURL(file);
      });
    }
    if (imageClearBtn) {
      imageClearBtn.addEventListener("click", function () {
        if (imageInput) imageInput.value = "";
        var draft = readDraft() || {};
        writeDraft({
          content: document.querySelector("[data-post-content]") ? document.querySelector("[data-post-content]").value : "",
          tag: state.selectedTag,
          colorHex: document.querySelector("[data-color-picker]") ? document.querySelector("[data-color-picker]").value : DEFAULT_COLOR,
          paletteHexes: parsePaletteInput(document.querySelector("[data-palette-input]") ? document.querySelector("[data-palette-input]").value : "", DEFAULT_COLOR),
          includePalette: getIncludePalette(),
          includeImage: getIncludeImage(),
          imageDataUrl: "",
          origin: draft.origin || "community",
          originMeta: draft.originMeta || {}
        });
        setComposerImagePreview("");
      });
    }

    function bindPostListClicks(node) {
      if (!node) return;
      node.addEventListener("click", function (event) {
        if (event.target.closest("[data-like-id]")) {
          void handleLikeClick(event);
          return;
        }
        if (event.target.closest("[data-post-action]")) {
          handlePostAction(event);
          return;
        }
        var tagFilterBtn = event.target.closest("[data-filter-tag]");
        if (tagFilterBtn) {
          setTagSearch(tagFilterBtn.getAttribute("data-filter-tag"));
          setFilter(DEFAULT_FILTER);
          return;
        }
        var zoomBtn = event.target.closest("[data-image-zoom]");
        if (zoomBtn) {
          openImageLightbox(zoomBtn.getAttribute("data-image-zoom"));
          return;
        }
        var selectBtn = event.target.closest("[data-post-select]");
        if (selectBtn) {
          state.selectedPostId = selectBtn.getAttribute("data-post-select") || "";
          renderPosts();
          scrollDetailIntoViewOnMobile();
        }
      });
    }
    bindPostListClicks(document.querySelector("[data-post-list]"));
    bindPostListClicks(document.querySelector("[data-post-detail]"));

    var openGuideBtn = document.querySelector("[data-open-guidelines]");
    if (openGuideBtn) openGuideBtn.addEventListener("click", openGuidelines);
    var toastCloseBtn = document.querySelector("[data-community-toast-close]");
    if (toastCloseBtn) toastCloseBtn.addEventListener("click", hideToast);
    document.querySelectorAll("[data-close-guidelines]").forEach(function (btn) {
      btn.addEventListener("click", closeGuidelines);
    });
    document.querySelectorAll("[data-close-image-lightbox]").forEach(function (btn) {
      btn.addEventListener("click", closeImageLightbox);
    });
    var modal = document.querySelector("[data-guidelines-modal]");
    if (modal) {
      modal.addEventListener("click", function (event) {
        if (event.target === modal) closeGuidelines();
      });
    }
    var lightbox = document.querySelector("[data-image-lightbox]");
    if (lightbox) {
      lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) closeImageLightbox();
      });
    }
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeGuidelines();
        closeImageLightbox();
      }
    });

    document.addEventListener("clw:auth-changed", function () {
      setFeedback("", "");
      refreshAll();
    });
    document.addEventListener("clw:user-data-updated", refreshAll);
    document.addEventListener("clw:activity-recorded", function () {
      state.activityLog = readLocalActivityLog();
      refreshAll();
    });
    document.addEventListener("clw:community-draft-updated", function () {
      applyDraftToComposer();
      setFeedback(tr("Draft imported from another page. You can edit and publish it here."), "success");
      var composer = document.getElementById("composer");
      if (composer) composer.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    document.addEventListener("clw:locale-changed", function () {
      applyStaticLocale();
      updateDraftOriginLabel(readDraft());
      refreshAll();
    });
    window.addEventListener("focus", function () {
      if (!isCloudEnabled()) return;
      void syncCommunityStateFromCloud({ silent: false });
    });
  }

  function hydrateLocalState() {
    state.posts = readPosts();
    state.activityLog = readLocalActivityLog();
    state.reports = readLocalReports();
  }

  async function init() {
    if (document.body.dataset.communityReady === "1") return;
    document.body.dataset.communityReady = "1";
    hydrateLocalState();
    applyStaticLocale();
    applyHomeRouteState();
    setActiveTag(DEFAULT_TAG);
    setComposerPalette([DEFAULT_COLOR], false);
    setComposerIncludeOptions(true, true);
    bindEvents();
    applyRouteQuery();
    syncTagSearchInputs();
    applyDraftToComposer();
    setFilter(state.filter || DEFAULT_FILTER);
    refreshAll();
    jumpToHomeRouteTarget();
    updateOverlayScrollLock();
    if (isCloudEnabled()) {
      await syncCommunityStateFromCloud({ silent: false });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      void init();
    });
  } else {
    void init();
  }
})();
