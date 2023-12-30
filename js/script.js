const menuBar = document.querySelector('.hamburger');
const menuNav = document.querySelector('.navbar');

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('is-active');
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    menuNav.classList.add('nav-scroll-active');
  } else {
    menuNav.classList.remove('nav-scroll-active');
  }
});
