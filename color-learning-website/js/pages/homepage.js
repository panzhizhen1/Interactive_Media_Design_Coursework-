/**
 * Homepage: theme picker UI (default mode only; RGB/HSV reserved).
 */
(function () {
  "use strict";

  var MODE_STORAGE_KEY = "clw_theme_mode";
  var WHEEL_COLOR_STORAGE_KEY = "clw_theme_wheel_color";
  var HOME_GAME_PICK_INDEX_KEY = "clw_home_game_pick_index";
  var HOME_TEST_PICK_INDEX_KEY = "clw_home_test_pick_index";
  var HOME_LEARN_PICK_INDEX_KEY = "clw_home_learn_pick_index";
  var HOME_LEARN_VIEW_MODE_KEY = "clw_home_learn_view_mode";
  var HOME_LEARN_MODEL_PICK_INDEX_KEY = "clw_home_learn_model_pick_index";
  var HOME_COMMUNITY_PICK_INDEX_KEY = "clw_home_community_pick_index";
  var COMMUNITY_ACTIVITY_LOG_KEY = "clw_activity_log_v1";
  var COMMUNITY_ACCOUNTS_KEY = "clw_accounts_v1";
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
      category: locationParts[0] || "Learning",
      path: locationParts.slice(1).join(" · ") || "Key section"
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
    return branch + " · " + String(sectionTitle || "Section");
  }

  function loadLearnTopicCatalog() {
    return fetch("js/pages/learn/learning-content.js")
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
    var linkEl = document.querySelector("[data-home-learn-link]");
    var titleEl = document.querySelector("[data-home-learn-title]");
    var subEl = document.querySelector("[data-home-learn-sub]");
    var topicEl = document.querySelector("[data-home-learn-topic]");
    var snippetEl = document.querySelector("[data-home-learn-snippet]");
    var metaEl = document.querySelector("[data-home-learn-meta]");
    if (!linkEl || !titleEl || !topicEl || !snippetEl || !metaEl) return;
    var noteEl = linkEl.querySelector(".home-learn__note");
    var interactiveModeActive = false;
    var interactiveSavedHref = "";

    if (linkEl.dataset.learnInteractiveClickBound !== "true") {
      linkEl.dataset.learnInteractiveClickBound = "true";
      linkEl.addEventListener("click", function (event) {
        if (!interactiveModeActive) return;
        var target = event.target;
        if (target && target.closest && target.closest(".home-learn-model__range")) {
          event.preventDefault();
        }
      });
    }

    function setLearnLinkInteractiveLock(lock) {
      if (lock) {
        if (!interactiveSavedHref) interactiveSavedHref = linkEl.getAttribute("href") || "learning.html#basic-color-models";
        return;
      }
      if (interactiveSavedHref) {
        linkEl.setAttribute("href", interactiveSavedHref);
      }
    }

    function setLearnSlogan(isInteractive) {
      if (!subEl) return;
      subEl.textContent = isInteractive ? "See Color in Action!" : "Learn a Color Concept!";
    }

    function hslToHex(h, s, l) {
      var hue = ((Number(h) % 360) + 360) % 360;
      var sat = Math.max(0, Math.min(100, Number(s))) / 100;
      var lit = Math.max(0, Math.min(100, Number(l))) / 100;
      var c = (1 - Math.abs(2 * lit - 1)) * sat;
      var x = c * (1 - Math.abs((hue / 60) % 2 - 1));
      var m = lit - c / 2;
      var r1 = 0, g1 = 0, b1 = 0;
      if (hue < 60) { r1 = c; g1 = x; }
      else if (hue < 120) { r1 = x; g1 = c; }
      else if (hue < 180) { g1 = c; b1 = x; }
      else if (hue < 240) { g1 = x; b1 = c; }
      else if (hue < 300) { r1 = x; b1 = c; }
      else { r1 = c; b1 = x; }
      var r = Math.round((r1 + m) * 255);
      var g = Math.round((g1 + m) * 255);
      var b = Math.round((b1 + m) * 255);
      return "#" + [r, g, b].map(function (v) {
        return Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0");
      }).join("");
    }

    function rgbToHex(r, g, b) {
      return "#" + [r, g, b].map(function (v) {
        return Math.max(0, Math.min(255, Number(v) || 0)).toString(16).padStart(2, "0");
      }).join("");
    }

    function hsvToRgb(h, s, v) {
      var hue = ((Number(h) % 360) + 360) % 360;
      var sat = Math.max(0, Math.min(100, Number(s))) / 100;
      var val = Math.max(0, Math.min(100, Number(v))) / 100;
      var c = val * sat;
      var x = c * (1 - Math.abs((hue / 60) % 2 - 1));
      var m = val - c;
      var r1 = 0, g1 = 0, b1 = 0;
      if (hue < 60) { r1 = c; g1 = x; }
      else if (hue < 120) { r1 = x; g1 = c; }
      else if (hue < 180) { g1 = c; b1 = x; }
      else if (hue < 240) { g1 = x; b1 = c; }
      else if (hue < 300) { r1 = x; b1 = c; }
      else { r1 = c; b1 = x; }
      return {
        r: Math.round((r1 + m) * 255),
        g: Math.round((g1 + m) * 255),
        b: Math.round((b1 + m) * 255)
      };
    }

    function cmykToRgb(c, m, y, k) {
      var cc = Math.max(0, Math.min(100, Number(c))) / 100;
      var mm = Math.max(0, Math.min(100, Number(m))) / 100;
      var yy = Math.max(0, Math.min(100, Number(y))) / 100;
      var kk = Math.max(0, Math.min(100, Number(k))) / 100;
      return {
        r: Math.round(255 * (1 - cc) * (1 - kk)),
        g: Math.round(255 * (1 - mm) * (1 - kk)),
        b: Math.round(255 * (1 - yy) * (1 - kk))
      };
    }

    function rgbToColorName(r, g, b) {
      var rr = Number(r) || 0;
      var gg = Number(g) || 0;
      var bb = Number(b) || 0;
      var max = Math.max(rr, gg, bb);
      var min = Math.min(rr, gg, bb);
      var light = (max + min) / 2;
      var delta = max - min;
      if (light < 28) return "Deep Black";
      if (light > 235 && delta < 16) return "Soft White";
      if (delta < 18) return light > 150 ? "Light Gray" : "Slate Gray";

      var hue = 0;
      if (delta !== 0) {
        if (max === rr) hue = ((gg - bb) / delta) % 6;
        else if (max === gg) hue = (bb - rr) / delta + 2;
        else hue = (rr - gg) / delta + 4;
        hue *= 60;
        if (hue < 0) hue += 360;
      }

      var base = "Color";
      if (hue < 15 || hue >= 345) base = "Red";
      else if (hue < 40) base = "Orange";
      else if (hue < 65) base = "Yellow";
      else if (hue < 155) base = "Green";
      else if (hue < 195) base = "Cyan";
      else if (hue < 255) base = "Blue";
      else if (hue < 300) base = "Purple";
      else base = "Pink";

      if (light > 200) return "Light " + base;
      if (light < 70) return "Deep " + base;
      return base;
    }

    function renderLearnInteractiveModel() {
      var modelDefs = [
        {
          id: "rgb",
          title: "RGB Interactive Mixer",
          subtitle: "Adjust channels to preview digital colour output",
          params: [
            { key: "R", min: 0, max: 255, value: 128 },
            { key: "G", min: 0, max: 255, value: 148 },
            { key: "B", min: 0, max: 255, value: 220 }
          ],
          toRgb: function (values) { return { r: values.R, g: values.G, b: values.B }; }
        },
        {
          id: "hsv",
          title: "HSV Interactive Mixer",
          subtitle: "Drag hue, saturation, and value to explore color behavior",
          params: [
            { key: "H", min: 0, max: 360, value: 240 },
            { key: "S", min: 0, max: 100, value: 55 },
            { key: "V", min: 0, max: 100, value: 86 }
          ],
          toRgb: function (values) { return hsvToRgb(values.H, values.S, values.V); }
        },
        {
          id: "cmyk",
          title: "CMYK Interactive Mixer",
          subtitle: "Adjust cyan, magenta, yellow, and key for print-style color mixing",
          params: [
            { key: "C", min: 0, max: 100, value: 80 },
            { key: "M", min: 0, max: 100, value: 20 },
            { key: "Y", min: 0, max: 100, value: 0 },
            { key: "K", min: 0, max: 100, value: 10 }
          ],
          toRgb: function (values) { return cmykToRgb(values.C, values.M, values.Y, values.K); }
        }
      ];
      var model = modelDefs[pickStableSessionIndex(HOME_LEARN_MODEL_PICK_INDEX_KEY, modelDefs.length)];
      if (!model) return false;

      interactiveModeActive = true;
      if (noteEl) noteEl.classList.add("home-learn__note--interactive");
      topicEl.textContent = model.title;
      snippetEl.classList.add("home-learn__snippet--interactive");
      snippetEl.innerHTML =
        '<div class="home-learn-model" data-home-learn-model>' +
        '<p class="home-learn-model__desc">' + escapeHtmlText(model.subtitle) + "</p>" +
        '<div class="home-learn-model__head">' +
        '<div class="home-learn-model__swatch" data-home-learn-swatch></div>' +
        '<div class="home-learn-model__name-wrap">' +
        '<p class="home-learn-model__name-line"><span class="home-learn-model__name-label">Current Color</span><span class="home-learn-model__name" data-home-learn-name>Blue</span></p>' +
        '<p class="home-learn-model__hex" data-home-learn-hex>#000000</p>' +
        "</div>" +
        "</div>" +
        model.params.map(function (param) {
          return (
            '<label class="home-learn-model__row">' +
            '<span class="home-learn-model__label">' + escapeHtmlText(param.key) + "</span>" +
            '<input class="home-learn-model__range" type="range" min="' + param.min + '" max="' + param.max + '" value="' + param.value + '" data-key="' + escapeHtmlText(param.key) + '">' +
            '<span class="home-learn-model__value" data-value-for="' + escapeHtmlText(param.key) + '">' + param.value + "</span>" +
            "</label>"
          );
        }).join("") +
        "</div>";

      var root = snippetEl.querySelector("[data-home-learn-model]");
      var swatchEl = snippetEl.querySelector("[data-home-learn-swatch]");
      var hexEl = snippetEl.querySelector("[data-home-learn-hex]");
      var nameEl = snippetEl.querySelector("[data-home-learn-name]");
      if (!root || !swatchEl || !hexEl || !nameEl) return false;

      function updateModelPreview() {
        var values = {};
        model.params.forEach(function (param) {
          var input = root.querySelector('[data-key="' + param.key + '"]');
          var value = input ? Number(input.value) : param.value;
          values[param.key] = value;
          var valueEl = root.querySelector('[data-value-for="' + param.key + '"]');
          if (valueEl) valueEl.textContent = String(value);
        });
        var rgb = model.toRgb(values);
        var colorHex = rgbToHex(rgb.r, rgb.g, rgb.b);
        swatchEl.style.background = colorHex;
        hexEl.textContent = colorHex.toUpperCase();
        nameEl.textContent = rgbToColorName(rgb.r, rgb.g, rgb.b);
      }

      root.querySelectorAll(".home-learn-model__range").forEach(function (input) {
        input.addEventListener("pointerdown", function (event) { event.stopPropagation(); });
        input.addEventListener("mousedown", function (event) { event.stopPropagation(); });
        input.addEventListener("touchstart", function (event) { event.stopPropagation(); }, { passive: true });
        input.addEventListener("click", function (event) {
          event.stopPropagation();
          event.preventDefault();
        });
        input.addEventListener("input", updateModelPreview);
      });
      updateModelPreview();

      metaEl.textContent = "Learning Module · Interactive · Color Models";
      interactiveSavedHref = "learning.html?from=home-learn&focusScope=parent&focusParent=" + encodeURIComponent("Colour Models") + "#basic-color-models";
      linkEl.setAttribute("href", interactiveSavedHref);
      linkEl.setAttribute("aria-label", "Open Learn module interactive color model");
      return true;
    }

    function renderLearnSummary(summary) {
      interactiveModeActive = false;
      if (noteEl) noteEl.classList.remove("home-learn__note--interactive");
      setLearnLinkInteractiveLock(false);
      if (!summary || !summary.previewHtml) {
        topicEl.textContent = "What is Colour Encoding?";
        snippetEl.classList.remove("home-learn__snippet--interactive");
        snippetEl.innerHTML = "<h3>Key Notes</h3><p>Explore how color information is represented and used across devices and media.</p>";
        metaEl.textContent = "Overview · Colour Encoding Overview";
        return;
      }

      topicEl.textContent = summary.title || "Key Points";
      snippetEl.classList.remove("home-learn__snippet--interactive");
      snippetEl.innerHTML = summary.previewHtml;
      metaEl.textContent = (summary.category || "Learning") + " · " + (summary.path || "Key section");
    }

    function buildLearnDeepLink(sectionKey, summary, fallbackHeading) {
      var hashKey = encodeURIComponent(String(sectionKey || "overview"));
      var parentText = toPlainText((summary && summary.title) || fallbackHeading || "");
      var childText = toPlainText((summary && (summary.anchorText || summary.subtitle)) || "");
      var query = ["from=home-learn"];
      if (parentText) query.push("focusParent=" + encodeURIComponent(clipWithEllipsis(parentText, 90)));
      if (childText) query.push("focusChild=" + encodeURIComponent(clipWithEllipsis(childText, 90)));
      return "learning.html?" + query.join("&") + "#" + hashKey;
    }

    titleEl.textContent = "Learn Colors the Smart Way";
    setLearnSlogan(false);
    loadLearnTopicCatalog()
      .then(function (catalog) {
        if (!Array.isArray(catalog) || !catalog.length) throw new Error("Empty learn catalog");
        var interactiveMode = pickStableSessionIndex(HOME_LEARN_VIEW_MODE_KEY, 100) < 34;
        if (interactiveMode && renderLearnInteractiveModel()) {
          setLearnSlogan(true);
          return;
        }
        var sessionSeedIndex = pickStableSessionIndex(HOME_LEARN_PICK_INDEX_KEY, catalog.length);
        var picked = catalog[sessionSeedIndex];
        if (!picked || !picked.summary) throw new Error("Invalid learn item");
        setLearnSlogan(false);
        renderLearnSummary(picked.summary);
        interactiveSavedHref = buildLearnDeepLink(picked.sectionKey, picked.summary, picked.heading);
        linkEl.href = interactiveSavedHref;
        linkEl.setAttribute("aria-label", "Open Learn module topic: " + String(picked.summary.title || picked.heading || "Learn topic"));
      })
      .catch(function () {
        setLearnSlogan(false);
        renderLearnSummary(null);
        interactiveSavedHref = "learning.html#overview";
        linkEl.href = interactiveSavedHref;
      });
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

  function normalizeCommunityPost(post) {
    if (!post || typeof post !== "object") return null;
    var content = clipWithEllipsis(toPlainText(post.content || ""), 190);
    if (!content) return null;
    var author = post.author ? String(post.author).trim() : "Guest";
    var tag = post.tag ? String(post.tag).trim() : "#Community";
    return {
      id: post.id ? String(post.id).trim() : "",
      author: author || "Guest",
      tag: tag || "#Community",
      content: content
    };
  }

  function loadCommunityPostCatalog() {
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
    var pointsMap = {
      studentA: 120,
      studentB: 95,
      studentC: 82
    };

    var activityRows = readStoredJson(COMMUNITY_ACTIVITY_LOG_KEY, []);
    if (Array.isArray(activityRows)) {
      activityRows.forEach(function (item) {
        if (!item || typeof item !== "object") return;
        if (item.source !== "community") return;
        var username = item.username ? String(item.username).trim() : "";
        if (!username) return;
        var delta = Number(item.pointsDelta || 0);
        if (Number.isNaN(delta)) return;
        pointsMap[username] = Number(pointsMap[username] || 0) + delta;
      });
    }

    var accountsStore = readStoredJson(COMMUNITY_ACCOUNTS_KEY, { users: {} });
    var users = accountsStore && accountsStore.users && typeof accountsStore.users === "object" ? accountsStore.users : {};
    Object.keys(users).forEach(function (username) {
      var points = Number(users[username] && users[username].stats ? users[username].stats.points || 0 : 0);
      if (Number.isNaN(points)) points = 0;
      pointsMap[username] = Number(pointsMap[username] || 0) + points;
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
  }

  function setupHomeCommunitySpotlight() {
    var cardEl = document.querySelector(".home-card--community-spotlight");
    var noticeLinkEl = document.querySelector("[data-home-community-notice-link]");
    var postLinkEl = document.querySelector("[data-home-community-post-link]");
    var titleEl = document.querySelector("[data-home-community-title]");
    var avatarEl = document.querySelector("[data-home-community-avatar]");
    var authorEl = document.querySelector("[data-home-community-author]");
    var tagEl = document.querySelector("[data-home-community-tag]");
    var postEl = document.querySelector("[data-home-community-post]");
    var bubbleEl = postLinkEl ? postLinkEl.querySelector(".home-community__bubble") : null;
    if (!cardEl || !noticeLinkEl || !postLinkEl || !titleEl || !avatarEl || !authorEl || !tagEl || !postEl || !bubbleEl) return;

    var leaderboardEl = bubbleEl.querySelector(".home-community__leaderboard");
    if (!leaderboardEl) {
      leaderboardEl = document.createElement("section");
      leaderboardEl.className = "home-community__leaderboard";
      leaderboardEl.setAttribute("aria-label", "Community leaderboard preview");
      bubbleEl.appendChild(leaderboardEl);
    }

    function renderCommunityPost(item) {
      if (!item) return;
      var initial = item.author && item.author.charAt(0) ? item.author.charAt(0).toUpperCase() : "U";
      avatarEl.textContent = initial;
      authorEl.textContent = "@" + item.author;
      tagEl.textContent = item.tag || "#Community";
      postEl.textContent = item.content;
      postLinkEl.setAttribute("aria-label", "Open community post list, highlighted from @" + item.author);
      var postHref = "community-posts.html?from=home-community";
      if (item.id) postHref += "&postId=" + encodeURIComponent(item.id);
      postLinkEl.href = postHref;
      bubbleEl.classList.remove("home-community__bubble--leaderboard");
    }

    function renderCommunityLeaderboard(rows) {
      var list = Array.isArray(rows) ? rows : [];
      leaderboardEl.innerHTML =
        '<h4 class="home-community__leaderboard-title">All-time Top Learners</h4>' +
        '<ol class="home-community__leaderboard-list">' +
        list
          .map(function (row, index) {
            return (
              '<li class="home-community__leaderboard-item">' +
              '<span class="home-community__leaderboard-rank">' + String(index + 1) + "</span>" +
              '<span class="home-community__leaderboard-name">@' + escapeHtmlText(row.username) + "</span>" +
              '<strong class="home-community__leaderboard-points">' + String(row.points) + " pts</strong>" +
              "</li>"
            );
          })
          .join("") +
        "</ol>";
      postLinkEl.setAttribute("aria-label", "Open community page leaderboard");
      postLinkEl.href = "community.html?from=home-community&focus=leaderboard#alltime-title";
      bubbleEl.classList.add("home-community__bubble--leaderboard");
    }

    function renderCommunityItem(item) {
      if (!item || typeof item !== "object") return;
      if (item.type === "leaderboard") {
        renderCommunityLeaderboard(item.rows);
        return;
      }
      renderCommunityPost(item);
    }

    titleEl.textContent = "👥 Join the Color Community";
    noticeLinkEl.href = "community.html";
    postLinkEl.href = "community-posts.html?from=home-community";
    var pauseRotation = false;
    cardEl.addEventListener("pointerenter", function () {
      pauseRotation = true;
    });
    cardEl.addEventListener("pointerleave", function () {
      pauseRotation = false;
    });

    loadCommunityPostCatalog()
      .then(function (catalog) {
        if (!Array.isArray(catalog) || !catalog.length) throw new Error("Empty community catalog");
        var items = catalog.slice();
        var leaderboardRows = buildHomeCommunityLeaderboardRows(4);
        if (leaderboardRows.length) {
          items.push({ type: "leaderboard", rows: leaderboardRows });
        }

        var currentIndex = pickStableSessionIndex(HOME_COMMUNITY_PICK_INDEX_KEY, items.length);
        var picked = items[currentIndex];
        if (!picked) throw new Error("Invalid community item");
        renderCommunityItem(picked);

        if (items.length < 2) return;
        var switching = false;
        window.setInterval(function () {
          if (switching || document.hidden || pauseRotation) return;
          switching = true;
          bubbleEl.classList.remove("home-community__bubble--slide-in");
          bubbleEl.classList.add("home-community__bubble--slide-out");
          window.setTimeout(function () {
            currentIndex = (currentIndex + 1) % items.length;
            renderCommunityItem(items[currentIndex]);
            bubbleEl.classList.remove("home-community__bubble--slide-out");
            bubbleEl.classList.add("home-community__bubble--slide-in");
            window.setTimeout(function () {
              bubbleEl.classList.remove("home-community__bubble--slide-in");
              switching = false;
            }, HOME_COMMUNITY_SWITCH_IN_MS + 40);
          }, HOME_COMMUNITY_SWITCH_OUT_MS);
        }, HOME_COMMUNITY_ROTATE_MS);
      })
      .catch(function () {
        renderCommunityItem({
          author: "colorLearner",
          tag: "#Community",
          content: "Share one color insight, palette, or learning takeaway with peers in the community."
        });
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
        previewLink.setAttribute("aria-label", "Start your color challenge with " + drawingName);
        if (previewTitle) previewTitle.textContent = "Start your color challenge: " + drawingName + "!";
      })
      .catch(function () {
        previewLink.href = "game.html";
        if (previewTitle) previewTitle.textContent = "Start your color challenge!";
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

  function loadTestQuestionCatalog() {
    return fetch("js/pages/test.js")
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

  function formatTestBreadcrumb(picked) {
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
        prompt: "Which pair is complementary on a simple color wheel?",
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
        prompt: "Why is an ICC profile useful in a color workflow?",
        optionTexts: [
          "It maps color values between devices more consistently",
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
        unitFocusLabel: "Wide Color Gamut",
        questionIndex: 0,
        prompt: "A wider color gamut display mainly allows what?",
        optionTexts: [
          "Showing more saturated and varied colors",
          "Always reducing file size",
          "Removing the need for tone mapping",
          "Guaranteeing perfect print matching"
        ]
      }
    ];
  }

  function renderHomeTestCard(linkEl, promptEl, optionsEl, metaEl, picked) {
    if (!linkEl || !promptEl || !optionsEl || !metaEl || !picked) return;
    promptEl.textContent = picked.prompt || "Tap to jump into a random color challenge question.";
    var optionRows = Array.isArray(picked.optionTexts) ? picked.optionTexts.slice(0, 4) : [];
    if (optionRows.length) {
      optionsEl.innerHTML = optionRows
        .map(function (text, index) {
          return (
            '<p class="home-test__option" data-home-test-option-index="' + index + '">' +
            '<span class="home-test__option-key">' + String.fromCharCode(65 + (index % 26)) + "</span>" +
            '<span class="home-test__option-text">' + escapeHtmlText(clipWithEllipsis(text, 72)) + "</span>" +
            "</p>"
          );
        })
        .join("");
    } else {
      optionsEl.innerHTML = '<p class="home-test__option"><span class="home-test__option-key">i</span><span class="home-test__option-text">Open to view options</span></p>';
    }
    metaEl.textContent = formatTestBreadcrumb(picked);
    linkEl.href = buildHomeTestQuizHref(picked);
    linkEl.setAttribute("aria-label", "Open test question: " + String(picked.prompt || "Random question"));
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
    var linkEl = document.querySelector("[data-home-test-link]");
    var promptEl = document.querySelector("[data-home-test-prompt]");
    var optionsEl = document.querySelector("[data-home-test-options]");
    var metaEl = document.querySelector("[data-home-test-meta]");
    if (!linkEl || !promptEl || !metaEl || !optionsEl) return;
    var currentPicked = null;

    linkEl.addEventListener("click", function (event) {
      if (!currentPicked || !event || !event.target || !event.target.closest) return;
      var optionEl = event.target.closest("[data-home-test-option-index]");
      if (!optionEl || !optionsEl.contains(optionEl)) return;
      var pickedOptionIndex = Number.parseInt(optionEl.getAttribute("data-home-test-option-index"), 10);
      if (!Number.isFinite(pickedOptionIndex) || pickedOptionIndex < 0) return;
      event.preventDefault();
      window.location.href = buildHomeTestQuizHref(currentPicked, pickedOptionIndex);
    });

    loadTestQuestionCatalog()
      .then(function (catalog) {
        if (!Array.isArray(catalog) || !catalog.length) throw new Error("Empty question catalog");
        var picked = catalog[pickStableSessionIndex(HOME_TEST_PICK_INDEX_KEY, catalog.length)];
        if (!picked || !picked.prompt) throw new Error("Invalid question item");
        currentPicked = picked;
        renderHomeTestCard(linkEl, promptEl, optionsEl, metaEl, picked);
      })
      .catch(function () {
        var fallbackCatalog = getHomeTestFallbackCatalog();
        var pickedFallback = fallbackCatalog[pickStableSessionIndex(HOME_TEST_PICK_INDEX_KEY, fallbackCatalog.length)];
        currentPicked = pickedFallback;
        renderHomeTestCard(linkEl, promptEl, optionsEl, metaEl, pickedFallback);
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
    var speedPxPerSec = 100;
    var hueSpreadPx = 16;

    function animateBand(timestamp) {
      var flow = (timestamp / 1000) * speedPxPerSec;
      letters.forEach(function (letter) {
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
})();
