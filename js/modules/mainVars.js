export const vars = () => {
  const burgerBtn = document.querySelector('.header__burger-button');
  const burgerOverlay = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const burgerCallBtn = document.querySelector('.burger__call-button');
  const callBtn = document.querySelector('.header__call-button');

  const modalCalllBtn = document.querySelector('.header__call-button');
  const burgerCalllBtn = document.querySelector('.burger__call-button');

  const callOverlay = document.querySelector('.call-overlay');
  const closeBtn = callOverlay.querySelector('.call__close-btn');

  const menuAsClose = burgerBtn.querySelector(`[href="./img/header/menu.svg#close"]`).parentElement;
  const menuAsBurger = burgerBtn.querySelector(`[href="./img/header/menu.svg#menu"]`).parentElement;
  return {
    burgerBtn,
    burgerOverlay,
    header,
    burgerCallBtn,
    callBtn,
    modalCalllBtn,
    burgerCalllBtn,
    callOverlay,
    closeBtn,
    menuAsClose,
    menuAsBurger,
  };
};
