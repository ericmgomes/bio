const externalLinks = document.querySelectorAll('a[href^="http"]');

externalLinks.forEach((link) => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer me");
});
