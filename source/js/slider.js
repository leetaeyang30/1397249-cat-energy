let buttonBefore = document.querySelector(".slider__button--before");
let buttonAfter = document.querySelector(".slider__button--after");
let imageBefore = document.querySelector(".slider__image--before");
let imageAfter = document.querySelector(".slider__image--after");

buttonAfter.addEventListener('click', function () {
  imageBefore.classList.add("slider__image--hidden");
  imageAfter.classList.remove("slider__image--hidden");
});

buttonBefore.addEventListener('click', function () {
  imageAfter.classList.add("slider__image--hidden");
  imageBefore.classList.remove("slider__image--hidden");
});
