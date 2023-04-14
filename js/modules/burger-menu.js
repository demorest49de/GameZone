import {toggleModalVisible} from './call-modal.js';

const burgerBtn = document.querySelector('.header__burger-button');
const burgerOverlay = document.querySelector('.burger');
const callBtn = document.querySelector('.header__call-button');
const header = document.querySelector('.header');

const toggleMenu = () => {
  const visible = burgerOverlay.classList.toggle('burger-visible');
  if (!visible) {
    burgerBtn.style.opacity = 1;
  } else {
    burgerBtn.style.opacity = 0;
  }

};

burgerBtn.addEventListener('click', toggleMenu);

const burgerMenuClick = ({target}) => {
  if (target === burgerOverlay) {
    burgerOverlay.classList.remove('burger-visible');
  }
};

const headerClick = ({target}) => {
  if (target !== target.closest('.header__burger-button')) {
    burgerOverlay.classList.remove('burger-visible');
  }
};

burgerOverlay.addEventListener('click', burgerMenuClick);
header.addEventListener('click', headerClick);
