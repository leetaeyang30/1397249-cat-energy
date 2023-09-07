const buttonBefore = document.querySelector(".slider__button--before");
const buttonAfter = document.querySelector(".slider__button--after");
const imageBefore = document.querySelector(".slider__image--before");
const imageAfter = document.querySelector(".slider__image--after");
const range = document.querySelector(".slider__range");
const viewport = window.innerWidth;
let rangeValue = range.value;

if (viewport < 767) {
  range.setAttribute('value', '0');
} else {
  range.setAttribute('value', '50');
}

range.addEventListener('input', () => {
  let calcValue = 100 - range.value;
  range.setAttribute('value', range.value);
  imageBefore.style.clipPath = 'polygon(0 0,' + calcValue + '% 0,' + calcValue + '% 100%,' + '0 100%)';
  imageAfter.style.clipPath = 'polygon(100% 0, ' + calcValue + '% 0, ' + calcValue + '% 100%, 100% 100%)';
});

buttonBefore.addEventListener('click', () => {
  range.value = 0;
  imageBefore.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
  imageAfter.style.clipPath = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';

});


buttonAfter.addEventListener('click', () => {
  range.value = 100;
  imageBefore.style.clipPath = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
  imageAfter.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
});
