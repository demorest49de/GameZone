import {toggleModalVisible} from './call-modal.js';

const burgerBtn = document.querySelector('.header__burger-button');
const burger = document.querySelector('.burger');

const burgerOverlay = document.querySelector('.burger');
const callBtn = document.querySelector('.header__call-button');
const header = document.querySelector('.header');

const toggleMenu = () => {
  burger.classList.toggle('burger-visible');
  burgerBtn.classList.toggle('header__burger-button-close')
};
burgerBtn.addEventListener('click', toggleMenu);

const burgerMenuClick = ({target}) => {
  if (target.closest('.burger__link')) {
    toggleMenu();
  }

  if (target === burgerOverlay) {
    burger.classList.remove('burger-visible');
  }
};

const headerClick = ({target}) => {
  if (target !== burgerBtn &&
    target.closest('.header')) {
    burger.classList.remove('burger-visible');
  }
};

burgerOverlay.addEventListener('click', burgerMenuClick);
header.addEventListener('click', headerClick);
