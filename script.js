const externalLinks = document.querySelectorAll('a[href^="http"]');

externalLinks.forEach((link) => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer me");
});

const themeToggle = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  themeToggle?.setAttribute("aria-pressed", String(theme === "dark"));
  themeToggle?.querySelector(".theme-toggle__icon")?.replaceChildren(theme === "dark" ? "☀" : "☾");
  themeMeta?.setAttribute("content", theme === "dark" ? "#252927" : "#2b3529");
};

if (themeToggle) {
  const currentTheme = document.documentElement.dataset.theme || "light";

  themeToggle.setAttribute("aria-pressed", String(currentTheme === "dark"));
  themeToggle.querySelector(".theme-toggle__icon")?.replaceChildren(currentTheme === "dark" ? "☀" : "☾");
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
}
