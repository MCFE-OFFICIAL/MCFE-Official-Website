window.addEventListener('scroll', function () {
  const video = document.querySelector('.bg-video');
  const scrollY = window.scrollY;
  const maxScroll = 2000; // bisa diatur

  const opacity = Math.max(1 - scrollY / maxScroll, 0);
  video.style.opacity = opacity;
});
