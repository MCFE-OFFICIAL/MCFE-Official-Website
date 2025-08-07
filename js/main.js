// Smooth Scroll for Anchor Links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Reveal on Scroll - manual version for a specific section
  const aboutSection = document.querySelector('.about-short');
  const revealOnScroll = () => {
    if (!aboutSection) return;
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
      aboutSection.classList.add('show');
    }
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Run on load in case already in view

  // Intersection Observer for fade-up effect on multiple sections
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 1
    }
  );

  // Observe all elements with class .fade-up-target
  const targets = document.querySelectorAll('.fade-up-target');
  targets.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
    observer.observe(el);
  });
});
