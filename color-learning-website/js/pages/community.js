/**
 * Community page V1:
 * - Create post + localStorage persistence
 * - Feed filters (latest / popular / tag)
 * - Personal progress card
 * - Leaderboard compatible with game/test data stores
 */
(function () {
  "use strict";

  var STORAGE = {
    currentUser: "clw_current_user",
    posts: "clw_posts_v1",
    userStats: "clw_user_stats_v1",
    leaderboard: "clw_leaderboard_v1",
    gameResults: "clw_game_results_v1",
    testResults: "clw_test_results_v1"
  };
  var POINTS_PER_POST = 5;
  var DEFAULT_FILTER = "latest";
  var DEFAULT_TAG = "#Accessibility";

  var seedPosts = [
    {
      id: "seed_1",
      author: "studentA",
      content: "Low contrast text can fail accessibility quickly. I now test pairs before publishing.",
      tag: "#Accessibility",
      colorHex: "#2b78e4",
      likes: 12,
      pointsAwarded: 5,
      createdAt: "2026-04-09T06:00:00.000Z"
    },
    {
      id: "seed_2",
      author: "studentB",
      content: "Today I reviewed RGB vs HSV and found HSV easier for tuning brightness during design.",
      tag: "#RGB_HSV",
      colorHex: "#1e4fb0",
      likes: 8,
      pointsAwarded: 5,
      createdAt: "2026-04-09T03:30:00.000Z"
    }
  ];

  var baseLeaderboard = {
    studentA: 120,
    studentB: 95,
    studentC: 82
  };

  var state = {
    posts: [],
    filter: DEFAULT_FILTER,
    selectedTag: DEFAULT_TAG
  };

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

  function getCurrentUsername() {
    var user = readJSON(STORAGE.currentUser, null);
    if (user && typeof user.username === "string" && user.username.trim()) {
      return user.username.trim();
    }
    return "Guest";
  }

  function normalizeHex(value) {
    if (!value) return "#2b78e4";
    var hex = value.trim().toLowerCase();
    if (!hex.startsWith("#")) hex = "#" + hex;
    if (!/^#[0-9a-f]{6}$/.test(hex)) return "#2b78e4";
    return hex;
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
    if (Number.isNaN(ts)) return "just now";
    var diffMs = Date.now() - ts;
    var mins = Math.floor(diffMs / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return mins + "m ago";
    var hours = Math.floor(mins / 60);
    if (hours < 24) return hours + "h ago";
    var days = Math.floor(hours / 24);
    return days + "d ago";
  }

  function sortPosts(posts) {
    var arr = posts.slice();
    if (state.filter === "popular") {
      arr.sort(function (a, b) {
        return (b.likes || 0) - (a.likes || 0);
      });
      return arr;
    }
    if (state.filter.startsWith("#")) {
      arr = arr.filter(function (item) {
        return item.tag === state.filter;
      });
    }
    arr.sort(function (a, b) {
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    });
    return arr;
  }

  function readPosts() {
    var saved = readJSON(STORAGE.posts, null);
    if (Array.isArray(saved) && saved.length > 0) return saved;
    writeJSON(STORAGE.posts, seedPosts);
    return seedPosts.slice();
  }

  function writePosts(posts) {
    state.posts = posts.slice();
    writeJSON(STORAGE.posts, state.posts);
  }

  function readExternalResults(key) {
    var data = readJSON(key, []);
    return Array.isArray(data) ? data : [];
  }

  function collectExternalPoints(username) {
    var sources = [readExternalResults(STORAGE.gameResults), readExternalResults(STORAGE.testResults)];
    var total = 0;
    sources.forEach(function (list) {
      list.forEach(function (item) {
        if (!item || item.username !== username) return;
        var delta = Number(item.pointsDelta || item.score || 0);
        if (!Number.isNaN(delta)) total += delta;
      });
    });
    return total;
  }

  function isoDateString(isoString) {
    var d = new Date(isoString);
    if (Number.isNaN(d.getTime())) return "";
    return d.toISOString().slice(0, 10);
  }

  function calcStreakFromDates(dates) {
    if (!dates.length) return 0;
    var unique = Array.from(new Set(dates)).sort().reverse();
    var streak = 0;
    var cursor = new Date();
    cursor.setHours(0, 0, 0, 0);
    var cursorStr = cursor.toISOString().slice(0, 10);
    if (unique[0] !== cursorStr) {
      cursor.setDate(cursor.getDate() - 1);
      cursorStr = cursor.toISOString().slice(0, 10);
      if (unique[0] !== cursorStr) return 0;
    }
    for (var i = 0; i < unique.length; i += 1) {
      var expected = cursor.toISOString().slice(0, 10);
      if (unique[i] !== expected) break;
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  function computeUserStats(posts) {
    var users = {};
    posts.forEach(function (post) {
      if (!post || !post.author) return;
      if (!users[post.author]) {
        users[post.author] = {
          username: post.author,
          postCount: 0,
          communityPoints: 0,
          streakDays: 0,
          lastPostDate: ""
        };
      }
      users[post.author].postCount += 1;
      users[post.author].communityPoints += Number(post.pointsAwarded || POINTS_PER_POST);
      var day = isoDateString(post.createdAt);
      if (day) {
        if (!users[post.author].dates) users[post.author].dates = [];
        users[post.author].dates.push(day);
      }
      if (!users[post.author].lastPostDate || post.createdAt > users[post.author].lastPostDate) {
        users[post.author].lastPostDate = post.createdAt;
      }
    });

    Object.keys(users).forEach(function (username) {
      var row = users[username];
      row.streakDays = calcStreakFromDates(row.dates || []);
      delete row.dates;
    });

    writeJSON(STORAGE.userStats, { users: users });
    return users;
  }

  function getSavedStatsMap() {
    var raw = readJSON(STORAGE.userStats, { users: {} });
    if (!raw || typeof raw !== "object" || !raw.users || typeof raw.users !== "object") {
      return {};
    }
    return raw.users;
  }

  function buildLeaderboard(usersMap) {
    var scoreboard = Object.assign({}, baseLeaderboard);

    Object.keys(usersMap).forEach(function (username) {
      var stats = usersMap[username];
      var base = scoreboard[username] || 0;
      var communityPoints = Number(stats.communityPoints || 0);
      var externalPoints = collectExternalPoints(username);
      scoreboard[username] = base + communityPoints + externalPoints;
    });

    readExternalResults(STORAGE.gameResults)
      .concat(readExternalResults(STORAGE.testResults))
      .forEach(function (result) {
        if (!result || !result.username || usersMap[result.username]) return;
        var prev = scoreboard[result.username] || 0;
        var delta = Number(result.pointsDelta || result.score || 0);
        if (!Number.isNaN(delta)) {
          scoreboard[result.username] = prev + delta;
        }
      });

    var rows = Object.keys(scoreboard).map(function (username) {
      return {
        username: username,
        totalPoints: scoreboard[username]
      };
    });
    rows.sort(function (a, b) {
      return b.totalPoints - a.totalPoints;
    });
    return rows.slice(0, 6);
  }

  function renderPosts() {
    var container = document.querySelector("[data-post-list]");
    if (!container) return;
    var rows = sortPosts(state.posts);
    if (!rows.length) {
      container.innerHTML = '<p class="post-card">No posts yet. Be the first to share a learning insight.</p>';
      return;
    }

    container.innerHTML = rows
      .map(function (post) {
        var content = escapeHtml(post.content);
        var username = escapeHtml(post.author);
        var tag = escapeHtml(post.tag || "#General");
        var hex = normalizeHex(post.colorHex);
        var likes = Number(post.likes || 0);
        var points = Number(post.pointsAwarded || POINTS_PER_POST);
        var initial = escapeHtml((post.author || "?").slice(0, 1).toUpperCase());
        return (
          '<article class="post-card">' +
          '<header class="post-header">' +
          '<div class="post-user">' +
          '<span class="post-user__avatar" aria-hidden="true">' +
          initial +
          "</span>" +
          "<div>" +
          '<p class="post-user__name">' +
          username +
          "</p>" +
          '<span class="post-tag">' +
          tag +
          "</span>" +
          "</div>" +
          "</div>" +
          '<span class="post-time">' +
          timeAgo(post.createdAt) +
          "</span>" +
          "</header>" +
          '<p class="post-content">' +
          content +
          "</p>" +
          '<div class="post-color" style="background:' +
          hex +
          '">Attached color ' +
          hex +
          "</div>" +
          '<footer class="post-footer">' +
          '<button type="button" class="like-btn" data-like-id="' +
          post.id +
          '">Like ' +
          likes +
          "</button>" +
          '<span class="post-points">Rewarded +' +
          points +
          " pts</span>" +
          "</footer>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderStats() {
    var user = getCurrentUsername();
    var usersMap = getSavedStatsMap();
    var pointsEl = document.querySelector("[data-user-points]");
    var postsEl = document.querySelector("[data-user-posts]");
    var streakEl = document.querySelector("[data-user-streak]");
    if (!pointsEl || !postsEl || !streakEl) return;

    var stats = usersMap[user] || {
      postCount: 0,
      communityPoints: 0,
      streakDays: 0
    };
    var totalPoints = Number(stats.communityPoints || 0) + collectExternalPoints(user);
    pointsEl.textContent = String(totalPoints);
    postsEl.textContent = String(stats.postCount || 0);

    if (!stats.streakDays) {
      streakEl.textContent = "Post today to start your streak.";
    } else {
      streakEl.textContent = "Keep it up: " + stats.streakDays + "-day streak active.";
    }
  }

  function renderLeaderboard() {
    var usersMap = getSavedStatsMap();
    var listEl = document.querySelector("[data-leaderboard-list]");
    if (!listEl) return;
    var top = buildLeaderboard(usersMap);
    writeJSON(STORAGE.leaderboard, top);
    listEl.innerHTML = top
      .map(function (row) {
        return "<li><span>" + escapeHtml(row.username) + "</span><strong>" + row.totalPoints + " pts</strong></li>";
      })
      .join("");
  }

  function refreshAll() {
    var usersMap = computeUserStats(state.posts);
    renderPosts();
    renderStats(usersMap);
    renderLeaderboard();
  }

  function setFilter(filterValue) {
    state.filter = filterValue || DEFAULT_FILTER;
    document.querySelectorAll("[data-filter]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-filter") === state.filter);
    });
    renderPosts();
  }

  function setActiveTag(tagValue) {
    state.selectedTag = tagValue || DEFAULT_TAG;
    document.querySelectorAll("[data-tag]").forEach(function (btn) {
      var isActive = btn.getAttribute("data-tag") === state.selectedTag;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function syncHexInputs(fromPicker) {
    var colorPicker = document.querySelector("[data-color-picker]");
    var hexInput = document.querySelector("[data-color-hex]");
    if (!colorPicker || !hexInput) return;
    if (fromPicker) {
      hexInput.value = normalizeHex(colorPicker.value);
      return;
    }
    var normalized = normalizeHex(hexInput.value);
    hexInput.value = normalized;
    colorPicker.value = normalized;
  }

  function handleSubmit(event) {
    event.preventDefault();
    var form = event.currentTarget;
    var input = form.querySelector("[data-post-content]");
    var colorPicker = form.querySelector("[data-color-picker]");
    if (!input || !colorPicker) return;
    var text = input.value.trim();
    if (!text) return;

    var username = getCurrentUsername();
    var post = {
      id: createId(),
      author: username,
      content: text,
      tag: state.selectedTag,
      colorHex: normalizeHex(colorPicker.value),
      likes: 0,
      pointsAwarded: POINTS_PER_POST,
      createdAt: new Date().toISOString()
    };

    state.posts.unshift(post);
    writePosts(state.posts);
    refreshAll();
    input.value = "";

    document.dispatchEvent(new CustomEvent("clw:post-created", { detail: { post: post } }));
    document.dispatchEvent(new CustomEvent("clw:stats-updated", { detail: { username: username } }));
  }

  function handleLikeClick(event) {
    var btn = event.target.closest("[data-like-id]");
    if (!btn) return;
    var postId = btn.getAttribute("data-like-id");
    if (!postId) return;
    state.posts = state.posts.map(function (post) {
      if (post.id !== postId) return post;
      return Object.assign({}, post, { likes: Number(post.likes || 0) + 1 });
    });
    writePosts(state.posts);
    renderPosts();
  }

  function bindEvents() {
    var scrollBtn = document.querySelector("[data-scroll-composer]");
    if (scrollBtn) {
      scrollBtn.addEventListener("click", function () {
        var composer = document.getElementById("composer");
        if (!composer) return;
        composer.scrollIntoView({ behavior: "smooth", block: "start" });
        var text = document.querySelector("[data-post-content]");
        if (text) text.focus();
      });
    }

    var form = document.querySelector("[data-post-form]");
    if (form) form.addEventListener("submit", handleSubmit);

    document.querySelectorAll("[data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setFilter(btn.getAttribute("data-filter"));
      });
    });

    document.querySelectorAll("[data-tag]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setActiveTag(btn.getAttribute("data-tag"));
      });
    });

    var colorPicker = document.querySelector("[data-color-picker]");
    var hexInput = document.querySelector("[data-color-hex]");
    if (colorPicker) {
      colorPicker.addEventListener("input", function () {
        syncHexInputs(true);
      });
    }
    if (hexInput) {
      hexInput.addEventListener("blur", function () {
        syncHexInputs(false);
      });
      hexInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          syncHexInputs(false);
        }
      });
    }

    var postList = document.querySelector("[data-post-list]");
    if (postList) postList.addEventListener("click", handleLikeClick);

    document.addEventListener("clw:game-finished", renderLeaderboard);
    document.addEventListener("clw:test-finished", renderLeaderboard);
  }

  function init() {
    if (document.body.dataset.communityReady === "1") return;
    document.body.dataset.communityReady = "1";
    state.posts = readPosts();
    setActiveTag(DEFAULT_TAG);
    setFilter(DEFAULT_FILTER);
    syncHexInputs(false);
    bindEvents();
    refreshAll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
