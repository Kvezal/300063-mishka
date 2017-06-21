//Блок определения переменных
var mainNav = document.querySelector('.main-nav');
var toggleMenu = mainNav.querySelector('.main-nav__toggle');
var menuList = mainNav.querySelector('.main-nav__list');

var featuredBtn = document.querySelector('.featured__btn');
var catalogItemsBuy = document.querySelectorAll('.catalog-item__buy');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay')
var modalBtns = document.querySelectorAll('.modal__btn');
var intro = document.querySelector('.intro--nojs');


//Блок главного меню
toggleMenu.classList.remove('main-nav__toggle--nojs');
mainNav.classList.remove('main-nav--nojs');
menuList.classList.remove('main-nav__list--nojs');
intro.classList.remove('intro--nojs');

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



//Блок элементов каталога
if (featuredBtn !== null) {
  featuredBtn.addEventListener('click', showModal);
}

if (catalogItemsBuy.length !== 0) {
  for (var i = 0; i < catalogItemsBuy.length; i++) {
    catalogItemsBuy[i].addEventListener('click', showModal);
  }
}

if (overlay !== null) {
  overlay.addEventListener('click', hideModal);
}

if (modalBtns.length !== 0) {
  for (var i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener('click', hideModal);
  }
}



//Блок функций
function showModal() {
  arguments[0].preventDefault();

  if (!modal.classList.contains('modal--active') || !overlay.classList.contains('overlay--active')) {
    modal.classList.add('modal--active');
    overlay.classList.add('overlay--active');
  }
}

function hideModal() {
  if (modal.classList.contains('modal--active') || overlay.classList.contains('overlay--active')) {
    modal.classList.remove('modal--active');
    overlay.classList.remove('overlay--active');
  }
}



//Блок Яндекс карты
ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
      center: [59.938536, 30.3224549],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Mishka',
      balloonContent: 'С нашими изделиями, тепло и любовь доступны каждому'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-28, -100]
    });
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myPlacemark);
});
