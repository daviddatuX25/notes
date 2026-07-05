/* ====================================================================
   Keyboard shortcuts
   j / k   — next / previous post (chronological)
   g g     — go to index (press g twice within 500ms)
   g t     — go to tags
   g a     — go to archive
   t       — toggle theme
   ?       — show keyboard shortcuts modal
   Esc     — close modal
   ==================================================================== */

(function () {
  const helpModal = document.getElementById("help-modal");
  const helpToggle = document.getElementById("help-toggle");
  const themeToggle = document.getElementById("theme-toggle");

  // Sequence-based shortcuts: press g then t/a/g within 500ms
  let prefixKey = null;
  let prefixTimer = null;

  const PREFIX_TIMEOUT = 500;
  const SEQUENCES = {
    "g-t": "/tags/",
    "g-a": "/archive/",
    "g-g": "/",
  };

  function resetPrefix() {
    prefixKey = null;
    if (prefixTimer) {
      clearTimeout(prefixTimer);
      prefixTimer = null;
    }
  }

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

  document.addEventListener("keydown", function (e) {
    // Never intercept when typing in a field
    if (isTextInput(e.target)) return;

    // Ignore modified keys (Ctrl/Cmd/Alt) — don't hijack browser shortcuts
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    // Esc — close modal
    if (e.key === "Escape") {
      closeModal();
      resetPrefix();
      return;
    }

    // ? — open help
    if (e.key === "?") {
      e.preventDefault();
      openModal();
      resetPrefix();
      return;
    }

    // t (alone) — toggle theme
    if (e.key === "t" && !prefixKey) {
      e.preventDefault();
      if (themeToggle) themeToggle.click();
      return;
    }

    // Sequence handling: g + t / g + a / g + g
    if (prefixKey === "g") {
      const seq = "g-" + e.key;
      if (SEQUENCES[seq]) {
        e.preventDefault();
        window.location.href = SEQUENCES[seq];
        resetPrefix();
        return;
      }
      // Unknown follow-up — drop the prefix
      resetPrefix();
    }

    if (e.key === "g") {
      e.preventDefault();
      prefixKey = "g";
      prefixTimer = setTimeout(resetPrefix, PREFIX_TIMEOUT);
      return;
    }

    // j / k — next / prev post navigation
    if (e.key === "j" || e.key === "k") {
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
