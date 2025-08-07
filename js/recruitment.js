// Tambahan JS jika ingin efek smooth scroll ke form
document.querySelectorAll('a[href^="#form"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.gform-section').scrollIntoView({
      behavior: 'smooth'
    });
  });
});
