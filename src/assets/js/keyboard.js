/* ====================================================================
   Keyboard shortcuts
   j / k   — next / previous post (chronological)
   g g     — go to index (press g twice within 500ms)
   t       — toggle theme
   ?       — show keyboard shortcuts modal
   Esc     — close modal
   ==================================================================== */

(function () {
  const helpModal = document.getElementById("help-modal");
  const helpToggle = document.getElementById("help-toggle");
  const themeToggle = document.getElementById("theme-toggle");

  let gPressTimer = null;
  let gPressCount = 0;

  function isTextInput(el) {
    return (
      el.tagName === "INPUT" ||
      el.tagName === "TEXTAREA" ||
      el.isContentEditable
    );
  }

  function closeModal() {
    if (helpModal) helpModal.setAttribute("hidden", "");
  }

  function openModal() {
    if (helpModal) helpModal.removeAttribute("hidden");
  }

  // Collect all post links on the page (post-nav or index list)
  function getPostLinks() {
    const nav = document.querySelector("[data-post-nav]");
    if (!nav) return [];
    return Array.from(nav.querySelectorAll('a[href]'));
  }

  // Find current post URL (on post pages, the canonical link)
  function currentPostIndex(links) {
    // On a post page, there's no "current" in the list, but
    // post-nav-links has prev/next. On index, the list items have
    // data-post-url. We handle both:
    const items = document.querySelectorAll("[data-post-url]");
    if (items.length === 0) return -1;

    // Find which item matches the current URL
    const currentUrl = window.location.pathname;
    for (let i = 0; i < items.length; i++) {
      if (items[i].getAttribute("data-post-url") === currentUrl) return i;
    }
    return -1;
  }

  document.addEventListener("keydown", function (e) {
    // Never intercept when typing in a field
    if (isTextInput(e.target)) return;

    // Esc — close modal
    if (e.key === "Escape") {
      closeModal();
      return;
    }

    // ? — open help
    if (e.key === "?") {
      e.preventDefault();
      openModal();
      return;
    }

    // t — toggle theme
    if (e.key === "t" && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      if (themeToggle) themeToggle.click();
      return;
    }

    // g — double press for "go to index"
    if (e.key === "g" && !e.ctrlKey && !e.metaKey) {
      gPressCount++;
      if (gPressCount === 1) {
        gPressTimer = setTimeout(function () {
          gPressCount = 0;
        }, 500);
      } else if (gPressCount === 2) {
        clearTimeout(gPressTimer);
        gPressCount = 0;
        window.location.href = "/";
      }
      return;
    }

    // j / k — next / prev post navigation
    if (e.key === "j" || e.key === "k") {
      const links = getPostLinks();
      if (links.length === 0) return;

      // On post pages, use the post-nav-links (prev/next)
      const prevLink = document.querySelector(".post-nav-prev");
      const nextLink = document.querySelector(".post-nav-next");

      if (e.key === "j" && nextLink) {
        e.preventDefault();
        window.location.href = nextLink.getAttribute("href");
      } else if (e.key === "k" && prevLink) {
        e.preventDefault();
        window.location.href = prevLink.getAttribute("href");
      }
    }
  });

  // Click help button to toggle
  if (helpToggle) {
    helpToggle.addEventListener("click", openModal);
  }

  // Click outside modal to close
  if (helpModal) {
    helpModal.addEventListener("click", function (e) {
      if (e.target === helpModal) closeModal();
    });
  }
})();
