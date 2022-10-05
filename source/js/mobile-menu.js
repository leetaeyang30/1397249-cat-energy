let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.toggle('main-nav--opened');
    navToggle.classList.toggle('main-nav__toggle--opened');
  } else {
    navMain.classList.toggle('main-nav--closed');
    navToggle.classList.toggle('main-nav__toggle--closed');
  }
});
