const menuBar = document.querySelector('.hamburger');
const menuNav = document.querySelector('.navbar');
const menuNavigation = document.querySelector('.menu');

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('is-active');
  menuNavigation.classList.toggle('menu-active');
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    menuNav.classList.add('nav-scroll-active');
  } else {
    menuNav.classList.remove('nav-scroll-active');
  }

  windowPosition = window.scrollY > 200;
  menuBar.classList.toggle('btn-active', windowPosition);
  menuBar.classList.remove('is-active');
  menuNavigation.classList.remove('menu-active');
});
