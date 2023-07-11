// Changed CSS variables so user can decide is the page dark or light theme
function changePageThemeColors(isDarkMode: boolean | undefined) {
  const root = document.documentElement;

  if (isDarkMode) {
    root.style.setProperty("--main-theme-color", "#815eff");
    root.style.setProperty("--theme-bg", "#1C0C3E");
    root.style.setProperty("--theme-bg-accent", "#120d3b");
    root.style.setProperty("--theme-text-color", "#f1f1f1");
    root.style.setProperty("--feature-overlay-color", "rgba(156,94,225,0.85)");
    root.style.setProperty("--theme-footer-color", "#3e15c521");
  } else {
    root.style.setProperty("--main-theme-color", "white");
    root.style.setProperty("--theme-bg", "#c1b4f0");
    root.style.setProperty("--theme-bg-accent", " #9c8dd1");
    root.style.setProperty("--theme-text-color", "white");
    root.style.setProperty("--feature-overlay-color", "#9c8dd1");
    root.style.setProperty("--theme-footer-color", "#9c8dd1");
  }
}

export default changePageThemeColors;
