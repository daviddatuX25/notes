/* ====================================================================
   Theme toggle — light / dark / system
   Cycles: light → dark → system → light ...
   Stores choice in localStorage. System mode follows OS preference.
   ==================================================================== */

(function () {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  const icon = button ? button.querySelector(".theme-icon") : null;

  const modes = ["light", "dark", "system"];
  const icons = {
    light: "☀",
    dark: "☾",
    system: "◐",
  };

  function currentMode() {
    return localStorage.getItem("theme") || "system";
  }

  function resolvedTheme(mode) {
    if (mode === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return mode;
  }

  function applyMode(mode) {
    const theme = resolvedTheme(mode);
    root.setAttribute("data-theme", theme);
    if (icon) icon.textContent = icons[mode] || icons.system;
  }

  function cycleTheme() {
    const current = currentMode();
    const idx = modes.indexOf(current);
    const next = modes[(idx + 1) % modes.length];
    if (next === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", next);
    }
    applyMode(next);
  }

  // Initial icon sync
  applyMode(currentMode());

  // Button click
  if (button) {
    button.addEventListener("click", cycleTheme);
  }

  // Follow OS changes when in system mode
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (currentMode() === "system") {
        applyMode("system");
      }
    });
})();
