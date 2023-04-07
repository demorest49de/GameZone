import {toggleModalVisible} from './call-modal.js';

const burgerBtn = document.querySelector('.header__navigation');
const burger = document.querySelector('.burger');
const showMenu = () => {
  burger.classList.toggle('burger-visible');
};
burgerBtn.addEventListener('click', showMenu);
