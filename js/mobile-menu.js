const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuOpen = document.querySelector(".mobile-menu-open");
const mobileMenuClose = document.querySelector(".mobile-menu-close");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

mobileMenuOpen.addEventListener("click", toggleMenu);
mobileMenuClose.addEventListener("click", toggleMenu);