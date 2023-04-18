export const burgerHandler = () => {
  const burgerBtn = document.querySelector('.header__burger-button');
  const burgerCalllBtn = document.querySelector('.burger__call-button');
  const burgerOverlay = document.querySelector('.burger');
  const callBtn = document.querySelector('.header__call-button');
  const header = document.querySelector('.header');
  // const burgerVisible = document.querySelector('.burger-visible');

  let opacity = 0;
  let visibility = false;
  burgerOverlay.style.opacity = opacity;
  burgerOverlay.style.visibility = `hidden`;

  const changeVisibility = () => {
    visibility = !visibility;
    burgerOverlay.style.visibility = `${visibility ? 'visible' : 'hidden'}`;
    burgerOverlay.style.transition = `all 0.5s ease-in-out`;
  };

  const toggleHandler = () => {
    if (visibility && opacity < 1) {
      opacity += 0.03;
      burgerOverlay.style.opacity = opacity;
      requestAnimationFrame(toggleHandler);
    } else if (!visibility && opacity > 0) {
      opacity -= 0.03;
      burgerOverlay.style.opacity = opacity;
      requestAnimationFrame(toggleHandler);
    }
  };

  const toggleMenu = () => {
    changeVisibility();
    toggleHandler();
    isBurgeMenuVisible();
  };

  const isBurgeMenuVisible = () => {

    burgerBtn.style.backgroundSize = `contain`;
    burgerBtn.style.backgroundRepeat = `no-repeat`;
    burgerBtn.style.backgroundPosition = `center`;

    burgerBtn.style.transition = `all .3s ease-in-out`;

    if (visibility) {
      burgerBtn.style.backgroundImage = `url(../img/header/close.svg)`;
    } else {
      burgerBtn.style.backgroundImage = `url(../img/header/menu.svg)`;
    }

  };

  burgerBtn.addEventListener('click', toggleMenu);

  const burgerMenuClick = ({target}) => {
    if (target === target.closest('.burger__link') ||
      target === burgerOverlay ||
      target === burgerCalllBtn) {
      burgerOverlay.classList.remove('burger-visible');
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
};
