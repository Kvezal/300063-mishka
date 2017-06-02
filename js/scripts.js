var mainNav = document.querySelector('.main-nav');
var toggleMenu = mainNav.querySelector('.main-nav__toggle');
var menuList = mainNav.querySelector('.main-nav__list');



toggleMenu.classList.remove('main-nav__toggle--nojs');
mainNav.classList.remove('main-nav--nojs');



toggleMenu.addEventListener('click', function(event) {
  event.preventDefault();

  if (toggleMenu.classList.contains('main-nav__toggle--open')) {
    toggleMenu.classList.remove('main-nav__toggle--open');
    mainNav.classList.remove('main-nav--open');

  } else {
    toggleMenu.classList.add('main-nav__toggle--open');
    mainNav.classList.add('main-nav--open');
  }
});
