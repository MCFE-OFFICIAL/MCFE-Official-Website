// footer.js
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");

  footer.style.opacity = 0;
  footer.style.transition = "opacity 1s ease";

  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.style.opacity = 1;
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  footerObserver.observe(footer);
});
