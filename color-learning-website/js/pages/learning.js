// Learning page scripts

import { contentData } from './learn/learning-content.js';

(function() {
  'use strict';

  // DOM elements
  const sidebar = document.getElementById('learning-sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const menuToggles = document.querySelectorAll('.learning-menu__toggle');
  const menuLinks = document.querySelectorAll('.learning-menu__link');
  const contentTitle = document.getElementById('content-title');
  const contentDescription = document.getElementById('content-description');

  // Initialize
  function init() {
    setupSidebarToggle();
    setupAccordionMenu();
    setupNavigationLinks();
    handleInitialRoute();
    setupHashChangeListener();
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
    } else {
      // Simple content pages
      contentTitle.textContent = content.title;
      contentDescription.innerHTML = `<p>${content.description}</p>`;
    }
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
    const hash = window.location.hash.substring(1);

    if (hash && contentData[hash]) {
      // Find corresponding link
      const targetLink = document.querySelector('[data-section="' + hash + '"]');

      if (targetLink) {
        updateActiveLink(targetLink);
        loadContent(hash);

        // Expand parent menus
        expandParentMenus(targetLink);
      }
    } else {
      // Default to overview
      const overviewLink = document.querySelector('[data-section="overview"]');
      if (overviewLink) {
        updateActiveLink(overviewLink);
        loadContent('overview');
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
      const hash = window.location.hash.substring(1);

      if (hash && contentData[hash]) {
        const targetLink = document.querySelector('[data-section="' + hash + '"]');

        if (targetLink) {
          updateActiveLink(targetLink);
          loadContent(hash);
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
