'use strict';

const mainElement = document.querySelector(`#main`);
const divButtons = document.createElement(`div`);
divButtons.className = `arrows__wrap`;
const buttonPrev = document.createElement(`button`);
buttonPrev.className = `arrows__btn`;
buttonPrev.textContent = `<-`;
const buttonNext = document.createElement(`button`);
buttonNext.className = `arrows__btn`;
buttonNext.textContent = `->`;
divButtons.appendChild(buttonPrev);
divButtons.appendChild(buttonNext);
document.body.appendChild(divButtons);
// функция переключения слайдов
const selectSlide = (el) => {
  mainElement.innetHTML = ``;
  mainElement.appendChild(el.cloneNode(true));
};
// найдем все элементы template
const myTemplates = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);
// поиск границ и переключение
let slideIndex = 0;
const select = (index) => {
  index = index < 0 ? myTemplates.length - 1 : index;
  index = index >= myTemplates.length ? 0 : index;
  slideIndex = index;
  selectSlide(myTemplates[slideIndex]);
};
select(0);
document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case 39:
      select(slideIndex + 1);
      break;
    case 37:
      select(slideIndex - 1);
      break;
  }
});
