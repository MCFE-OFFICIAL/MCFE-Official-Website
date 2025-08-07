// Fungsi untuk menambahkan class saat scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-container");

  if (window.scrollY > 250) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});