export const vars = () => {
  const burgerBtn = document.querySelector('.header__burger-button');
  const burgerOverlay = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const burgerCallBtn = document.querySelector('.burger__call-button');
  const callBtn = document.querySelector('.header__call-button');

  return {
    burgerBtn,
    burgerOverlay,
    header,
    burgerCallBtn,
    callBtn,
  };
};
