import {toggleModalVisible} from './call-modal.js';

const burgerBtn = document.querySelector('.header__burger-button');
const burgerOverlay = document.querySelector('.burger');
const callBtn = document.querySelector('.header__call-button');
const header = document.querySelector('.header');

let startTime = NaN;
const durationOpening = 1500;
const durationOpacity = 300;

const toggleMenu = () => {
  const visible = burgerOverlay.classList.toggle('burger-visible');
  isBurgeMenuVisible();
};

const isBurgeMenuVisible = () => {
  const visible = burgerOverlay.classList.contains('burger-visible');
  burgerBtn.style.backgroundSize = `contain`;
  burgerBtn.style.backgroundRepeat = `no-repeat`;
  burgerBtn.style.backgroundPosition = `center`;

  burgerBtn.style.transition = `all .3s ease-in-out`;

  if (visible) {
    burgerBtn.style.backgroundImage = `url(../img/header/close.svg)`;
  } else {
    burgerBtn.style.backgroundImage = `url(../img/header/menu.svg)`;
  }
};

burgerBtn.addEventListener('click', toggleMenu);

const burgerMenuClick = ({target}) => {
  if (target === target.closest('.burger__link') ||
    target === burgerOverlay) {
    console.log(' : ',target);
    burgerOverlay.classList.remove('burger-visible');
    console.log(' : overlay',);
    isBurgeMenuVisible();
  }
};

const headerClick = ({target}) => {
  if (target !== target.closest('.header__burger-button')) {
    burgerOverlay.classList.remove('burger-visible');
    isBurgeMenuVisible();
  }
};

burgerOverlay.addEventListener('click', burgerMenuClick);
header.addEventListener('click', headerClick);
