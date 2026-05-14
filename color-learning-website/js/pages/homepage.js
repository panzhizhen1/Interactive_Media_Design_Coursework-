/**
 * Homepage: theme picker UI (default mode only; RGB/HSV reserved).
 */
(function () {
  "use strict";

  var HOME_ZH = {
    "Home — Colour Learning": "首页 — 色彩学习",
    "Explore the world of colours!": "探索色彩的世界！",
    "Learn colour through visuals, games, quizzes, and challenges.": "用可视化、游戏、测验与挑战学习色彩。",
    "Check your understanding with quick quizzes, levels, and instant feedback.": "通过快速测验、分级题目与即时反馈检查学习效果。",
    "Take Full Quiz": "进入完整测验",
    "Continue Last Quiz": "继续上次测验",
    "Start from Basics": "从基础测试开始",
    "Follow four guided modules from colour basics to interactive practice.": "从基础概念到互动实践，按照四个模块建立完整理解。",
    "Module 1: Colour Basics": "模块 1：色彩基础",
    "Module 2: Encoding Concepts": "模块 2：编码概念",
    "Module 3: Advanced Topics": "模块 3：进阶主题",
    "Module 4: Interactive Practice": "模块 4：互动实践",
    "Recommended start:": "推荐起点：",
    "Colour Basics": "色彩基础",
    "Choose Your Colour Path": "开启你的色彩之旅",
    "Pick the way you want to explore colour today.": "选择今天最适合你的色彩学习方式。",
    "Start Learning": "开始学习",
    "Try Challenge": "快速测试",
    "Learn Colours the Smart Way": "色彩知识随手学",
    "Learn a Colour Concept!": "每天认识一个色彩概念",
    "See Colour in Action!": "拖一拖，理解颜色如何变化",
    "Try Today’s Challenge!": "今日色彩小测",
    "Turn a blank drawing into a colour challenge using palettes, harmony rules, and creative choices.": "使用调色板、配色规则与创意选择，把黑白图画变成色彩挑战。",
    "How to play": "玩法提示",
    "1 Pick a palette": "1 选择颜色",
    "2 Fill the shapes": "2 给图形上色",
    "3 Check harmony": "3 检查配色效果",
    "Start your colour challenge!": "来一场色彩挑战！",
    "Start your colour challenge: ": "来一场色彩挑战：",
    "Start your colour challenge with ": "来一场色彩挑战：",
    "Shape & Colour Game": "用形状和颜色完成挑战！",
    "Start challenge": "开始挑战",
    "👥 Join the Colour Community": "加入社区，分享你的发现与灵感",
    "Share progress, earn points, and learn together with other colour explorers.": "分享进度、获取积分，与其他色彩探索者共同学习。",
    "Enter Community": "进入社区",
    "Tools": "工具",
    "Learning": "学习",
    "Testing": "测试",
    "Game": "游戏",
    "Community": "社区",
    "Project": "项目",
    "Project Introduction": "项目介绍",
    "Privacy & Data Policy": "数据与隐私说明",
    "Contact Team": "联系团队",
    "New community post +1": "社区新帖子 +1",
    "Loading a random topic...": "正在加载随机知识点...",
    "Loading knowledge preview...": "正在加载知识预览...",
    "Preparing section route...": "正在准备知识点跳转...",
    "Loading a random question...": "正在加载随机题目...",
    "Preparing quiz route": "正在准备测验入口",
    "Loading a community post...": "正在加载社区帖子...",
    "Explore learn module": "进入学习模块",
    "Open random test question": "打开随机测试题",
    "Start your colour challenge in Game": "在游戏模块开始色彩挑战",
    "Open community page": "打开社区页面",
    "Open community post detail list": "打开社区帖子详情列表",
    "Open to view options": "点击查看选项",
    "Tap to jump into a random colour challenge question.": "用一道题检验你的色彩理解。",
    "Test module": "测验模块",
    "Test": "测验",
    "Unit": "单元",
    "Learning": "学习",
    "Key section": "关键章节",
    "Learning Module · Interactive · Colour Models": "学习模块 · 交互式 · 色彩模型",
    "What is Colour Encoding?": "什么是色彩编码？",
    "Key Notes": "关键要点",
    "Explore how colour information is represented and used across devices and media.": "了解色彩信息如何在不同设备与媒体中被表示和应用。",
    "Overview · Colour Encoding Overview": "概览 · 色彩编码概览",
    "Key Points": "关键知识点",
    "Learning Module · Basic": "学习模块 · 基础",
    "Learning Module · Encoding Concepts": "学习模块 · 编码概念",
    "Learning Module · Advance Topics": "学习模块 · 进阶主题",
    "Interaction": "交互",
    "Relative Information": "相关信息",
    "Section": "章节",
    "Overview": "概览",
    "RGB Interactive Mixer": "RGB 交互调色器",
    "Adjust channels to preview digital colour output": "调节通道，预览数字色彩输出",
    "HSV Interactive Mixer": "HSV 交互调色器",
    "Drag hue, saturation, and value to explore colour behavior": "拖动色相、饱和度和明度，探索色彩变化",
    "CMYK Interactive Mixer": "CMYK 交互调色器",
    "Adjust cyan, magenta, yellow, and key for print-style colour mixing": "调节青、品红、黄和黑，体验印刷式混色",
    "Current Colour": "当前颜色",
    "Colour": "颜色",
    "Red": "红色",
    "Orange": "橙色",
    "Yellow": "黄色",
    "Green": "绿色",
    "Cyan": "青色",
    "Blue": "蓝色",
    "Purple": "紫色",
    "Pink": "粉色",
    "Light Gray": "浅灰色",
    "Slate Gray": "石板灰",
    "Soft White": "柔白色",
    "Deep Black": "深黑色",
    "Light Red": "浅红色",
    "Light Orange": "浅橙色",
    "Light Yellow": "浅黄色",
    "Light Green": "浅绿色",
    "Light Cyan": "浅青色",
    "Light Blue": "浅蓝色",
    "Light Purple": "浅紫色",
    "Light Pink": "浅粉色",
    "Deep Red": "深红色",
    "Deep Orange": "深橙色",
    "Deep Yellow": "深黄色",
    "Deep Green": "深绿色",
    "Deep Cyan": "深青色",
    "Deep Blue": "深蓝色",
    "Deep Purple": "深紫色",
    "Deep Pink": "深粉色",
    "All-time Top Learners": "全站总榜学习者",
    "pts": "分",
    "Open Learn module interactive colour model": "打开学习模块交互色彩模型",
    "Open Learn module topic: ": "打开学习模块知识点：",
    "Open test question: ": "打开测试题：",
    "Open community post list, highlighted from @": "打开社区帖子列表，定位到 @",
    "Open community page leaderboard": "打开社区排行榜",
    "Share one colour insight, palette, or learning takeaway with peers in the community.": "在社区与同伴分享一个色彩洞察、配色方案或学习收获。"
  };

  function getHomeLocale() {
    if (window.CLWLocale && typeof window.CLWLocale.getLocale === "function") {
      return window.CLWLocale.getLocale() === "zh" ? "zh" : "en";
    }
    return "en";
  }

  function txWithScope(text, scope) {
    var source = String(text == null ? "" : text);
    if (window.CLWLocale && typeof window.CLWLocale.translate === "function") {
      return window.CLWLocale.translate(source, scope || "global");
    }
    return source;
  }

  function txHome(text) {
    var source = String(text == null ? "" : text);
    var translated = txWithScope(source, "global");
    if (translated !== source) return translated;
    if (getHomeLocale() === "zh" && Object.prototype.hasOwnProperty.call(HOME_ZH, source)) {
      return HOME_ZH[source];
    }
    return source;
  }

  function txTest(text) {
    var source = String(text == null ? "" : text);
    var translated = txWithScope(source, "test");
    if (translated !== source) return translated;
    return txHome(source);
  }

  function txGame(text) {
    var source = String(text == null ? "" : text);
    var translated = txWithScope(source, "game");
    if (translated !== source) return translated;
    return txHome(source);
  }

  function getLearningPagePath() {
    return getHomeLocale() === "zh" ? "learning-zh.html" : "learning.html";
  }

  function getHomeStartLearningHref() {
    return buildHomeLearnModuleHref(1);
  }

  function buildHomeLearnModuleHref(moduleIndex) {
    var defs = {
      1: { hash: "basic-color-models", titleEn: "Colour Models", titleZh: "色彩模型" },
      2: { hash: "encoding-bit-depth", titleEn: "Bit Depth and Colour Precision", titleZh: "位深度与色彩精度" },
      3: { hash: "advance-hdr-color", titleEn: "High Dynamic Range (HDR) Colour", titleZh: "高动态范围（HDR）色彩" },
      4: { hash: "interaction-color-picker", titleEn: "Interactive Colour Picker", titleZh: "Interactive Colour Picker" }
    };
    var def = defs[moduleIndex];
    if (!def) return getLearningPagePath() + "#overview";
    var focusTitle = getHomeLocale() === "zh" ? def.titleZh : def.titleEn;
    return (
      getLearningPagePath() +
      "?from=home-learn&focusScope=parent&focusParent=" + encodeURIComponent(focusTitle) +
      "#" + encodeURIComponent(def.hash)
    );
  }

  function setLocalizedText(el, baseText, scope) {
    if (!el) return;
    var base = String(baseText == null ? "" : baseText);
    el.setAttribute("data-home-i18n-base", base);
    if (scope) el.setAttribute("data-home-i18n-scope", scope);
    else el.removeAttribute("data-home-i18n-scope");
    el.textContent = scope === "test" ? txTest(base) : txHome(base);
  }

  function retranslateLocalizedNodes() {
    var nodes = document.querySelectorAll("[data-home-i18n-base]");
    nodes.forEach(function (el) {
      var base = el.getAttribute("data-home-i18n-base") || "";
      var scope = el.getAttribute("data-home-i18n-scope") || "";
      var translated = scope === "test" ? txTest(base) : txHome(base);
      if (el.classList && el.classList.contains("home-test__option-text")) {
        translated = clipWithEllipsis(translated, 72);
      }
      el.textContent = translated;
    });
  }

  function renderLocalizedGameTitle(el, drawingName) {
    if (!el) return;
    var name = String(drawingName == null ? "" : drawingName).trim();
    if (!name) {
      delete el.dataset.homeGameDrawingBase;
      setLocalizedText(el, "Start your colour challenge!");
      return;
    }
    el.dataset.homeGameDrawingBase = name;
    el.removeAttribute("data-home-i18n-base");
    el.removeAttribute("data-home-i18n-scope");
    el.textContent = txHome("Start your colour challenge: ") + txGame(name) + "!";
  }

  function applyHomepageLocaleChrome() {
    var locale = getHomeLocale();
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title = txHome("Home — Colour Learning");

    var taglineEl = document.querySelector(".home-hero__tagline");
    if (taglineEl) taglineEl.textContent = txHome("Explore the world of colours!");
    var sloganEl = document.querySelector(".home-hero__slogan");
    if (sloganEl) sloganEl.textContent = txHome("Learn colour through visuals, games, quizzes, and challenges.");
    var extraSloganEl = document.querySelector("[data-home-hero-extra-slogan]");
    if (extraSloganEl) {
      extraSloganEl.innerHTML =
        "<span>" + escapeHtmlText(txHome("Choose Your Colour Path")) + "</span>" +
        "<span>" + escapeHtmlText(txHome("Pick the way you want to explore colour today.")) + "</span>";
    }
    var quickLearnBtn = document.querySelector("[data-home-hero-learn]");
    if (quickLearnBtn) {
      setLocalizedText(quickLearnBtn, "Start Learning");
      quickLearnBtn.setAttribute("href", getHomeStartLearningHref());
    }
    var quickTestBtn = document.querySelector("[data-home-hero-test]");
    if (quickTestBtn) {
      setLocalizedText(quickTestBtn, "Try Challenge");
      quickTestBtn.setAttribute("href", "test-quiz.html?chapter=basics&level=easy&unit=unit-1&fresh=1&hq=0");
    }

    var learnTitleEl = document.querySelector("[data-home-learn-title]");
    if (learnTitleEl) learnTitleEl.textContent = txHome("Learn Colours the Smart Way");
    var learnSubEl = document.querySelector("[data-home-learn-sub]");
    if (learnSubEl) learnSubEl.textContent = txHome("Follow four guided modules from colour basics to interactive practice.");
    var learnModule1El = document.querySelector("[data-home-learn-module-1]");
    if (learnModule1El) learnModule1El.textContent = txHome("Module 1: Colour Basics");
    var learnModule2El = document.querySelector("[data-home-learn-module-2]");
    if (learnModule2El) learnModule2El.textContent = txHome("Module 2: Encoding Concepts");
    var learnModule3El = document.querySelector("[data-home-learn-module-3]");
    if (learnModule3El) learnModule3El.textContent = txHome("Module 3: Advanced Topics");
    var learnModule4El = document.querySelector("[data-home-learn-module-4]");
    if (learnModule4El) learnModule4El.textContent = txHome("Module 4: Interactive Practice");
    var learnModuleLink1 = document.querySelector('[data-home-learn-module-link="1"]');
    if (learnModuleLink1) learnModuleLink1.setAttribute("href", buildHomeLearnModuleHref(1));
    var learnModuleLink2 = document.querySelector('[data-home-learn-module-link="2"]');
    if (learnModuleLink2) learnModuleLink2.setAttribute("href", buildHomeLearnModuleHref(2));
    var learnModuleLink3 = document.querySelector('[data-home-learn-module-link="3"]');
    if (learnModuleLink3) learnModuleLink3.setAttribute("href", buildHomeLearnModuleHref(3));
    var learnModuleLink4 = document.querySelector('[data-home-learn-module-link="4"]');
    if (learnModuleLink4) learnModuleLink4.setAttribute("href", buildHomeLearnModuleHref(4));
    var learnRecommendPrefixEl = document.querySelector("[data-home-learn-recommend-prefix]");
    if (learnRecommendPrefixEl) learnRecommendPrefixEl.textContent = txHome("Recommended start:");
    var learnRecommendFocusLinkEl = document.querySelector("[data-home-learn-recommend-focus-link]");
    if (learnRecommendFocusLinkEl) {
      learnRecommendFocusLinkEl.textContent = txHome("Colour Basics");
      learnRecommendFocusLinkEl.setAttribute("href", buildHomeLearnModuleHref(1));
    }
    var learnStartBtn = document.querySelector("[data-home-learn-start]");
    if (learnStartBtn) {
      learnStartBtn.textContent = txHome("Start Learning");
      learnStartBtn.setAttribute("href", getHomeStartLearningHref());
    }

    var testTitleEl = document.querySelector(".home-card__text--test");
    if (testTitleEl) testTitleEl.textContent = txHome("Try Today’s Challenge!");
    var testSubEl = document.querySelector("[data-home-test-sub]");
    if (testSubEl) testSubEl.textContent = txHome("Check your understanding with quick quizzes, levels, and instant feedback.");
    var testFullQuizActionEl = document.querySelector("[data-home-test-full-quiz]");
    if (testFullQuizActionEl) testFullQuizActionEl.textContent = txHome("Take Full Quiz");
    var testResumeActionEl = document.querySelector("[data-home-test-resume]");
    if (testResumeActionEl) testResumeActionEl.textContent = txHome("Continue Last Quiz");
    var gameTitleEl = document.querySelector(".home-card__text--game");
    if (gameTitleEl) {
      var drawingBase = gameTitleEl.dataset.homeGameDrawingBase;
      if (drawingBase) renderLocalizedGameTitle(gameTitleEl, drawingBase);
      else if (!gameTitleEl.getAttribute("data-home-i18n-base")) setLocalizedText(gameTitleEl, "Start your colour challenge!");
    }
    var gameSubEl = document.querySelector("[data-home-game-sub]");
    if (gameSubEl) gameSubEl.textContent = txHome("Turn a blank drawing into a colour challenge using palettes, harmony rules, and creative choices.");
    var gameGuideTitleEl = document.querySelector("[data-home-game-guide-title]");
    if (gameGuideTitleEl) gameGuideTitleEl.textContent = txHome("How to play");
    var gameGuideStep1El = document.querySelector("[data-home-game-guide-step-1]");
    if (gameGuideStep1El) gameGuideStep1El.textContent = txHome("1 Pick a palette");
    var gameGuideStep2El = document.querySelector("[data-home-game-guide-step-2]");
    if (gameGuideStep2El) gameGuideStep2El.textContent = txHome("2 Fill the shapes");
    var gameGuideStep3El = document.querySelector("[data-home-game-guide-step-3]");
    if (gameGuideStep3El) gameGuideStep3El.textContent = txHome("3 Check harmony");
    var gameCtaEl = document.querySelector(".home-game__cta");
    if (gameCtaEl) gameCtaEl.textContent = txHome("Start challenge");
    var communityTitleEl = document.querySelector("[data-home-community-title]");
    if (communityTitleEl) communityTitleEl.textContent = txHome("👥 Join the Colour Community");
    var communitySubEl = document.querySelector("[data-home-community-sub]");
    if (communitySubEl) communitySubEl.textContent = txHome("Share progress, earn points, and learn together with other colour explorers.");
    var communityEnterBtn = document.querySelector("[data-home-community-enter]");
    if (communityEnterBtn) communityEnterBtn.textContent = txHome("Enter Community");
    var linkTitleToolsEl = document.querySelector("[data-home-link-title-tools]");
    if (linkTitleToolsEl) linkTitleToolsEl.textContent = txHome("Tools");
    var linkLearnEl = document.querySelector("[data-home-link-learn]");
    if (linkLearnEl) linkLearnEl.textContent = txHome("Learning");
    var linkTestEl = document.querySelector("[data-home-link-test]");
    if (linkTestEl) linkTestEl.textContent = txHome("Testing");
    var linkGameEl = document.querySelector("[data-home-link-game]");
    if (linkGameEl) linkGameEl.textContent = txHome("Game");
    var linkCommunityEl = document.querySelector("[data-home-link-community]");
    if (linkCommunityEl) linkCommunityEl.textContent = txHome("Community");
    var linkTitleProjectEl = document.querySelector("[data-home-link-title-project]");
    if (linkTitleProjectEl) linkTitleProjectEl.textContent = txHome("Project");
    var linkProjectIntroEl = document.querySelector("[data-home-link-project-intro]");
    if (linkProjectIntroEl) {
      linkProjectIntroEl.textContent = txHome("Project Introduction");
      linkProjectIntroEl.setAttribute("href", "project-introduction.html?lang=" + (locale === "zh" ? "zh" : "en"));
    }
    var linkPrivacyEl = document.querySelector("[data-home-link-privacy]");
    if (linkPrivacyEl) {
      linkPrivacyEl.textContent = txHome("Privacy & Data Policy");
      linkPrivacyEl.setAttribute("href", "privacy-policy.html?lang=" + (locale === "zh" ? "zh" : "en"));
    }
    var linkContactEl = document.querySelector("[data-home-link-contact]");
    if (linkContactEl) {
      linkContactEl.textContent = txHome("Contact Team");
      linkContactEl.setAttribute("href", "contact-team.html?lang=" + (locale === "zh" ? "zh" : "en"));
    }
    var communityNoticeEl = document.querySelector("[data-home-community-notice-link]");
    if (communityNoticeEl) communityNoticeEl.textContent = txHome("New community post +1");

    var testLinkEl = document.querySelector("[data-home-test-link]");
    if (testLinkEl) testLinkEl.setAttribute("aria-label", txHome("Open random test question"));
    var gameLinkEl = document.querySelector("[data-home-game-link]");
    if (gameLinkEl) gameLinkEl.setAttribute("aria-label", txHome("Start your colour challenge in Game"));
    if (communityNoticeEl) communityNoticeEl.setAttribute("aria-label", txHome("Open community page"));
    var communityPostLinkEl = document.querySelector("[data-home-community-post-link]");
    if (communityPostLinkEl) {
      communityPostLinkEl.setAttribute("aria-label", txHome("Open community post detail list"));
    }

    retranslateLocalizedNodes();
    var modelLabel = document.querySelector(".home-learn-model__name-label");
    if (modelLabel) modelLabel.textContent = txHome("Current Colour");

    var leaderboardTitle = document.querySelector(".home-community__leaderboard-title");
    if (leaderboardTitle) leaderboardTitle.textContent = txHome("All-time Top Learners");
    var pointNodes = document.querySelectorAll(".home-community__leaderboard-points");
    pointNodes.forEach(function (node) {
      node.textContent = String(node.textContent || "").replace(/\bpts\b/g, txHome("pts"));
    });
  }

  var MODE_STORAGE_KEY = "clw_theme_mode";
  var WHEEL_COLOR_STORAGE_KEY = "clw_theme_wheel_color";
  var HOME_GAME_PICK_INDEX_KEY = "clw_home_game_pick_index";
  var HOME_TEST_PICK_INDEX_KEY = "clw_home_test_pick_index";
  var HOME_TEST_RESUME_LOCK_KEY = "clw_home_test_resume_lock_v1";
  var HOME_LEARN_PICK_INDEX_KEY = "clw_home_learn_pick_index";
  var HOME_LEARN_VIEW_MODE_KEY = "clw_home_learn_view_mode";
  var HOME_LEARN_MODEL_PICK_INDEX_KEY = "clw_home_learn_model_pick_index";
  var HOME_COMMUNITY_PICK_INDEX_KEY = "clw_home_community_pick_index";
  var COMMUNITY_ACTIVITY_LOG_KEY = "clw_activity_log_v1";
  var COMMUNITY_ACCOUNTS_KEY = "clw_accounts_v1";
  function getCommunityCloudApi() {
    return window.CLWCommunityCloud || null;
  }
  var AUTH_USER_KEY = "clw_current_user";
  var HOME_COMMUNITY_ROTATE_MS = 6800;
  var HOME_COMMUNITY_SWITCH_OUT_MS = 230;
  var HOME_COMMUNITY_SWITCH_IN_MS = 320;

  function isGuestUser() {
    try {
      var raw = localStorage.getItem(AUTH_USER_KEY);
      if (!raw) return true;
      var parsed = JSON.parse(raw);
      return !(parsed && typeof parsed.username === "string" && parsed.username.trim());
    } catch (e) {
      return true;
    }
  }

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
    var guest = isGuestUser();
    try {
      var value = guest ? sessionStorage.getItem(key) : localStorage.getItem(key);
      return value || fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeStoredValue(key, value) {
    var guest = isGuestUser();
    try {
      if (guest) {
        sessionStorage.setItem(key, value);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      /* ignore */
    }
  }

  function readSessionValue(key) {
    try {
      return sessionStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function writeSessionValue(key, value) {
    try {
      sessionStorage.setItem(key, value);
    } catch (e) {
      /* ignore */
    }
  }

  function pickStableSessionIndex(key, maxCount) {
    if (!(maxCount > 0)) return -1;
    var raw = readSessionValue(key);
    if (/^\d+$/.test(raw || "")) {
      var stored = Number(raw);
      if (stored >= 0 && stored < maxCount) return stored;
    }
    var picked = Math.floor(Math.random() * maxCount);
    writeSessionValue(key, String(picked));
    return picked;
  }

  function toPlainText(html) {
    var holder = document.createElement("div");
    holder.innerHTML = String(html || "");
    return (holder.textContent || holder.innerText || "").replace(/\s+/g, " ").trim();
  }

  function clipWithEllipsis(text, maxLength) {
    var source = String(text || "").trim();
    if (!source) return "";
    if (source.length <= maxLength) return source;
    return source.slice(0, maxLength).trimEnd() + "...";
  }

  function sanitizeLearnPreviewHtml(rawHtml) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = String(rawHtml || "");
    var allowedTags = {
      p: true,
      h3: true,
      ul: true,
      ol: true,
      li: true,
      strong: true,
      em: true,
      a: true,
      br: true,
      span: true
    };

    function cleanNode(node) {
      if (!node || node.nodeType !== 1) return;
      var children = Array.from(node.children || []);
      children.forEach(cleanNode);

      var tagName = String(node.tagName || "").toLowerCase();
      if (!allowedTags[tagName]) {
        var parent = node.parentNode;
        if (!parent) return;
        while (node.firstChild) {
          parent.insertBefore(node.firstChild, node);
        }
        parent.removeChild(node);
        return;
      }

      Array.from(node.attributes || []).forEach(function (attr) {
        var name = String(attr.name || "").toLowerCase();
        var value = String(attr.value || "");
        if (name === "href" && tagName === "a" && (/^https?:\/\//i.test(value) || value.startsWith("#"))) return;
        node.removeAttribute(attr.name);
      });

      if (tagName === "a") {
        node.setAttribute("target", "_self");
      }
    }

    Array.from(wrapper.children).forEach(cleanNode);
    return wrapper.innerHTML.trim();
  }

  function buildLearnPreviewHtml(rawHtml, topicHeading) {
    var sanitized = sanitizeLearnPreviewHtml(rawHtml);
    if (!sanitized) return "";
    var holder = document.createElement("div");
    holder.innerHTML = sanitized;
    var blocks = Array.from(holder.querySelectorAll("h3, p, ul, ol"))
      .map(function (node) {
        var text = toPlainText(node.textContent || "");
        if (!text) return null;
        return { html: node.outerHTML, text: text, tag: String(node.tagName || "").toLowerCase() };
      })
      .filter(function (item) { return !!(item && item.text); });

    if (!blocks.length) {
      var flatText = toPlainText(sanitized);
      return flatText ? "<p>" + escapeHtmlText(clipWithEllipsis(flatText, 320)) + "</p>" : "";
    }

    var groups = [];
    var currentGroup = [];
    blocks.forEach(function (block) {
      if (block.tag === "h3") {
        if (currentGroup.length) groups.push(currentGroup.slice());
        currentGroup = [block];
        return;
      }
      if (!currentGroup.length) currentGroup = [block];
      else currentGroup.push(block);
    });
    if (currentGroup.length) groups.push(currentGroup.slice());

    var topicText = toPlainText(topicHeading || "");
    if (
      topicText &&
      groups.length &&
      groups[0].length &&
      groups[0][0].tag === "h3" &&
      toPlainText(groups[0][0].text) === topicText
    ) {
      groups[0].shift();
      if (!groups[0].length) groups.shift();
    }

    groups = groups.filter(function (group) {
      if (!Array.isArray(group) || !group.length) return false;
      if (group.length === 1 && group[0].tag === "h3") return false;
      return true;
    });

    if (!groups.length) {
      var fallbackText = toPlainText(sanitized);
      return fallbackText ? "<p>" + escapeHtmlText(clipWithEllipsis(fallbackText, 320)) + "</p>" : "";
    }

    var pickedGroups = [];
    var textBudget = 520;
    for (var i = 0; i < groups.length; i += 1) {
      var group = groups[i];
      var groupTextLength = group.reduce(function (sum, item) {
        return sum + String(item.text || "").length;
      }, 0);
      if (pickedGroups.length >= 3) break;
      if (textBudget <= 0 && pickedGroups.length >= 2) break;
      textBudget -= groupTextLength;
      pickedGroups.push(group);
    }
    return pickedGroups
      .map(function (group) {
        return group.map(function (item) { return item.html; }).join("");
      })
      .join("");
  }

  function hasInteractiveWidgetContent(rawHtml) {
    var source = String(rawHtml || "");
    if (!source.trim()) return false;
    var probe = document.createElement("div");
    probe.innerHTML = source;
    if (probe.querySelector("input, button, select, textarea, canvas, svg, iframe, video, audio, meter, progress")) {
      return true;
    }
    var lowered = source.toLowerCase();
    return (
      lowered.indexOf("color-picker") >= 0 ||
      lowered.indexOf("palette-strip") >= 0 ||
      lowered.indexOf("action-buttons") >= 0 ||
      lowered.indexOf("module-cards") >= 0 ||
      lowered.indexOf("learning-paths") >= 0 ||
      lowered.indexOf("btn btn-") >= 0
    );
  }

  function hasUnsupportedLearnComponents(rawHtml) {
    var source = String(rawHtml || "");
    if (!source.trim()) return false;
    var probe = document.createElement("div");
    probe.innerHTML = source;

    var selector = [
      ".module-cards",
      ".module-card",
      ".learning-paths",
      ".path-card",
      ".path-steps",
      ".next-steps",
      ".action-buttons",
      ".info-box",
      ".content-figure",
      ".code-block",
      ".comparison-table-wrapper",
      ".comparison-table",
      ".usage-guide",
      ".usage-item",
      ".usage-list",
      ".pros-cons",
      ".pros-cons__item",
      ".tech-specs",
      ".spec-row",
      ".settings-grid",
      ".settings-table",
      ".workflow-grid",
      ".workflow-card",
      ".workflow-step",
      ".tip-box",
      "table",
      "figure",
      "canvas",
      "svg",
      "iframe",
      "video",
      "audio"
    ].join(",");
    if (probe.querySelector(selector)) return true;

    var classNodes = Array.from(probe.querySelectorAll("[class]"));
    return classNodes.some(function (node) {
      var className = String(node.className || "").toLowerCase();
      return /(card|grid|table|workflow|figure|spec|usage|tip-box|next-steps|action-buttons|path-steps|pros-cons|module-cards)/.test(className);
    });
  }

  function getLearnPreviewTextLength(previewHtml) {
    return toPlainText(previewHtml || "").length;
  }

  function buildHomeLearnSummary(rawHtml, heading, location) {
    var sanitized = sanitizeLearnPreviewHtml(rawHtml);
    var holder = document.createElement("div");
    holder.innerHTML = sanitized;
    var mainTitle = String(heading || "").trim() || "Key Points";
    var COMPONENT_BLOCK_SELECTOR = [
      ".module-cards",
      ".module-card",
      ".learning-paths",
      ".path-card",
      ".next-steps",
      ".action-buttons",
      ".comparison-table",
      ".pros-cons",
      ".pros-cons__item",
      ".tech-specs",
      ".spec-row",
      ".calibration-table",
      ".settings-grid",
      ".settings-table",
      ".interactive-tools",
      ".tool-grid",
      ".widget",
      "table",
      "figure",
      "canvas",
      "svg",
      "iframe",
      "video",
      "audio"
    ].join(",");
    var componentFound = false;

    function blockText(block) {
      return toPlainText(block && block.textContent ? block.textContent : "");
    }

    function blockTag(block) {
      return String(block && block.tagName ? block.tagName : "").toLowerCase();
    }

    function isHeadingLikeParagraph(block) {
      if (blockTag(block) !== "p") return false;
      var text = blockText(block);
      if (!text || text.length > 96) return false;

      var className = String(block.className || "").toLowerCase();
      if (/(section[-_ ]heading|sub[-_ ]title|module[-_ ]title|heading|subtitle)/i.test(className)) return true;
      if (/[:：]\s*$/.test(text) && text.length <= 72) return true;
      if (/^[A-Z][A-Za-z0-9/&\-\s()]{3,72}$/.test(text) && !/[.!?。！？]$/.test(text)) return true;

      var strong = block.querySelector("strong, b");
      if (strong) {
        var strongText = toPlainText(strong.textContent || "");
        if (strongText && strongText.length >= text.length * 0.72) {
          return /[:：]?$/.test(strongText) || text.split(" ").length <= 10;
        }
      }
      return false;
    }

    function getHeadingLevel(block) {
      var tag = blockTag(block);
      if (tag === "h3") return 1;
      if (tag === "h4") return 2;
      if (!isHeadingLikeParagraph(block)) return 0;
      var className = String(block.className || "").toLowerCase();
      if (/(sub[-_ ]title|minor[-_ ]heading|h4)/i.test(className)) return 2;
      return 1;
    }

    function blockToHtml(block, maxLen) {
      var tag = blockTag(block);
      if (!tag) return "";
      if (tag === "ul" || tag === "ol") {
        var listItems = Array.from(block.querySelectorAll(":scope > li"))
          .map(function (li) { return toPlainText(li.textContent || ""); })
          .filter(function (text) { return !!text; })
          .slice(0, 5);
        if (!listItems.length) return "";
        return "<ul>" + listItems.map(function (text) {
          return "<li>" + escapeHtmlText(clipWithEllipsis(text, 116)) + "</li>";
        }).join("") + "</ul>";
      }
      if (tag === "p") {
        var plain = clipWithEllipsis(blockText(block), maxLen || 230);
        return plain ? "<p>" + escapeHtmlText(plain) + "</p>" : "";
      }
      return "";
    }

    function isRenderableContentNode(node) {
      var tag = blockTag(node);
      if (!(tag === "p" || tag === "ul" || tag === "ol")) return false;
      if (tag === "p" && node.closest("li")) return false;
      if (tag === "p" && isHeadingLikeParagraph(node)) return false;
      if (node.closest(COMPONENT_BLOCK_SELECTOR)) return false;
      return true;
    }

    function isComponentMarker(node) {
      var matched = !!(node && node.matches && node.matches(COMPONENT_BLOCK_SELECTOR));
      if (matched) componentFound = true;
      return matched;
    }

    // Scan in DOM order and keep component markers as hard boundaries.
    var blocks = Array.from(holder.querySelectorAll("h3, h4, p, ul, ol, " + COMPONENT_BLOCK_SELECTOR));
    var sections = [];
    var currentL1 = null;
    var currentL2 = null;
    var l1BlockedByComponent = false;
    var l2BlockedByComponent = false;
    var prefaceBlocks = [];
    blocks.forEach(function (node) {
      if (isComponentMarker(node)) {
        if (currentL2) {
          currentL2.blockedByComponent = true;
          l2BlockedByComponent = true;
          if (currentL1) currentL1.blockedByComponent = true;
          l1BlockedByComponent = true;
          return;
        }
        if (currentL1) {
          currentL1.blockedByComponent = true;
          l1BlockedByComponent = true;
          currentL2 = null;
          l2BlockedByComponent = false;
          return;
        }
        return;
      }

      var level = getHeadingLevel(node);
      if (currentL1 && l1BlockedByComponent && level !== 1) {
        // Once a component appears in this h3 branch, ignore all deeper nodes
        // until next top-level subtitle.
        return;
      }
      if (level === 1) {
        currentL1 = { title: blockText(node), blocks: [], children: [], blockedByComponent: false };
        sections.push(currentL1);
        currentL2 = null;
        l1BlockedByComponent = false;
        l2BlockedByComponent = false;
        return;
      }
      if (level === 2) {
        if (!currentL1) {
          currentL1 = { title: "Key Notes", blocks: [], children: [], blockedByComponent: false };
          sections.push(currentL1);
          l1BlockedByComponent = false;
        }
        currentL2 = { title: blockText(node), blocks: [], blockedByComponent: false };
        currentL1.children.push(currentL2);
        l2BlockedByComponent = false;
        return;
      }
      if (!isRenderableContentNode(node)) return;
      if (currentL2) {
        if (l2BlockedByComponent) return;
        currentL2.blocks.push(node);
        return;
      }
      if (currentL1) {
        if (l1BlockedByComponent) return;
        currentL1.blocks.push(node);
        return;
      }
      prefaceBlocks.push(node);
    });

    function hasRenderableBlocks(blockList) {
      if (!Array.isArray(blockList) || !blockList.length) return false;
      return blockList.some(function (block) { return !!blockToHtml(block, 230); });
    }

    function renderBlocks(blockList, maxBlocks, textBudget, maxLen) {
      var out = [];
      var budget = textBudget;
      for (var i = 0; i < blockList.length; i += 1) {
        var html = blockToHtml(blockList[i], maxLen || 230);
        if (!html) continue;
        if (out.length >= (maxBlocks || 3)) break;
        if (budget <= 0 && out.length >= 2) break;
        out.push(html);
        budget -= blockText(blockList[i]).length;
      }
      return out;
    }

    var chosenL1 = sections.find(function (section) {
      if (!section || !section.title) return false;
      if (hasRenderableBlocks(section.blocks)) return true;
      return Array.isArray(section.children) && section.children.some(function (child) {
        return child && child.title && hasRenderableBlocks(child.blocks);
      });
    }) || null;
    var previewHtml = "";
    var subtitle = "Key Notes";
    var anchorText = "";

    if (chosenL1) {
      subtitle = clipWithEllipsis(chosenL1.title, 96) || "Key Notes";
      var chosenL2 = (chosenL1.children || []).find(function (child) {
        return child && child.title && hasRenderableBlocks(child.blocks);
      }) || null;

      if (chosenL2) {
        var l2Title = clipWithEllipsis(chosenL2.title, 96);
        var l2Body = renderBlocks(chosenL2.blocks, 3, 420, 220);
        previewHtml =
          "<h3>" + escapeHtmlText(subtitle) + "</h3>" +
          "<h4>" + escapeHtmlText(l2Title) + "</h4>" +
          l2Body.join("");
        anchorText = l2Title || subtitle;
      } else {
        var l1Body = renderBlocks(chosenL1.blocks, 3, 430, 230);
        previewHtml = "<h3>" + escapeHtmlText(subtitle) + "</h3>" + l1Body.join("");
        anchorText = subtitle;
      }
    } else {
      var fallbackBlocks = [];
      fallbackBlocks = renderBlocks(prefaceBlocks, 3, 430, 240);
      if (!fallbackBlocks.length) {
        var fallbackText = clipWithEllipsis(toPlainText(sanitized), 240);
        fallbackBlocks = fallbackText ? ["<p>" + escapeHtmlText(fallbackText) + "</p>"] : [];
      }
      previewHtml = "<h3>" + escapeHtmlText(subtitle) + "</h3>" + fallbackBlocks.join("");
      anchorText = subtitle;
    }

    var locationText = String(location || "");
    var locationParts = locationText.split(" · ");
    return {
      title: mainTitle,
      subtitle: subtitle,
      anchorText: anchorText || subtitle,
      previewHtml: previewHtml,
      containsUnsupportedComponent: componentFound,
      category: txHome(locationParts[0] || "Learning"),
      path: txHome(locationParts.slice(1).join(" · ") || "Key section")
    };
  }

  function parseLearnContentData(source) {
    var normalized = String(source || "").replace(/^\s*export\s+const\s+contentData\s*=\s*/, "return ");
    if (!/^return\s+/.test(normalized)) throw new Error("Missing contentData export");
    return new Function(normalized)();
  }

  function readStoredJson(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return fallback;
      var parsed = JSON.parse(raw);
      return parsed == null ? fallback : parsed;
    } catch (e) {
      return fallback;
    }
  }

  function getLearnSectionLocation(sectionKey, sectionTitle) {
    var key = String(sectionKey || "");
    var branch = "Learning";
    if (key === "overview") branch = "Overview";
    else if (key.indexOf("basic-") === 0) branch = "Learning Module · Basic";
    else if (key.indexOf("encoding-") === 0) branch = "Learning Module · Encoding Concepts";
    else if (key.indexOf("advance-") === 0) branch = "Learning Module · Advance Topics";
    else if (key.indexOf("interaction-") === 0) branch = "Interaction";
    else if (key === "relative-information") branch = "Relative Information";
    return txHome(branch) + " · " + txHome(String(sectionTitle || "Section"));
  }

  function loadLearnTopicCatalog() {
    var sourcePath = getHomeLocale() === "zh" ? "js/pages/learn-zh/learning-content.js" : "js/pages/learn/learning-content.js";
    return fetch(sourcePath)
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load learning content");
        return res.text();
      })
      .then(function (source) {
        var catalog = [];
        var data = parseLearnContentData(source);
        Object.keys(data || {}).forEach(function (sectionKey) {
          var section = data[sectionKey];
          if (!section || !Array.isArray(section.sections)) return;
          var sectionTitle = section.title ? String(section.title) : "Section";
          var sectionLocation = getLearnSectionLocation(sectionKey, sectionTitle);
          section.sections.forEach(function (entry) {
            var heading = String(entry && entry.heading ? entry.heading : "").trim();
            var entryHtml = entry && entry.content ? entry.content : "";
            if (hasInteractiveWidgetContent(entryHtml)) return;
            if (hasUnsupportedLearnComponents(entryHtml)) return;
            var previewHtml = buildLearnPreviewHtml(entryHtml, heading);
            if (getLearnPreviewTextLength(previewHtml) < 90) return;
            if (!heading || !previewHtml) return;
            var summary = buildHomeLearnSummary(entryHtml, heading, sectionLocation);
            if (!summary || !summary.title || !summary.previewHtml) return;
            if (summary.containsUnsupportedComponent) return;
            catalog.push({
              sectionKey: sectionKey,
              sectionTitle: sectionTitle,
              location: sectionLocation,
              heading: heading,
              previewHtml: previewHtml,
              summary: summary
            });
          });
        });
        return catalog;
      });
  }

  function setupHomeLearnSpotlight() {
    var cardEl = document.querySelector(".home-card--learn-spotlight");
    if (!cardEl) return;
    var titleEl = cardEl.querySelector("[data-home-learn-title]");
    var subEl = cardEl.querySelector("[data-home-learn-sub]");
    var module1El = cardEl.querySelector("[data-home-learn-module-1]");
    var module2El = cardEl.querySelector("[data-home-learn-module-2]");
    var module3El = cardEl.querySelector("[data-home-learn-module-3]");
    var module4El = cardEl.querySelector("[data-home-learn-module-4]");
    if (titleEl) titleEl.textContent = txHome("Learn Colours the Smart Way");
    if (subEl) subEl.textContent = txHome("Follow four guided modules from colour basics to interactive practice.");
    if (module1El) module1El.textContent = txHome("Module 1: Colour Basics");
    if (module2El) module2El.textContent = txHome("Module 2: Encoding Concepts");
    if (module3El) module3El.textContent = txHome("Module 3: Advanced Topics");
    if (module4El) module4El.textContent = txHome("Module 4: Interactive Practice");
  }

  function extractCommunitySeedPosts(source) {
    var markerMatch = source.match(/var\s+seedPosts\s*=\s*/);
    if (!markerMatch) return [];
    var markerIndex = markerMatch.index + markerMatch[0].length;
    var expressionStart = source.indexOf("[", markerIndex);
    if (expressionStart < 0) return [];
    var depth = 0;
    var expressionEnd = -1;
    for (var i = expressionStart; i < source.length; i += 1) {
      var ch = source[i];
      if (ch === "[") depth += 1;
      if (ch === "]") {
        depth -= 1;
        if (depth === 0) {
          expressionEnd = i + 1;
          break;
        }
      }
    }
    if (expressionEnd < 0) return [];
    var expression = source.slice(expressionStart, expressionEnd).trim();
    try {
      var parsed = new Function("return " + expression + ";")();
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function isHiddenPublicCommunityUser(username) {
    var normalized = String(username || "").trim().toLowerCase();
    return normalized === "studenta" || normalized === "studentb" || normalized === "studentc";
  }

  function normalizeCommunityPost(post) {
    if (!post || typeof post !== "object") return null;
    var content = clipWithEllipsis(toPlainText(post.content || ""), 190);
    if (!content) return null;
    var author = post.author ? String(post.author).trim() : "Guest";
    if (isHiddenPublicCommunityUser(author)) return null;
    var tag = post.tag ? String(post.tag).trim() : "#Community";
    return {
      id: post.id ? String(post.id).trim() : "",
      author: author || "Guest",
      tag: tag || "#Community",
      content: content
    };
  }

  function loadCommunityPostCatalog() {
    var cloud = getCommunityCloudApi();
    if (cloud && cloud.isConfigured && cloud.isConfigured() && cloud.listPosts) {
      return cloud.listPosts().then(function (result) {
        if (result && result.error) throw result.error;
        var rows = Array.isArray(result && result.data) ? result.data : [];
        rows = rows.map(normalizeCommunityPost).filter(function (item) { return !!item; });
        if (rows.length) return rows;
        return fetch("js/pages/community.js")
          .then(function (res) {
            if (!res.ok) throw new Error("Failed to load community module");
            return res.text();
          })
          .then(function (source) {
            return extractCommunitySeedPosts(source)
              .map(normalizeCommunityPost)
              .filter(function (item) { return !!item; });
          });
      });
    }
    var saved = readStoredJson("clw_posts_v3", null);
    if (!Array.isArray(saved) || !saved.length) saved = readStoredJson("clw_posts_v2", null);
    if (!Array.isArray(saved) || !saved.length) saved = readStoredJson("clw_posts_v1", null);
    if (Array.isArray(saved) && saved.length) {
      return Promise.resolve(
        saved
          .map(normalizeCommunityPost)
          .filter(function (item) { return !!item; })
      );
    }
    return fetch("js/pages/community.js")
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load community module");
        return res.text();
      })
      .then(function (source) {
        return extractCommunitySeedPosts(source)
          .map(normalizeCommunityPost)
          .filter(function (item) { return !!item; });
      });
  }

  function buildHomeCommunityLeaderboardRows(limit) {
    var rowsLimit = Math.max(1, Number(limit) || 4);
    var pointsMap = {};
    var cloud = getCommunityCloudApi();
    if (cloud && cloud.isConfigured && cloud.isConfigured() && cloud.listActivity) {
      return cloud.listActivity(1000).then(function (result) {
        if (result && result.error) throw result.error;
        var rows = Array.isArray(result && result.data) ? result.data : [];
        rows.forEach(function (item) {
          if (!item || typeof item !== "object") return;
          var username = item.username ? String(item.username).trim() : "";
          if (!username) return;
          if (isHiddenPublicCommunityUser(username)) return;
          var delta = Number(item.pointsDelta || 0);
          if (Number.isNaN(delta)) return;
          pointsMap[username] = Number(pointsMap[username] || 0) + delta;
        });
        return Object.keys(pointsMap)
          .map(function (username) {
            return { username: username, points: Math.max(0, Math.round(Number(pointsMap[username] || 0))) };
          })
          .filter(function (row) { return !!row.username; })
          .sort(function (a, b) {
            if (b.points !== a.points) return b.points - a.points;
            return String(a.username).localeCompare(String(b.username));
          })
          .slice(0, rowsLimit);
      });
    }

    var activityRows = readStoredJson(COMMUNITY_ACTIVITY_LOG_KEY, []);
    if (Array.isArray(activityRows)) {
      activityRows.forEach(function (item) {
        if (!item || typeof item !== "object") return;
        if (item.source !== "community") return;
        var username = item.username ? String(item.username).trim() : "";
        if (!username) return;
        if (isHiddenPublicCommunityUser(username)) return;
        var delta = Number(item.pointsDelta || 0);
        if (Number.isNaN(delta)) return;
        pointsMap[username] = Number(pointsMap[username] || 0) + delta;
      });
    }

    var accountsStore = readStoredJson(COMMUNITY_ACCOUNTS_KEY, { users: {} });
    var users = accountsStore && accountsStore.users && typeof accountsStore.users === "object" ? accountsStore.users : {};
    Object.keys(users).forEach(function (username) {
      if (isHiddenPublicCommunityUser(username)) return;
      var points = Number(users[username] && users[username].stats ? users[username].stats.points || 0 : 0);
      if (Number.isNaN(points)) points = 0;
      pointsMap[username] = Number(pointsMap[username] || 0) + points;
    });

    return Promise.resolve(Object.keys(pointsMap)
      .map(function (username) {
        return { username: username, points: Math.max(0, Math.round(Number(pointsMap[username] || 0))) };
      })
      .filter(function (row) { return !!row.username; })
      .sort(function (a, b) {
        if (b.points !== a.points) return b.points - a.points;
        return String(a.username).localeCompare(String(b.username));
      })
      .slice(0, rowsLimit));
  }

  function setupHomeCommunitySpotlight() {
    var cardEl = document.querySelector(".home-card--community-spotlight");
    var noticeLinkEl = document.querySelector("[data-home-community-notice-link]");
    var postLinkEl = document.querySelector("[data-home-community-post-link]");
    var titleEl = document.querySelector("[data-home-community-title]");
    var carouselEl = postLinkEl ? postLinkEl.querySelector("[data-home-community-carousel]") : null;
    if (!cardEl || !noticeLinkEl || !postLinkEl || !titleEl || !carouselEl) return;
    var slotTopEl = carouselEl.querySelector('[data-home-community-slot="top"]');
    var slotCenterEl = carouselEl.querySelector('[data-home-community-slot="center"]');
    var slotBottomEl = carouselEl.querySelector('[data-home-community-slot="bottom"]');
    if (!slotTopEl || !slotCenterEl || !slotBottomEl) return;

    if (cardEl._clwCommunityRotateTimer) {
      window.clearInterval(cardEl._clwCommunityRotateTimer);
      cardEl._clwCommunityRotateTimer = 0;
    }

    function buildCommunityPostHtml(item) {
      var author = item && item.author ? String(item.author) : "user";
      var initial = author.charAt(0) ? author.charAt(0).toUpperCase() : "U";
      var tag = item && item.tag ? String(item.tag) : "#Community";
      var content = item && item.content ? String(item.content) : txHome("Loading a community post...");
      return (
        '<header class="home-community__head">' +
        '<span class="home-community__avatar" aria-hidden="true">' + escapeHtmlText(initial) + "</span>" +
        '<span class="home-community__author">@' + escapeHtmlText(author) + "</span>" +
        "</header>" +
        '<p class="home-community__tag">' + escapeHtmlText(tag) + "</p>" +
        '<p class="home-community__post">' + escapeHtmlText(content) + "</p>"
      );
    }

    function buildCommunityLeaderboardHtml(rows) {
      var list = Array.isArray(rows) ? rows : [];
      return (
        '<section class="home-community__leaderboard" aria-label="Community leaderboard preview">' +
        '<h4 class="home-community__leaderboard-title">' + escapeHtmlText(txHome("All-time Top Learners")) + "</h4>" +
        '<ol class="home-community__leaderboard-list">' +
        list
          .map(function (row, index) {
            return (
              '<li class="home-community__leaderboard-item">' +
              '<span class="home-community__leaderboard-rank">' + String(index + 1) + "</span>" +
              '<span class="home-community__leaderboard-name">@' + escapeHtmlText(row.username) + "</span>" +
              '<strong class="home-community__leaderboard-points">' + String(row.points) + " " + escapeHtmlText(txHome("pts")) + "</strong>" +
              "</li>"
            );
          })
          .join("") +
        "</ol>" +
        "</section>"
      );
    }

    function renderSlot(slotEl, item) {
      if (!slotEl || !item) return;
      if (item.type === "leaderboard") {
        slotEl.innerHTML = buildCommunityLeaderboardHtml(item.rows);
      } else {
        slotEl.innerHTML = buildCommunityPostHtml(item);
      }
      slotEl.classList.toggle("home-community__bubble--leaderboard", item.type === "leaderboard");
    }

    function applyCenterLink(item) {
      if (!item) return;
      if (item.type === "leaderboard") {
        postLinkEl.setAttribute("aria-label", txHome("Open community page leaderboard"));
        postLinkEl.href = "community.html?from=home-community&focus=leaderboard#alltime-title";
        return;
      }
      var author = item.author ? String(item.author) : "user";
      postLinkEl.setAttribute("aria-label", txHome("Open community post list, highlighted from @") + author);
      var postHref = "community-posts.html?from=home-community";
      if (item.id) postHref += "&postId=" + encodeURIComponent(item.id);
      postLinkEl.href = postHref;
    }

    function buildImmediateItems() {
      var items = [];
      var saved = readStoredJson("clw_posts_v3", null);
      if (!Array.isArray(saved) || !saved.length) saved = readStoredJson("clw_posts_v2", null);
      if (!Array.isArray(saved) || !saved.length) saved = readStoredJson("clw_posts_v1", null);
      if (Array.isArray(saved) && saved.length) {
        items = saved
          .map(normalizeCommunityPost)
          .filter(function (item) { return !!item; });
      }
      return items.slice(0, 6);
    }

    titleEl.textContent = txHome("👥 Join the Colour Community");
    noticeLinkEl.href = "community.html";
    postLinkEl.href = "community-posts.html?from=home-community";
    var pauseRotation = false;
    cardEl.addEventListener("pointerenter", function () {
      pauseRotation = true;
    });
    cardEl.addEventListener("pointerleave", function () {
      pauseRotation = false;
    });

    // First paint: render immediately from local cached posts (or fallback),
    // then replace with full async data once loading completes.
    var fallbackItem = {
      author: "colourLearner",
      tag: "#Community",
      content: txHome("Share one colour insight, palette, or learning takeaway with peers in the community.")
    };
    var immediateItems = buildImmediateItems();
    if (!immediateItems.length) immediateItems = [fallbackItem];
    var immediateIndex = pickStableSessionIndex(HOME_COMMUNITY_PICK_INDEX_KEY, immediateItems.length);
    if (!(immediateIndex >= 0)) immediateIndex = 0;
    var immediateLen = immediateItems.length;
    var immediateTop = immediateItems[((immediateIndex - 1) % immediateLen + immediateLen) % immediateLen];
    var immediateCenter = immediateItems[immediateIndex % immediateLen];
    var immediateBottom = immediateItems[(immediateIndex + 1) % immediateLen];
    renderSlot(slotTopEl, immediateTop);
    renderSlot(slotCenterEl, immediateCenter);
    renderSlot(slotBottomEl, immediateBottom);
    slotTopEl.classList.remove("home-community__bubble--active", "home-community__bubble--hidden");
    slotCenterEl.classList.remove("home-community__bubble--inactive", "home-community__bubble--hidden");
    slotBottomEl.classList.remove("home-community__bubble--active", "home-community__bubble--hidden");
    slotTopEl.classList.add("home-community__bubble--inactive");
    slotCenterEl.classList.add("home-community__bubble--active");
    slotBottomEl.classList.add("home-community__bubble--inactive");
    applyCenterLink(immediateCenter);

    Promise.all([loadCommunityPostCatalog(), buildHomeCommunityLeaderboardRows(4)])
      .then(function (results) {
        var catalog = results[0];
        var leaderboardRows = results[1];
        if (!Array.isArray(catalog) || !catalog.length) throw new Error("Empty community catalog");
        var items = catalog.slice();
        if (leaderboardRows.length) {
          items.push({ type: "leaderboard", rows: leaderboardRows });
        }

        var currentIndex = pickStableSessionIndex(HOME_COMMUNITY_PICK_INDEX_KEY, items.length);
        var picked = items[currentIndex];
        if (!picked) throw new Error("Invalid community item");
        function getItemByOffset(offset) {
          var len = items.length;
          if (!len) return null;
          var normalized = ((currentIndex + offset) % len + len) % len;
          return items[normalized];
        }

        function renderWindow() {
          renderSlot(slotTopEl, getItemByOffset(-1));
          renderSlot(slotCenterEl, getItemByOffset(0));
          renderSlot(slotBottomEl, getItemByOffset(1));
          applyCenterLink(getItemByOffset(0));
        }

        function applySlotState(activeSlotName, hideTopSlot) {
          var slots = [
            { name: "top", el: slotTopEl },
            { name: "center", el: slotCenterEl },
            { name: "bottom", el: slotBottomEl }
          ];
          slots.forEach(function (slot) {
            if (!slot.el) return;
            slot.el.classList.remove(
              "home-community__bubble--active",
              "home-community__bubble--inactive",
              "home-community__bubble--hidden"
            );
            if (hideTopSlot && slot.name === "top") {
              slot.el.classList.add("home-community__bubble--hidden");
              return;
            }
            if (slot.name === activeSlotName) {
              slot.el.classList.add("home-community__bubble--active");
              return;
            }
            slot.el.classList.add("home-community__bubble--inactive");
          });
        }

        renderWindow();
        applySlotState("center", false);

        if (items.length < 2) return;
        var switching = false;
        var timerId = window.setInterval(function () {
          if (switching || document.hidden || pauseRotation) return;
          switching = true;
          applySlotState("bottom", true);
          carouselEl.classList.add("home-community__carousel--rolling");
          window.setTimeout(function () {
            currentIndex = (currentIndex + 1) % items.length;
            renderWindow();
            applySlotState("center", false);
            carouselEl.classList.add("home-community__carousel--snap");
            carouselEl.classList.remove("home-community__carousel--rolling");
            void carouselEl.offsetWidth;
            carouselEl.classList.remove("home-community__carousel--snap");
            switching = false;
          }, HOME_COMMUNITY_SWITCH_OUT_MS + 40);
        }, HOME_COMMUNITY_ROTATE_MS);
        cardEl._clwCommunityRotateTimer = timerId;
      })
      .catch(function () {
        renderSlot(slotTopEl, fallbackItem);
        renderSlot(slotCenterEl, fallbackItem);
        renderSlot(slotBottomEl, fallbackItem);
        slotTopEl.classList.add("home-community__bubble--inactive");
        slotCenterEl.classList.add("home-community__bubble--active");
        slotBottomEl.classList.add("home-community__bubble--inactive");
        applyCenterLink(fallbackItem);
      });
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

  function setupWheelPicker(wheelCanvas, wheelInput, onColorChange) {
    if (!wheelCanvas || !wheelInput || typeof onColorChange !== "function") return;
    var wheelCtx = wheelCanvas.getContext("2d");
    if (!wheelCtx) return;

    function getHueFromInput() {
      return rgbToHue(parseHexColor(wheelInput.value) || { r: 0, g: 180, b: 216 });
    }

    function renderWheel() {
      var size = Math.min(wheelCanvas.width, wheelCanvas.height);
      var center = size / 2;
      var outerRadius = center - 3;
      var innerRadius = outerRadius * 0.58;
      var hue = getHueFromInput();

      wheelCtx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);
      var gradient = wheelCtx.createConicGradient(-Math.PI / 2, center, center);
      gradient.addColorStop(0, "#ff0044");
      gradient.addColorStop(1 / 6, "#ff8c00");
      gradient.addColorStop(2 / 6, "#ffd500");
      gradient.addColorStop(3 / 6, "#27c93f");
      gradient.addColorStop(4 / 6, "#00a5ff");
      gradient.addColorStop(5 / 6, "#7a35ff");
      gradient.addColorStop(1, "#ff0044");

      wheelCtx.fillStyle = gradient;
      wheelCtx.beginPath();
      wheelCtx.arc(center, center, outerRadius, 0, Math.PI * 2);
      wheelCtx.arc(center, center, innerRadius, 0, Math.PI * 2, true);
      wheelCtx.fill("evenodd");

      wheelCtx.strokeStyle = "rgba(15, 23, 42, 0.2)";
      wheelCtx.lineWidth = 2;
      wheelCtx.beginPath();
      wheelCtx.arc(center, center, outerRadius + 1, 0, Math.PI * 2);
      wheelCtx.stroke();

      var markerAngle = (hue * Math.PI) / 180 - Math.PI / 2;
      var markerRadius = (outerRadius + innerRadius) / 2;
      var markerX = center + Math.cos(markerAngle) * markerRadius;
      var markerY = center + Math.sin(markerAngle) * markerRadius;
      wheelCtx.beginPath();
      wheelCtx.fillStyle = "#ffffff";
      wheelCtx.strokeStyle = "rgba(15, 23, 42, 0.85)";
      wheelCtx.lineWidth = 2;
      wheelCtx.arc(markerX, markerY, 6, 0, Math.PI * 2);
      wheelCtx.fill();
      wheelCtx.stroke();
    }

    function updateFromPointer(clientX, clientY) {
      var rect = wheelCanvas.getBoundingClientRect();
      var scaleX = wheelCanvas.width / rect.width;
      var scaleY = wheelCanvas.height / rect.height;
      var x = (clientX - rect.left) * scaleX;
      var y = (clientY - rect.top) * scaleY;
      var centerX = wheelCanvas.width / 2;
      var centerY = wheelCanvas.height / 2;
      var dx = x - centerX;
      var dy = y - centerY;
      var distance = Math.sqrt(dx * dx + dy * dy);
      var outerRadius = centerX - 3;
      var innerRadius = outerRadius * 0.58;
      if (distance < innerRadius || distance > outerRadius) return;

      var angle = Math.atan2(dy, dx);
      var hue = ((angle * 180) / Math.PI + 90 + 360) % 360;
      var rgb = hslToRgb(hue, 95, 50);
      var hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      wheelInput.value = hex;
      onColorChange(hex);
      renderWheel();
    }

    var dragging = false;
    wheelCanvas.addEventListener("pointerdown", function (event) {
      dragging = true;
      wheelCanvas.setPointerCapture(event.pointerId);
      updateFromPointer(event.clientX, event.clientY);
    });
    wheelCanvas.addEventListener("pointermove", function (event) {
      if (!dragging) return;
      updateFromPointer(event.clientX, event.clientY);
    });
    wheelCanvas.addEventListener("pointerup", function (event) {
      dragging = false;
      wheelCanvas.releasePointerCapture(event.pointerId);
    });
    wheelCanvas.addEventListener("pointercancel", function () {
      dragging = false;
    });

    wheelInput.addEventListener("input", renderWheel);
    renderWheel();
  }

  function clearTaglineEffect(letters) {
    letters.forEach(function (letter) {
      letter.classList.remove("is-active");
    });
  }

  function setSketchStyle(ctx, scale) {
    var ratio = typeof scale === "number" ? scale : 1;
    ctx.lineWidth = Math.max(4 * ratio, 1);
    ctx.strokeStyle = "#000";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }

  function loadGameDrawingsLibrary() {
    return fetch("js/pages/game.js")
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load game library");
        return res.text();
      })
      .then(function (source) {
        var markerMatch = source.match(/const\s+drawings\s*=\s*/);
        if (!markerMatch) throw new Error("Could not find drawings declaration");
        var markerIndex = markerMatch.index + markerMatch[0].length;
        var expressionStart = source.indexOf("[", markerIndex);
        if (expressionStart < 0) throw new Error("Could not find drawings array start");
        var depth = 0;
        var expressionEnd = -1;
        for (var i = expressionStart; i < source.length; i += 1) {
          var ch = source[i];
          if (ch === "[") depth += 1;
          if (ch === "]") {
            depth -= 1;
            if (depth === 0) {
              expressionEnd = i + 1;
              break;
            }
          }
        }
        if (expressionEnd < 0) throw new Error("Could not parse drawings array");
        var expression = source.slice(expressionStart, expressionEnd).trim();
        if (expression.endsWith(";")) expression = expression.slice(0, -1);
        return new Function("return " + expression + ";")();
      });
  }

  function setupHomeGameSpotlight() {
    var previewCanvas = document.querySelector("[data-home-game-preview]");
    var previewLink = document.querySelector("[data-home-game-link]");
    var previewTitle = document.querySelector(".home-card__text--game");
    if (!previewCanvas || !previewLink) return;

    var ctx = previewCanvas.getContext("2d");
    if (!ctx) return;

    loadGameDrawingsLibrary()
      .then(function (drawings) {
        if (!Array.isArray(drawings) || !drawings.length) return;
        var validDrawings = drawings
          .map(function (drawing, index) {
            return { drawing: drawing, index: index };
          })
          .filter(function (item) {
            return item.drawing && typeof item.drawing.draw === "function";
          });
        if (!validDrawings.length) return;
        var picked = validDrawings[pickStableSessionIndex(HOME_GAME_PICK_INDEX_KEY, validDrawings.length)];
        var drawing = picked.drawing;
        var randomIndex = picked.index;
        var drawingName = drawing.name ? String(drawing.name) : "a random drawing";

        ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
        setSketchStyle(ctx, 0.5);
        drawing.draw(ctx, previewCanvas.width, previewCanvas.height);

        previewLink.href = "game.html?openDrawing=" + String(randomIndex);
        previewLink.setAttribute("aria-label", txHome("Start your colour challenge with ") + txGame(drawingName));
        if (previewTitle) renderLocalizedGameTitle(previewTitle, drawingName);
      })
      .catch(function () {
        previewLink.href = "game.html";
        if (previewTitle) renderLocalizedGameTitle(previewTitle, "");
      });
  }

  function extractFunctionSource(source, functionName) {
    var marker = "function " + functionName + "(";
    var startIndex = source.indexOf(marker);
    if (startIndex < 0) throw new Error("Missing function: " + functionName);
    var bodyStart = source.indexOf("{", startIndex);
    if (bodyStart < 0) throw new Error("Malformed function: " + functionName);

    var depth = 0;
    var inSingle = false;
    var inDouble = false;
    var inTemplate = false;
    var escaped = false;

    for (var i = bodyStart; i < source.length; i += 1) {
      var ch = source[i];
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (!inDouble && !inTemplate && ch === "'" && source[i - 1] !== "\\") inSingle = !inSingle;
      else if (!inSingle && !inTemplate && ch === '"' && source[i - 1] !== "\\") inDouble = !inDouble;
      else if (!inSingle && !inDouble && ch === "`" && source[i - 1] !== "\\") inTemplate = !inTemplate;
      if (inSingle || inDouble || inTemplate) continue;

      if (ch === "{") depth += 1;
      else if (ch === "}") {
        depth -= 1;
        if (depth === 0) return source.slice(startIndex, i + 1);
      }
    }
    throw new Error("Unclosed function: " + functionName);
  }

  function extractVarSource(source, varName) {
    var marker = "var " + varName + " =";
    var startIndex = source.indexOf(marker);
    if (startIndex < 0) throw new Error("Missing var: " + varName);

    var depthCurly = 0;
    var depthSquare = 0;
    var depthRound = 0;
    var inSingle = false;
    var inDouble = false;
    var inTemplate = false;
    var escaped = false;

    for (var i = startIndex; i < source.length; i += 1) {
      var ch = source[i];
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (!inDouble && !inTemplate && ch === "'" && source[i - 1] !== "\\") inSingle = !inSingle;
      else if (!inSingle && !inTemplate && ch === '"' && source[i - 1] !== "\\") inDouble = !inDouble;
      else if (!inSingle && !inDouble && ch === "`" && source[i - 1] !== "\\") inTemplate = !inTemplate;
      if (inSingle || inDouble || inTemplate) continue;

      if (ch === "{") depthCurly += 1;
      else if (ch === "}") depthCurly -= 1;
      else if (ch === "[") depthSquare += 1;
      else if (ch === "]") depthSquare -= 1;
      else if (ch === "(") depthRound += 1;
      else if (ch === ")") depthRound -= 1;
      else if (ch === ";" && depthCurly === 0 && depthSquare === 0 && depthRound === 0) {
        return source.slice(startIndex, i + 1);
      }
    }
    throw new Error("Unclosed var: " + varName);
  }

  function getHomeTestChapterName(chapterId) {
    var names = {
      basics: "Foundations",
      models: "Encoding Fundamentals",
      meaning: "Advanced Display Technologies",
      workflow: "Colour Management Workflow",
      practice: "Tool Use & Applied Practice"
    };
    return names[chapterId] || toTitleCase(String(chapterId || "test"));
  }

  function getHomeTestLevelName(levelId) {
    var names = { easy: "Easy", medium: "Medium", hard: "Hard" };
    return names[levelId] || toTitleCase(String(levelId || "level"));
  }

  function getHomeTestOptionTexts(question) {
    var opts = Array.isArray(question && question.options) ? question.options : [];
    if (!opts.length) return [];
    if (question && question.type === "image") {
      return opts.map(function (item) {
        return item && item.label ? String(item.label) : String(item && item.id ? item.id : "Option");
      });
    }
    return opts.map(function (item) {
      return typeof item === "string" ? item : String(item && item.label ? item.label : item);
    });
  }

  function buildTestCatalogFromQuestionBank(bank) {
    if (!bank || typeof bank !== "object") return [];
    var catalog = [];
    Object.keys(bank).forEach(function (chapterId) {
      var chapter = bank[chapterId];
      var units = chapter && chapter.units && typeof chapter.units === "object" ? chapter.units : null;
      if (!units) return;
      Object.keys(units).forEach(function (unitId) {
        var unit = units[unitId];
        if (!unit || !unit.levels || typeof unit.levels !== "object") return;
        var unitNumber = Math.max(1, Number(String(unitId || "").split("-")[1]) || 1);
        Object.keys(unit.levels).forEach(function (levelId) {
          var questions = Array.isArray(unit.levels[levelId]) ? unit.levels[levelId] : [];
          questions.forEach(function (question, qIndex) {
            catalog.push({
              chapterId: chapterId,
              chapterName: getHomeTestChapterName(chapterId),
              levelId: levelId,
              levelName: getHomeTestLevelName(levelId),
              unitId: unitId,
              unitNumber: unitNumber,
              unitFocusLabel: unit && unit.label ? String(unit.label) : "Unit " + unitNumber,
              questionIndex: qIndex,
              prompt: question && question.prompt ? String(question.prompt) : "",
              topic: question && question.topic ? String(question.topic) : "",
              id: chapterId + "-" + levelId + "-" + unitId + "-q" + (qIndex + 1),
              optionTexts: getHomeTestOptionTexts(question)
            });
          });
        });
      });
    });
    return catalog;
  }

  function loadTestQuestionCatalog() {
    var bankCatalog = buildTestCatalogFromQuestionBank(window.CLWTestQuestionBank);
    if (bankCatalog.length) return Promise.resolve(bankCatalog);

    return fetch("js/pages/test/test.js")
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load test module");
        return res.text();
      })
      .then(function (source) {
        var parts = [
          '"use strict";',
          extractVarSource(source, "CHAPTERS"),
          extractVarSource(source, "UNIT_TEMPLATES"),
          extractFunctionSource(source, "clone"),
          extractFunctionSource(source, "getChapter"),
          extractFunctionSource(source, "getUnitFocus"),
          extractFunctionSource(source, "makeSet"),
          extractFunctionSource(source, "previewText"),
          extractFunctionSource(source, "previewBg"),
          extractFunctionSource(source, "previewImage"),
          extractFunctionSource(source, "buildQuestionData"),
          extractFunctionSource(source, "makeQuestion"),
          extractFunctionSource(source, "getUnitQuestions"),
          "var QUESTION_DATA = buildQuestionData();",
          "var levels = Object.keys(UNIT_TEMPLATES);",
          "function getOptionTexts(question) {",
          "  var opts = Array.isArray(question && question.options) ? question.options : [];",
          "  if (!opts.length) return [];",
          "  if (question.type === 'image') {",
          "    return opts.map(function (item) { return item && item.label ? String(item.label) : String(item && item.id ? item.id : 'Option'); });",
          "  }",
          "  return opts.map(function (item) { return String(item); });",
          "}",
          "var catalog = [];",
          "CHAPTERS.forEach(function (chapter) {",
          "  levels.forEach(function (levelId) {",
          "    var levelName = String(levelId || 'Level');",
          "    levelName = levelName ? levelName.charAt(0).toUpperCase() + levelName.slice(1) : 'Level';",
          "    (UNIT_TEMPLATES[levelId] || []).forEach(function (unit) {",
          "      var unitId = unit.id;",
          "      var unitNumber = Math.max(1, Number(String(unitId || '').split('-')[1]) || 1);",
          "      var focusList = chapter && chapter.focuses ? chapter.focuses[levelId] : null;",
          "      var unitFocusLabel = Array.isArray(focusList) && focusList[unitNumber - 1] ? String(focusList[unitNumber - 1]) : ('Unit ' + unitNumber);",
          "      var questions = getUnitQuestions(chapter.id, levelId, unitId) || [];",
          "      questions.forEach(function (question, qIndex) {",
          "        catalog.push({",
          "          chapterId: chapter.id,",
          "          chapterName: chapter.name,",
          "          levelId: levelId,",
          "          levelName: levelName,",
          "          unitId: unitId,",
          "          unitNumber: unitNumber,",
          "          unitFocusLabel: unitFocusLabel,",
          "          questionIndex: qIndex,",
          "          prompt: question.prompt || '',",
          "          topic: question.topic || '',",
          "          id: question.id || '',",
          "          optionTexts: getOptionTexts(question)",
          "        });",
          "      });",
          "    });",
          "  });",
          "});",
          "return catalog;"
        ];
        return new Function(parts.join("\n"))();
      });
  }

  function escapeHtmlText(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function toTitleCase(text) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function formatTestBreadcrumbBase(picked) {
    if (!picked || !picked.chapterName) return "Test module";
    var nodes = [
      "Test",
      String(picked.chapterName),
      String(picked.levelName || toTitleCase(picked.levelId)),
      "Unit " + String(picked.unitNumber || 1)
    ];
    if (picked.unitFocusLabel) nodes.push(String(picked.unitFocusLabel));
    return nodes.join(" > ");
  }

  function parseCssPx(value) {
    var num = Number.parseFloat(String(value || "0"));
    return Number.isFinite(num) ? num : 0;
  }

  function computeAdaptiveOptionWidth(optionsEl) {
    if (!optionsEl) return;
    var optionEls = Array.from(optionsEl.querySelectorAll(".home-test__option"));
    if (!optionEls.length) return;

    var hostWidth = Math.floor(optionsEl.clientWidth);
    if (!(hostWidth > 0)) return;
    var narrowViewport = hostWidth < 360;
    if (narrowViewport) {
      optionsEl.style.setProperty("--home-test-option-width", "100%");
      return;
    }

    var sampleOption = optionEls[0];
    var sampleText = sampleOption.querySelector(".home-test__option-text") || sampleOption;
    var optionStyle = window.getComputedStyle(sampleOption);
    var textStyle = window.getComputedStyle(sampleText);
    var rootStyle = window.getComputedStyle(document.documentElement);

    var keySizeRem = parseCssPx(rootStyle.fontSize) * 1.4;
    var horizontalPadding = parseCssPx(optionStyle.paddingLeft) + parseCssPx(optionStyle.paddingRight);
    var gapSize = parseCssPx(optionStyle.columnGap || optionStyle.gap);
    var keyAndSpacing = keySizeRem + gapSize + 14;

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var maxTextWidth = 0;
    if (ctx) {
      ctx.font = [
        textStyle.fontStyle,
        textStyle.fontVariant,
        textStyle.fontWeight,
        textStyle.fontSize + "/" + textStyle.lineHeight,
        textStyle.fontFamily
      ].join(" ");
      optionEls.forEach(function (row) {
        var label = row.querySelector(".home-test__option-text");
        var text = (label ? label.textContent : row.textContent) || "";
        maxTextWidth = Math.max(maxTextWidth, ctx.measureText(text.trim()).width);
      });
    } else {
      optionEls.forEach(function (row) {
        maxTextWidth = Math.max(maxTextWidth, ((row.textContent || "").trim().length * 8));
      });
    }

    var desiredWidth = Math.ceil(maxTextWidth + keyAndSpacing + horizontalPadding);
    var maxAllowed = Math.max(220, Math.floor(hostWidth * 0.96));
    var pleasantCap = Math.floor(hostWidth * 0.84);
    var target = Math.min(maxAllowed, Math.max(240, desiredWidth));
    if (target < pleasantCap) target = Math.max(240, target);
    else target = maxAllowed;

    if (target >= hostWidth * 0.9) {
      optionsEl.style.setProperty("--home-test-option-width", "100%");
    } else {
      optionsEl.style.setProperty("--home-test-option-width", target + "px");
    }
  }

  function scheduleAdaptiveOptionWidth(optionsEl) {
    if (!optionsEl) return;
    if (typeof window.requestAnimationFrame === "function") {
      window.requestAnimationFrame(function () {
        computeAdaptiveOptionWidth(optionsEl);
      });
      return;
    }
    setTimeout(function () {
      computeAdaptiveOptionWidth(optionsEl);
    }, 0);
  }

  function bindHomeTestOptionResize(optionsEl) {
    if (!optionsEl || optionsEl.dataset.widthBound === "true") return;
    optionsEl.dataset.widthBound = "true";
    window.addEventListener("resize", function () {
      scheduleAdaptiveOptionWidth(optionsEl);
    });
  }

  function getHomeTestFallbackCatalog() {
    return [
      {
        chapterId: "basics",
        chapterName: "Foundations",
        levelId: "easy",
        levelName: "Easy",
        unitId: "unit-1",
        unitNumber: 1,
        unitFocusLabel: "Overview & Core Concepts",
        questionIndex: 0,
        prompt: "Which pair is complementary on a simple colour wheel?",
        optionTexts: ["Blue and orange", "Blue and green", "Yellow and orange", "Red and purple"]
      },
      {
        chapterId: "models",
        chapterName: "Encoding Fundamentals",
        levelId: "medium",
        levelName: "Medium",
        unitId: "unit-2",
        unitNumber: 2,
        unitFocusLabel: "ICC Profiles",
        questionIndex: 0,
        prompt: "Why is an ICC profile useful in a colour workflow?",
        optionTexts: [
          "It maps colour values between devices more consistently",
          "It increases monitor brightness automatically",
          "It removes the need for calibration",
          "It converts every image to grayscale"
        ]
      },
      {
        chapterId: "meaning",
        chapterName: "Advanced Display Technologies",
        levelId: "hard",
        levelName: "Hard",
        unitId: "unit-3",
        unitNumber: 3,
        unitFocusLabel: "Wide Colour Gamut",
        questionIndex: 0,
        prompt: "A wider colour gamut display mainly allows what?",
        optionTexts: [
          "Showing more saturated and varied colours",
          "Always reducing file size",
          "Removing the need for tone mapping",
          "Guaranteeing perfect print matching"
        ]
      }
    ];
  }

  function getSignedInHomepageUsername() {
    var auth = window.CLWAuth || null;
    if (auth && typeof auth.isLoggedIn === "function" && !auth.isLoggedIn()) return "";
    if (auth && typeof auth.getCurrentUsername === "function") {
      var authName = String(auth.getCurrentUsername() || "").trim();
      if (authName && authName.toLowerCase() !== "guest") return authName;
    }
    var user = readStoredJson(AUTH_USER_KEY, null);
    if (!user || typeof user !== "object") return "";
    var username = user.username ? String(user.username).trim() : "";
    if (!username || username.toLowerCase() === "guest") return "";
    return username;
  }

  function readHomeUserTestState(username) {
    var name = String(username || "").trim();
    if (!name) return null;
    var exactKey = "clw_test_module_state_v2__" + name;
    var exactState = readStoredJson(exactKey, null);
    if (exactState && typeof exactState === "object") return exactState;
    try {
      var prefix = "clw_test_module_state_v2__";
      var targetLower = name.toLowerCase();
      for (var i = 0; i < localStorage.length; i += 1) {
        var key = localStorage.key(i);
        if (!key || key.indexOf(prefix) !== 0) continue;
        var storedUser = key.slice(prefix.length).toLowerCase();
        if (storedUser !== targetLower) continue;
        var matched = readStoredJson(key, null);
        if (matched && typeof matched === "object") return matched;
      }
    } catch (e) {
      /* ignore */
    }
    return null;
  }

  function readHomeTestResumeLock() {
    var raw = readStoredJson(HOME_TEST_RESUME_LOCK_KEY, null);
    if (!raw || typeof raw !== "object") return null;
    var username = raw.username ? String(raw.username).trim() : "";
    var scope = raw.scope === "guest" ? "guest" : (username ? "user" : "guest");
    var mode = raw.mode === "basics" ? "basics" : "resume";
    if (scope === "user" && !username) return null;
    return {
      scope: scope,
      username: username,
      mode: mode,
      enabled: raw.enabled !== false
    };
  }

  function writeHomeTestResumeLock(username, enabled, mode) {
    var name = String(username || "").trim();
    var scope = name ? "user" : "guest";
    try {
      localStorage.setItem(HOME_TEST_RESUME_LOCK_KEY, JSON.stringify({
        scope: scope,
        username: name,
        mode: mode === "basics" ? "basics" : "resume",
        enabled: !!enabled,
        updatedAt: new Date().toISOString()
      }));
    } catch (e) {
      /* ignore */
    }
  }

  function clearHomeTestResumeLock() {
    try {
      localStorage.removeItem(HOME_TEST_RESUME_LOCK_KEY);
    } catch (e) {
      /* ignore */
    }
  }

  function hasHomeTestProgress(state) {
    if (!state || typeof state !== "object") return false;
    return Array.isArray(state.history) && state.history.length > 0;
  }

  function getHomeTestFirstQuestion(catalog) {
    if (!Array.isArray(catalog) || !catalog.length) return null;
    var basicsFirst = findHomeTestCatalogQuestion(catalog, "basics", "easy", "unit-1", 0);
    if (basicsFirst) return basicsFirst;
    for (var i = 0; i < catalog.length; i += 1) {
      if (catalog[i] && catalog[i].prompt) return catalog[i];
    }
    return catalog[0] || null;
  }

  function findHomeTestCatalogQuestion(catalog, chapterId, levelId, unitId, questionIndex) {
    var chapter = String(chapterId || "");
    var level = String(levelId || "");
    var unit = String(unitId || "");
    var qIndex = Number.parseInt(questionIndex, 10);
    if (!Array.isArray(catalog) || !catalog.length || !chapter || !level || !unit) return null;
    var sameUnitRows = catalog.filter(function (item) {
      return (
        item &&
        String(item.chapterId || "") === chapter &&
        String(item.levelId || "") === level &&
        String(item.unitId || "") === unit
      );
    });
    if (!sameUnitRows.length) return null;
    sameUnitRows.sort(function (a, b) {
      return Number(a.questionIndex || 0) - Number(b.questionIndex || 0);
    });
    if (Number.isFinite(qIndex) && qIndex >= 0) {
      for (var i = 0; i < sameUnitRows.length; i += 1) {
        if (Number(sameUnitRows[i].questionIndex || 0) === qIndex) return sameUnitRows[i];
      }
    }
    return sameUnitRows[0];
  }

  function buildHomeResumeQuestion(catalog) {
    var username = getSignedInHomepageUsername();
    if (!username) return null;
    var state = readHomeUserTestState(username);
    if (!hasHomeTestProgress(state)) return null;

    var currentQuiz = state.currentQuiz && typeof state.currentQuiz === "object" ? state.currentQuiz : null;
    if (currentQuiz) {
      var nextIndex = Number.parseInt(currentQuiz.currentIndex, 10);
      var inProgressRow = findHomeTestCatalogQuestion(catalog, currentQuiz.chapterId, currentQuiz.levelId, currentQuiz.unitId, nextIndex);
      if (inProgressRow) return inProgressRow;
    }

    var progressRoot = state.progress && typeof state.progress === "object" ? state.progress : {};
    function fromProgress(chapterId, levelId, fallbackUnitId) {
      var chapter = progressRoot[chapterId];
      var level = chapter && chapter[levelId];
      var unitId = level && level.currentUnit ? String(level.currentUnit) : String(fallbackUnitId || "");
      if (!unitId) return null;
      return findHomeTestCatalogQuestion(catalog, chapterId, levelId, unitId, 0);
    }

    var lastSubmit = state.lastQuizSubmit && typeof state.lastQuizSubmit === "object" ? state.lastQuizSubmit : null;
    if (lastSubmit && lastSubmit.chapterId && lastSubmit.levelId) {
      var submitRow = fromProgress(lastSubmit.chapterId, lastSubmit.levelId, lastSubmit.unitId);
      if (submitRow) return submitRow;
      var submitFallback = findHomeTestCatalogQuestion(catalog, lastSubmit.chapterId, lastSubmit.levelId, lastSubmit.unitId, 0);
      if (submitFallback) return submitFallback;
    }

    var selectedChapter = state.selection && state.selection.chapter ? String(state.selection.chapter) : "";
    var selectedLevel = state.selection && state.selection.level ? String(state.selection.level) : "";
    if (selectedChapter && selectedLevel) {
      var selectedRow = fromProgress(selectedChapter, selectedLevel, "unit-1");
      if (selectedRow) return selectedRow;
    }

    var latestRow = null;
    var latestTime = 0;
    Object.keys(progressRoot).forEach(function (chapterId) {
      var levels = progressRoot[chapterId];
      if (!levels || typeof levels !== "object") return;
      Object.keys(levels).forEach(function (levelId) {
        var row = levels[levelId];
        if (!row || typeof row !== "object") return;
        var hasSignal = (Array.isArray(row.completedUnits) && row.completedUnits.length > 0) || !!row.lastPlayed;
        if (!hasSignal) return;
        var ts = row.lastPlayed ? Date.parse(row.lastPlayed) : 0;
        var candidate = fromProgress(chapterId, levelId, "unit-1");
        if (!candidate) return;
        if (!latestRow || ts >= latestTime) {
          latestRow = candidate;
          latestTime = Number.isFinite(ts) ? ts : latestTime;
        }
      });
    });
    if (latestRow) return latestRow;

    if (Array.isArray(state.history) && state.history.length) {
      var latestResult = state.history[0];
      if (latestResult) {
        var historyRow = fromProgress(latestResult.chapter, latestResult.level, latestResult.unit);
        if (historyRow) return historyRow;
      }
    }
    return null;
  }

  function updateHomeTestResumeAction(resumeActionEl, picked, mode) {
    if (!resumeActionEl) return;
    if (!picked) {
      resumeActionEl.hidden = true;
      resumeActionEl.setAttribute("aria-hidden", "true");
      resumeActionEl.setAttribute("tabindex", "-1");
      return;
    }
    resumeActionEl.hidden = false;
    resumeActionEl.setAttribute("aria-hidden", "false");
    resumeActionEl.removeAttribute("tabindex");
    var basicsMode = mode === "basics";
    setLocalizedText(resumeActionEl, basicsMode ? "Start from Basics" : "Continue Last Quiz");
    resumeActionEl.setAttribute(
      "aria-label",
      txHome("Open test question: ") + String(txTest(picked.prompt || (basicsMode ? "Start from basics" : "Continue last quiz")))
    );
  }

  function renderHomeTestCard(cardEl, promptEl, optionsEl, metaEl, fullQuizActionEl, picked) {
    if (!cardEl || !promptEl || !optionsEl || !metaEl || !fullQuizActionEl || !picked) return;
    setLocalizedText(promptEl, picked.prompt || "Tap to jump into a random colour challenge question.", "test");
    var optionRows = Array.isArray(picked.optionTexts) ? picked.optionTexts.slice(0, 4) : [];
    if (optionRows.length) {
      optionsEl.innerHTML = optionRows
        .map(function (text, index) {
          var baseText = String(text || "");
          return (
            '<p class="home-test__option" data-home-test-option-index="' + index + '">' +
            '<span class="home-test__option-key">' + String.fromCharCode(65 + (index % 26)) + "</span>" +
            '<span class="home-test__option-text" data-home-i18n-base="' + escapeHtmlText(baseText) + '" data-home-i18n-scope="test">' + escapeHtmlText(clipWithEllipsis(txTest(baseText), 72)) + "</span>" +
            "</p>"
          );
        })
        .join("");
    } else {
      optionsEl.innerHTML = '<p class="home-test__option"><span class="home-test__option-key">i</span><span class="home-test__option-text" data-home-i18n-base="Open to view options">' + escapeHtmlText(txHome("Open to view options")) + "</span></p>";
    }
    setLocalizedText(metaEl, formatTestBreadcrumbBase(picked));
    fullQuizActionEl.setAttribute("href", buildHomeTestQuizHref(picked));
    cardEl.setAttribute("aria-label", txHome("Open test question: ") + String(txTest(picked.prompt || "Random question")));
    bindHomeTestOptionResize(optionsEl);
    scheduleAdaptiveOptionWidth(optionsEl);
  }

  function buildHomeTestQuizHref(picked, selectedOptionIndex) {
    var href =
      "test-quiz.html?chapter=" + encodeURIComponent(String((picked && picked.chapterId) || "basics")) +
      "&level=" + encodeURIComponent(String((picked && picked.levelId) || "easy")) +
      "&unit=" + encodeURIComponent(String((picked && picked.unitId) || "unit-1")) +
      "&fresh=1&hq=" + encodeURIComponent(String((picked && picked.questionIndex) || 0));
    var optIndex = Number.parseInt(selectedOptionIndex, 10);
    if (Number.isFinite(optIndex) && optIndex >= 0) {
      href += "&ho=" + encodeURIComponent(String(optIndex));
    }
    return href;
  }

  function setupHomeTestSpotlight() {
    var cardEl = document.querySelector("[data-home-test-link]");
    var promptEl = document.querySelector("[data-home-test-prompt]");
    var optionsEl = document.querySelector("[data-home-test-options]");
    var metaEl = document.querySelector("[data-home-test-meta]");
    var fullQuizActionEl = document.querySelector("[data-home-test-full-quiz]");
    var resumeActionEl = document.querySelector("[data-home-test-resume]");
    if (!cardEl || !promptEl || !metaEl || !optionsEl || !fullQuizActionEl) return;
    var currentPicked = null;
    var resumePicked = null;
    var basicsPicked = null;
    var quickActionMode = "";
    var quickActionPicked = null;
    var currentCatalog = null;

    cardEl.addEventListener("click", function (event) {
      if (!currentPicked || !event || !event.target || !event.target.closest) return;
      var optionEl = event.target.closest("[data-home-test-option-index]");
      if (!optionEl || !optionsEl.contains(optionEl)) return;
      var pickedOptionIndex = Number.parseInt(optionEl.getAttribute("data-home-test-option-index"), 10);
      if (!Number.isFinite(pickedOptionIndex) || pickedOptionIndex < 0) return;
      event.preventDefault();
      window.location.href = buildHomeTestQuizHref(currentPicked, pickedOptionIndex);
    });

    if (resumeActionEl) {
      resumeActionEl.addEventListener("click", function (event) {
        event.preventDefault();
        if (!quickActionPicked) return;
        var username = getSignedInHomepageUsername();
        writeHomeTestResumeLock(username, true, quickActionMode || "resume");
        currentPicked = quickActionPicked;
        renderHomeTestCard(cardEl, promptEl, optionsEl, metaEl, fullQuizActionEl, currentPicked);
      });
    }

    function shouldPreferLockedPicked(mode) {
      if (!mode) return false;
      var username = getSignedInHomepageUsername();
      var lock = readHomeTestResumeLock();
      if (!lock || !lock.enabled) return false;
      if (String(lock.mode || "") !== String(mode)) return false;
      if (username) {
        return lock.scope === "user" && String(lock.username || "").toLowerCase() === username.toLowerCase();
      }
      return lock.scope === "guest";
    }

    function syncResumeAction() {
      var username = getSignedInHomepageUsername();
      if (!currentCatalog) {
        updateHomeTestResumeAction(resumeActionEl, null, "");
        return;
      }
      resumePicked = buildHomeResumeQuestion(currentCatalog);
      basicsPicked = getHomeTestFirstQuestion(currentCatalog);

      var hasHistory = !!(username && resumePicked);
      quickActionMode = hasHistory ? "resume" : "basics";
      quickActionPicked = hasHistory ? resumePicked : basicsPicked;

      var activeLock = readHomeTestResumeLock();
      if (activeLock && activeLock.enabled && String(activeLock.mode || "") !== quickActionMode) {
        var lockMatchesViewer = username
          ? (activeLock.scope === "user" && String(activeLock.username || "").toLowerCase() === username.toLowerCase())
          : activeLock.scope === "guest";
        if (lockMatchesViewer) clearHomeTestResumeLock();
      }

      updateHomeTestResumeAction(resumeActionEl, quickActionPicked, quickActionMode);
      if (quickActionPicked && shouldPreferLockedPicked(quickActionMode)) {
        currentPicked = quickActionPicked;
        renderHomeTestCard(cardEl, promptEl, optionsEl, metaEl, fullQuizActionEl, currentPicked);
      }
    }

    document.addEventListener("clw:auth-changed", function () {
      syncResumeAction();
    });

    loadTestQuestionCatalog()
      .then(function (catalog) {
        if (!Array.isArray(catalog) || !catalog.length) throw new Error("Empty question catalog");
        currentCatalog = catalog.slice();
        var picked = catalog[pickStableSessionIndex(HOME_TEST_PICK_INDEX_KEY, catalog.length)];
        if (!picked || !picked.prompt) throw new Error("Invalid question item");
        resumePicked = buildHomeResumeQuestion(currentCatalog);
        basicsPicked = getHomeTestFirstQuestion(currentCatalog);
        var initialUsername = getSignedInHomepageUsername();
        var initialMode = initialUsername && resumePicked ? "resume" : "basics";
        if (initialMode === "resume" && resumePicked && shouldPreferLockedPicked("resume")) picked = resumePicked;
        if (initialMode === "basics" && basicsPicked && shouldPreferLockedPicked("basics")) picked = basicsPicked;
        currentPicked = picked;
        renderHomeTestCard(cardEl, promptEl, optionsEl, metaEl, fullQuizActionEl, picked);
        syncResumeAction();
      })
      .catch(function () {
        var fallbackCatalog = getHomeTestFallbackCatalog();
        currentCatalog = fallbackCatalog.slice();
        var pickedFallback = fallbackCatalog[pickStableSessionIndex(HOME_TEST_PICK_INDEX_KEY, fallbackCatalog.length)];
        resumePicked = buildHomeResumeQuestion(currentCatalog);
        basicsPicked = getHomeTestFirstQuestion(currentCatalog);
        var fallbackUsername = getSignedInHomepageUsername();
        var fallbackMode = fallbackUsername && resumePicked ? "resume" : "basics";
        if (fallbackMode === "resume" && resumePicked && shouldPreferLockedPicked("resume")) pickedFallback = resumePicked;
        if (fallbackMode === "basics" && basicsPicked && shouldPreferLockedPicked("basics")) pickedFallback = basicsPicked;
        currentPicked = pickedFallback;
        renderHomeTestCard(cardEl, promptEl, optionsEl, metaEl, fullQuizActionEl, pickedFallback);
        syncResumeAction();
      });
  }

  function setupHeroTagline() {
    var tagline = document.querySelector(".home-hero__tagline");
    if (!tagline) return;

    if (tagline._clwHomeTaglineRaf) {
      window.cancelAnimationFrame(tagline._clwHomeTaglineRaf);
      tagline._clwHomeTaglineRaf = 0;
    }
    if (tagline._clwHomeTaglineResizeHandler) {
      window.removeEventListener("resize", tagline._clwHomeTaglineResizeHandler);
      tagline._clwHomeTaglineResizeHandler = null;
    }
    if (tagline._clwHomeTaglineMoveHandler) {
      tagline.removeEventListener("pointermove", tagline._clwHomeTaglineMoveHandler);
      tagline._clwHomeTaglineMoveHandler = null;
    }
    if (tagline._clwHomeTaglineLeaveHandler) {
      tagline.removeEventListener("pointerleave", tagline._clwHomeTaglineLeaveHandler);
      tagline._clwHomeTaglineLeaveHandler = null;
    }

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
    var speedPxPerSec = 1152;
    var hueSpreadPx = 16;
    var dividerPaletteStops = [
      "#ef4444",
      "#f97316",
      "#eab308",
      "#22c55e",
      "#06b6d4",
      "#3b82f6",
      "#a855f7"
    ];

    function hexToRgbChannels(hex) {
      var value = String(hex || "").replace("#", "");
      return {
        r: parseInt(value.slice(0, 2), 16) || 0,
        g: parseInt(value.slice(2, 4), 16) || 0,
        b: parseInt(value.slice(4, 6), 16) || 0
      };
    }

    function rgbChannelsToHex(r, g, b) {
      return (
        "#" +
        [r, g, b]
          .map(function (channel) {
            var clamped = Math.max(0, Math.min(255, Math.round(channel)));
            return clamped.toString(16).padStart(2, "0");
          })
          .join("")
      );
    }

    function getDividerPaletteColor(progress) {
      var p = ((Number(progress) % 1) + 1) % 1;
      var stopCount = dividerPaletteStops.length;
      if (stopCount < 2) return dividerPaletteStops[0] || "#ef4444";
      var scaled = p * stopCount;
      var indexA = Math.floor(scaled) % stopCount;
      var indexB = (indexA + 1) % stopCount;
      var t = scaled - Math.floor(scaled);
      var a = hexToRgbChannels(dividerPaletteStops[indexA]);
      var b = hexToRgbChannels(dividerPaletteStops[indexB]);
      return rgbChannelsToHex(
        a.r + (b.r - a.r) * t,
        a.g + (b.g - a.g) * t,
        a.b + (b.b - a.b) * t
      );
    }

    function animateBand(timestamp) {
      var flow = (timestamp / 1000) * speedPxPerSec;
      letters.forEach(function (letter) {
        var x = parseFloat(letter.style.getPropertyValue("--letter-x")) || 0;
        var progress = (flow / hueSpreadPx + x / hueSpreadPx) / 360;
        letter.style.setProperty("--letter-color", getDividerPaletteColor(progress));
      });
      animationId = window.requestAnimationFrame(animateBand);
      tagline._clwHomeTaglineRaf = animationId;
    }

    syncBandMetrics();
    var onResize = function () {
      syncBandMetrics();
    };
    window.addEventListener("resize", onResize);
    animationId = window.requestAnimationFrame(animateBand);
    tagline._clwHomeTaglineResizeHandler = onResize;
    tagline._clwHomeTaglineRaf = animationId;

    var onMove = function (event) {
      var target = event.target.closest(".home-hero__letter");
      if (!target || !tagline.contains(target)) return;

      clearTaglineEffect(letters);
      target.classList.add("is-active");
    };
    var onLeave = function () {
      clearTaglineEffect(letters);
    };
    tagline.addEventListener("pointermove", onMove);
    tagline.addEventListener("pointerleave", onLeave);
    tagline._clwHomeTaglineMoveHandler = onMove;
    tagline._clwHomeTaglineLeaveHandler = onLeave;
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyHomepageLocaleChrome();
    setupHeroTagline();
    setupHomeLearnSpotlight();
    setupHomeGameSpotlight();
    setupHomeTestSpotlight();
    setupHomeCommunitySpotlight();

    var section = document.querySelector("[data-theme-picker]");
    if (!section || !window.CLWTheme) return;
    var modeSelect = section.querySelector("[data-theme-mode]");
    var wheelInput = section.querySelector("[data-theme-wheel]");
    var wheelCanvas = section.querySelector("[data-theme-wheel-canvas]");

    section.querySelectorAll("[data-theme-option]").forEach(function (btn) {
      btn.setAttribute("role", "radio");
    });

    var storedWheelColor = readStoredValue(WHEEL_COLOR_STORAGE_KEY, "#00b4d8");
    if (wheelInput && /^#([a-f0-9]{6})$/i.test(storedWheelColor)) {
      wheelInput.value = storedWheelColor;
    }

    var storedMode = readStoredValue(MODE_STORAGE_KEY, "default");
    setupWheelPicker(wheelCanvas, wheelInput, function (hex) {
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

  var lastLocale = getHomeLocale();
  document.addEventListener("clw:locale-changed", function (event) {
    var nextLocale = event && event.detail && event.detail.locale ? String(event.detail.locale) : getHomeLocale();
    if (nextLocale !== "zh" && nextLocale !== "en") nextLocale = getHomeLocale();
    if (nextLocale === lastLocale) return;
    lastLocale = nextLocale;
    applyHomepageLocaleChrome();
    setupHeroTagline();
    setupHomeLearnSpotlight();
  });
})();
