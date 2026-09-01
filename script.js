// Small enhancement: fade the hero image in once it has loaded,
// so the placeholder swap (or a slow connection) never shows a flash.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach((img) => {
    if (img.complete) return;
    img.style.opacity = 0;
    img.style.transition = "opacity 0.4s ease";
    img.addEventListener("load", () => {
      img.style.opacity = 1;
    });
  });
});
