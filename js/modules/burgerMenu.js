const initBurgerMenuVars = () => {
  let opacity = 0;
  let visibility = false;
  return{
    opacity,
    visibility,
  }
};

let {opacity, visibility} = initBurgerMenuVars();

export const changeVisibility = ($) => {
  visibility = !visibility;
  $.burgerOverlay.style.visibility = `${visibility ? 'visible' : 'hidden'}`;
};



const isBurgeMenuVisible = ($) => {
  $.burgerBtn.style.backgroundSize = `contain`;
  $.burgerBtn.style.backgroundRepeat = `no-repeat`;
  $.burgerBtn.style.backgroundPosition = `center`;

  $.burgerBtn.style.transition = `all .3s ease-in-out`;

  if (visibility) {
    $.burgerBtn.style.backgroundImage = `url(../img/header/close.svg)`;
  } else {
    $.burgerBtn.style.backgroundImage = `url(../img/header/menu.svg)`;
  }
};

export const toggleMenuHandler = ($) => {
  $.burgerOverlay.style.opacity = opacity;
  $.burgerOverlay.style.visibility = `hidden`;
  $.burgerOverlay.style.transition = `all 0.5s ease-in-out`;

  $.burgerBtn.addEventListener('click', () => {
    changeVisibility($);
    const toggleHandler = () => {
      if (visibility && opacity < 1) {
        opacity += 0.03;
        $.burgerOverlay.style.opacity = opacity;
        requestAnimationFrame(toggleHandler);
      } else if (!visibility && opacity > 0) {
        opacity -= 0.03;
        $.burgerOverlay.style.opacity = opacity;
        requestAnimationFrame(toggleHandler);
      }
    };
    toggleHandler();
    isBurgeMenuVisible($);
  });
};

export const burgerMenuClickHandler = ($) => {
  $.burgerOverlay.addEventListener('click', ({target}) => {
    if (target === target.closest('.burger__link') ||
      target === $.burgerOverlay ||
      target === $.burgerCalllBtn) {
      changeVisibility($);
      isBurgeMenuVisible($);
    }
  });
};

export const headerClickHandler = ($) => {
  $.header.addEventListener('click', ({target}) => {
    if (target !== target.closest('.header__burger-button')) {
      changeVisibility($);
      isBurgeMenuVisible($);
    }
  });
};
