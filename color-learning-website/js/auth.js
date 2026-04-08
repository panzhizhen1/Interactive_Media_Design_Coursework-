/**
 * Lightweight front-end auth placeholder.
 * - Browsing is always allowed without login.
 * - Clicking avatar opens sign-in when signed out.
 * - When signed in, hover (or keyboard focus) shows Log out; confirm on click.
 * - Session is stored in localStorage.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "clw_current_user";
  var DEMO_ACCOUNTS = {
    studentA: "StudentA123!",
    studentB: "StudentB123!",
    studentC: "StudentC123!"
  };

  function getCurrentUser() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      return parsed && parsed.username ? parsed.username : null;
    } catch (e) {
      console.warn("[auth.js] Failed to read current user:", e);
      return null;
    }
  }

  function setCurrentUser(username) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ username: username }));
  }

  function clearCurrentUser() {
    localStorage.removeItem(STORAGE_KEY);
  }

  function getInitial(username) {
    return username ? username.charAt(0).toUpperCase() : "?";
  }

  function updateAvatarUI() {
    var trigger = document.querySelector("[data-auth-trigger]");
    var avatar = document.querySelector("[data-user-avatar]");
    var menu = document.querySelector("[data-user-menu]");
    var dropdown = document.querySelector("[data-user-dropdown]");
    var currentUser = getCurrentUser();
    if (!trigger || !avatar) return;

    if (currentUser) {
      if (menu) menu.classList.add("is-logged-in");
      if (dropdown) dropdown.hidden = false;
      avatar.classList.remove("user-avatar--placeholder");
      avatar.classList.add("user-avatar--active");
      avatar.textContent = getInitial(currentUser);
      trigger.setAttribute("title", "Signed in as " + currentUser + " — hover for Log out");
      trigger.setAttribute("aria-label", "Account: " + currentUser);
      trigger.setAttribute("aria-expanded", "false");
      return;
    }

    if (menu) menu.classList.remove("is-logged-in");
    if (dropdown) dropdown.hidden = true;
    avatar.classList.add("user-avatar--placeholder");
    avatar.classList.remove("user-avatar--active");
    avatar.textContent = "";
    trigger.setAttribute("title", "Sign in");
    trigger.setAttribute("aria-label", "Account");
    trigger.setAttribute("aria-expanded", "false");
  }

  function closeModal(backdrop) {
    if (backdrop && backdrop.parentNode) {
      backdrop.parentNode.removeChild(backdrop);
    }
  }

  function createLoginModal() {
    var backdrop = document.createElement("div");
    backdrop.className = "auth-modal-backdrop";
    backdrop.innerHTML = [
      '<div class="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">',
      '  <h2 class="auth-modal__title" id="auth-title">Sign in</h2>',
      '  <p class="auth-modal__desc">Use one of the prepared demo accounts to unlock member features later.</p>',
      '  <form data-auth-form>',
      '    <div class="auth-modal__field">',
      '      <label class="auth-modal__label" for="auth-username">Username</label>',
      '      <input class="auth-modal__input" id="auth-username" name="username" autocomplete="username" required />',
      "    </div>",
      '    <div class="auth-modal__field">',
      '      <label class="auth-modal__label" for="auth-password">Password</label>',
      '      <input class="auth-modal__input" id="auth-password" name="password" type="password" autocomplete="current-password" required />',
      "    </div>",
      '    <p class="auth-message" data-auth-message></p>',
      '    <div class="auth-modal__actions">',
      '      <button type="button" class="auth-modal__btn" data-auth-cancel>Cancel</button>',
      '      <button type="submit" class="auth-modal__btn auth-modal__btn--primary">Sign in</button>',
      "    </div>",
      "  </form>",
      "</div>"
    ].join("");

    var form = backdrop.querySelector("[data-auth-form]");
    var message = backdrop.querySelector("[data-auth-message]");
    var cancelBtn = backdrop.querySelector("[data-auth-cancel]");
    var usernameInput = backdrop.querySelector("#auth-username");
    var passwordInput = backdrop.querySelector("#auth-password");

    cancelBtn.addEventListener("click", function () {
      closeModal(backdrop);
    });

    backdrop.addEventListener("click", function (event) {
      if (event.target === backdrop) {
        closeModal(backdrop);
      }
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var username = usernameInput.value.trim();
      var password = passwordInput.value;
      if (!DEMO_ACCOUNTS[username] || DEMO_ACCOUNTS[username] !== password) {
        message.textContent = "Invalid username or password.";
        return;
      }

      setCurrentUser(username);
      updateAvatarUI();
      closeModal(backdrop);
      alert("Signed in as " + username + ".");
    });

    document.body.appendChild(backdrop);
    usernameInput.focus();
  }

  function onAvatarClick() {
    if (getCurrentUser()) return;
    createLoginModal();
  }

  function onLogoutClick(event) {
    event.preventDefault();
    event.stopPropagation();
    var currentUser = getCurrentUser();
    if (!currentUser) return;
    var ok = window.confirm("Are you sure you want to sign out?");
    if (!ok) return;
    clearCurrentUser();
    updateAvatarUI();
  }

  function bind() {
    var trigger = document.querySelector("[data-auth-trigger]");
    if (!trigger || trigger.dataset.boundAuth === "1") return;
    trigger.dataset.boundAuth = "1";
    trigger.addEventListener("click", onAvatarClick);
  }

  if (!document.documentElement.dataset.authDelegationBound) {
    document.documentElement.dataset.authDelegationBound = "1";
    document.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-auth-logout]");
      if (!btn) return;
      onLogoutClick(event);
    });
  }

  function init() {
    bind();
    updateAvatarUI();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  document.addEventListener("site:components-ready", init);
})();
