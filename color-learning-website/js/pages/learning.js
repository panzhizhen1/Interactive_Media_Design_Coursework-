// Learning page scripts

import { contentData } from './learn/learning-content.js';
import { ColorPicker } from './learn/interaction-color-picker.js';
import { VisualExample } from './learn/ineraction-visual-example.js';
import { InteractionTools } from './learn/interaction-tools.js';

(function() {
  'use strict';

  // DOM elements
  const sidebar = document.getElementById('learning-sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const menuToggles = document.querySelectorAll('.learning-menu__toggle');
  const menuLinks = document.querySelectorAll('.learning-menu__link');
  const contentTitle = document.getElementById('content-title');
  const contentDescription = document.getElementById('content-description');
  const shareNoteInput = document.querySelector('[data-learning-note]');
  const shareBtn = document.querySelector('[data-learning-share]');
  const shareStatus = document.querySelector('[data-learning-share-status]');
  const COMMUNITY_DRAFT_KEY = 'clw_community_draft_v1';
  
  // Interaction module instances
  let colorPickerInstance = null;
  let visualExampleInstance = null;
  let interactionToolsInstance = null;
  const HOME_LEARN_HIGHLIGHT_PARAM = 'from';
  const HOME_LEARN_HIGHLIGHT_VALUE = 'home-learn';

  // Initialize
  function init() {
    setupSidebarToggle();
    setupAccordionMenu();
    setupNavigationLinks();
    handleInitialRoute();
    setupHashChangeListener();
    setupCommunityShare();
  }

  function getRouteFocusHints() {
    try {
      const url = new URL(window.location.href);
      return {
        fromHomeLearn: url.searchParams.get(HOME_LEARN_HIGHLIGHT_PARAM) === HOME_LEARN_HIGHLIGHT_VALUE,
        scope: String(url.searchParams.get('focusScope') || '').trim().toLowerCase(),
        parent: String(url.searchParams.get('focusParent') || '').trim(),
        child: String(url.searchParams.get('focusChild') || '').trim()
      };
    } catch (e) {
      return { fromHomeLearn: false, scope: '', parent: '', child: '' };
    }
  }

  function shouldAnimateHomeJumpTitle() {
    const hints = getRouteFocusHints();
    return !!(hints.fromHomeLearn || hints.parent || hints.child);
  }

  function consumeHomeJumpTitleFlag() {
    try {
      const url = new URL(window.location.href);
      const before = url.toString();
      url.searchParams.delete(HOME_LEARN_HIGHLIGHT_PARAM);
      url.searchParams.delete('focusParent');
      url.searchParams.delete('focusChild');
      const after = url.toString();
      if (before !== after) {
        window.history.replaceState({}, '', after);
      }
    } catch (e) {
      /* ignore */
    }
  }

  function normalizeMatchText(text) {
    return String(text || '')
      .toLowerCase()
      .replace(/[\u2018\u2019\u201c\u201d]/g, "'")
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function findBestHeadingMatch(nodes, targetRaw) {
    const target = normalizeMatchText(targetRaw);
    if (!target || !Array.isArray(nodes) || !nodes.length) return null;
    let best = null;
    nodes.forEach(function(node) {
      const text = normalizeMatchText(node.textContent || '');
      if (!text) return;
      let score = 0;
      if (text === target) score = 120;
      else if (text.includes(target)) score = 90 - Math.max(0, text.length - target.length);
      else if (target.includes(text)) score = 70 - Math.max(0, target.length - text.length);
      if (!best || score > best.score) best = { node: node, score: score };
    });
    return best && best.score > 0 ? best.node : null;
  }

  function pickRouteHighlightElement() {
    const hints = getRouteFocusHints();
    if (hints.scope === 'parent') {
      return contentTitle || null;
    }
    const sectionHeadings = Array.from(document.querySelectorAll('.section-heading'));
    const parentHeading = findBestHeadingMatch(sectionHeadings, hints.parent);

    if (hints.child) {
      const localScope = parentHeading && parentHeading.closest('.content-section')
        ? parentHeading.closest('.content-section')
        : document;
      const localSubHeadings = Array.from(localScope.querySelectorAll('.section-content h4, .section-content h3'));
      const localHit = findBestHeadingMatch(localSubHeadings, hints.child);
      if (localHit) return localHit;

      const globalSubHeadings = Array.from(document.querySelectorAll('.section-content h4, .section-content h3'));
      const globalHit = findBestHeadingMatch(globalSubHeadings, hints.child);
      if (globalHit) return globalHit;
    }

    if (parentHeading) return parentHeading;
    return contentTitle || null;
  }

  function animateCurrentTitleHint() {
    const target = pickRouteHighlightElement();
    if (!target) return;
    if (typeof target.scrollIntoView === 'function') {
      if (target !== contentTitle) {
        target.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }
    const className = target === contentTitle
      ? 'learning-content__title--route-highlight'
      : 'section-heading--route-highlight';
    target.classList.remove(className);
    window.requestAnimationFrame(function() {
      window.requestAnimationFrame(function() {
        target.classList.add(className);
      });
    });
    window.setTimeout(function() {
      target.classList.remove(className);
    }, 2100);
  }

  function getSectionKeyFromHash() {
    const raw = String(window.location.hash || '').replace(/^#/, '').trim();
    if (!raw) return '';
    // Support URLs like "#basic-color-models:~:text=..."
    const withoutTextFragment = raw.split(':~:')[0];
    const decoded = decodeURIComponent(withoutTextFragment || '').trim();
    return decoded;
  }

  function setShareStatus(message) {
    if (!shareStatus) return;
    shareStatus.textContent = message || '';
  }

  function setupCommunityShare() {
    if (!shareBtn || !shareNoteInput) return;
    shareBtn.addEventListener('click', function() {
      const note = String(shareNoteInput.value || '').trim();
      if (note.length < 8) {
        setShareStatus('Write at least 8 characters before sharing.');
        shareNoteInput.focus();
        return;
      }

      const sectionKey = getSectionKeyFromHash() || 'overview';
      const sectionTitle = contentTitle ? contentTitle.textContent : 'Learning note';
      const draft = {
        content: note,
        tag: '#Color_Theory',
        colorHex: '#2b78e4',
        paletteHexes: ['#2b78e4', '#93c5fd', '#0f172a'],
        origin: 'learning',
        originMeta: {
          section: sectionTitle,
          sectionKey: sectionKey
        },
        updatedAt: new Date().toISOString()
      };

      try {
        localStorage.setItem(COMMUNITY_DRAFT_KEY, JSON.stringify(draft));
      } catch (error) {
        setShareStatus('Failed to save draft locally. Please try again.');
        return;
      }

      const auth = window.CLWAuth || null;
      if (auth && auth.recordActivity && auth.getCurrentUsername) {
        const username = auth.getCurrentUsername();
        if (username) {
          auth.recordActivity(username, {
            pointsDelta: 2,
            postDelta: 0,
            source: 'learning',
            type: 'note_share',
            refId: sectionKey || 'overview'
          });
        }
      }

      document.dispatchEvent(new CustomEvent('clw:community-draft-updated', { detail: { origin: 'learning', section: sectionTitle } }));
      setShareStatus('Draft sent. Redirecting to Community...');
      window.location.href = 'community.html';
    });
  }

  // Setup sidebar toggle for mobile
  function setupSidebarToggle() {
    if (!sidebarToggle || !sidebar) return;

    sidebarToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      sidebar.classList.toggle('is-open');
    });
  }

  // Setup accordion menu functionality
  function setupAccordionMenu() {
    menuToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        const parent = this.getAttribute('data-parent');
        const submenu = document.getElementById('submenu-' + parent);

        if (!submenu) return;

        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        // Close sibling menus at the same level
        closeSiblingMenus(this);

        // Toggle current menu
        this.setAttribute('aria-expanded', !isExpanded);
        submenu.classList.toggle('is-open');
      });
    });
  }

  // Close sibling menus
  function closeSiblingMenus(currentToggle) {
    const parentLi = currentToggle.closest('.learning-menu__item');
    if (!parentLi) return;

    const siblingToggles = parentLi.parentElement.querySelectorAll(':scope > .learning-menu__item > .learning-menu__toggle');

    siblingToggles.forEach(function(sibling) {
      if (sibling !== currentToggle) {
        const parent = sibling.getAttribute('data-parent');
        const submenu = document.getElementById('submenu-' + parent);

        if (submenu) {
          sibling.setAttribute('aria-expanded', 'false');
          submenu.classList.remove('is-open');
        }
      }
    });
  }

  // Setup navigation links
  function setupNavigationLinks() {
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        const section = this.getAttribute('data-section');
        if (!section) return;

        // Update active state
        updateActiveLink(this);

        // Update content
        loadContent(section);

        // Update URL hash
        window.location.hash = section;

        // Close sidebar on mobile after selection
        if (window.innerWidth < 1024 && sidebar) {
          sidebar.classList.remove('is-open');
          sidebarToggle.setAttribute('aria-expanded', 'false');
        }

        // Scroll to top of content on mobile
        if (window.innerWidth < 640) {
          document.querySelector('.learning-content').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // Update active link styling
  function updateActiveLink(activeLink) {
    menuLinks.forEach(function(link) {
      link.classList.remove('is-active');
    });
    activeLink.classList.add('is-active');
  }

  // Load content based on section
  function loadContent(section) {
    const content = contentData[section];

    if (!content) {
      contentTitle.textContent = 'Section Not Found';
      contentDescription.innerHTML = '<p>The requested section does not exist. Please select a valid topic from the sidebar.</p>';
      return;
    }

    // For overview page with rich content
    if (section === 'overview') {
      renderOverviewPage(content);
    } else if (content.sections) {
      // Rich content pages with sections
      renderRichContentPage(content);
      
      // Initialize interaction modules when their sections are loaded
      initializeInteractionModules(section);
    } else {
      // Simple content pages
      contentTitle.textContent = content.title;
      contentDescription.innerHTML = `<p>${content.description}</p>`;
    }
  }
  
  // Initialize interaction modules based on current section
  function initializeInteractionModules(section) {
    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(() => {
      switch(section) {
        case 'interaction-color-picker':
          if (!colorPickerInstance && document.getElementById('color-picker-container')) {
            colorPickerInstance = new ColorPicker();
            console.log('Color Picker initialized');
          }
          break;
          
        case 'interaction-visual-example':
          if (!visualExampleInstance && document.getElementById('visual-gallery')) {
            visualExampleInstance = new VisualExample();
            console.log('Visual Example initialized');
          }
          break;
          
        case 'interaction-interactive-tools':
          if (!interactionToolsInstance && document.getElementById('color-converter-tool')) {
            interactionToolsInstance = new InteractionTools();
            console.log('Interaction Tools initialized');
          }
          break;
      }
    }, 100);
  }

  // Render overview page with rich content
  function renderOverviewPage(content) {
    const container = document.querySelector('.learning-content__inner');

    // Build meta info
    const metaHTML = `
      <div class="content-meta">
        <span class="meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          ${content.meta.readingTime}
        </span>
        <span class="meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
          ${content.meta.difficulty}
        </span>
      </div>
    `;

    // Build subtitle
    const subtitleHTML = content.subtitle ?
        `<p class="content-subtitle">${content.subtitle}</p>` : '';

    // Build sections
    const sectionsHTML = content.sections.map(function(section) {
      return `
        <section class="content-section">
          <h2 class="section-heading">${section.heading}</h2>
          <div class="section-content">${section.content}</div>
        </section>
      `;
    }).join('');

    // Update DOM
    contentTitle.textContent = content.title;
    contentDescription.innerHTML = metaHTML + subtitleHTML + sectionsHTML;
  }

  // Render rich content page (like colour models)
  function renderRichContentPage(content) {
    // Build meta info
    const metaHTML = `
      <div class="content-meta">
        <span class="meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          ${content.meta.readingTime}
        </span>
        <span class="meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
          ${content.meta.difficulty}
        </span>
        ${content.meta.type ? `
        <span class="meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
          ${content.meta.type}
        </span>
        ` : ''}
      </div>
    `;

    // Build subtitle
    const subtitleHTML = content.subtitle ?
        `<p class="content-subtitle">${content.subtitle}</p>` : '';

    // Build sections
    const sectionsHTML = content.sections.map(function(section) {
      return `
        <section class="content-section">
          <h2 class="section-heading">${section.heading}</h2>
          <div class="section-content">${section.content}</div>
        </section>
      `;
    }).join('');

    // Update DOM
    contentTitle.textContent = content.title;
    contentDescription.innerHTML = metaHTML + subtitleHTML + sectionsHTML;
  }

  // Handle initial route based on URL hash
  function handleInitialRoute() {
    const hash = getSectionKeyFromHash();

    if (hash && contentData[hash]) {
      // Find corresponding link
      const targetLink = document.querySelector('[data-section="' + hash + '"]');

      if (targetLink) {
        updateActiveLink(targetLink);
        loadContent(hash);
        if (shouldAnimateHomeJumpTitle()) {
          window.setTimeout(function() {
            animateCurrentTitleHint();
            consumeHomeJumpTitleFlag();
          }, 90);
        }

        // Expand parent menus
        expandParentMenus(targetLink);
      }
    } else {
      // Default to overview
      const overviewLink = document.querySelector('[data-section="overview"]');
      if (overviewLink) {
        updateActiveLink(overviewLink);
        loadContent('overview');
        if (shouldAnimateHomeJumpTitle()) {
          window.setTimeout(function() {
            animateCurrentTitleHint();
            consumeHomeJumpTitleFlag();
          }, 90);
        }
      }
    }
  }

  // Expand parent menus for active item
  function expandParentMenus(activeLink) {
    let parent = activeLink.closest('.learning-menu__sub');

    while (parent) {
      const parentItem = parent.closest('.learning-menu__item');
      if (parentItem) {
        const toggle = parentItem.querySelector('.learning-menu__toggle');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'true');
          parent.classList.add('is-open');
        }
      }
      parent = parent.parentElement.closest('.learning-menu__sub');
    }
  }

  // Setup hash change listener
  function setupHashChangeListener() {
    window.addEventListener('hashchange', function() {
      const hash = getSectionKeyFromHash();

      if (hash && contentData[hash]) {
        const targetLink = document.querySelector('[data-section="' + hash + '"]');

        if (targetLink) {
          updateActiveLink(targetLink);
          loadContent(hash);
          if (shouldAnimateHomeJumpTitle()) {
            window.setTimeout(function() {
              animateCurrentTitleHint();
              consumeHomeJumpTitleFlag();
            }, 90);
          }
          expandParentMenus(targetLink);
        }
      }
    });
  }

  // Start the application
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
