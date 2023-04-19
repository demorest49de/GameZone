const initBurgerMenuVars = () => {
  let opacity = 0;
  let visibility = false;
  const opacityStep = 0.15;
  let startTime = NaN;
  const durationOpacity = 500;
  return {
    opacity, visibility, opacityStep, startTime, durationOpacity
  };
};

let {opacity, visibility, opacityStep, startTime, durationOpacity} = initBurgerMenuVars();

const isBurgeMenuVisible = ($) => {
  $.burgerBtn.style.backgroundSize = `contain`;
  $.burgerBtn.style.backgroundRepeat = `no-repeat`;
  $.burgerBtn.style.backgroundPosition = `center`;

  $.burgerBtn.style.transition = `all .3s ease-in-out`;
//raf
  if (visibility) {
    $.burgerBtn.style.backgroundImage = `url(../img/header/close.svg)`;
  } else {
    $.burgerBtn.style.backgroundImage = `url(../img/header/menu.svg)`;
  }
};

export const changeVisibility = ($) => {
  visibility = !visibility;
};

export const toggleMenuHandler = ($) => {

  $.burgerBtn.addEventListener('click', () => {
    changeVisibility($);
    let id = 0;
    const toggleHandler = (timestamp) => {
      // startTime ||= timestamp; /// if visibility === false
      // у меня почему startime здесь в перый раз становиться равным еденице, на след вызове рекурсии он выдает нормальное значение timestamp
      startTime ||= timestamp;
      console.log(' : ',startTime);
      const progress = +((timestamp - startTime) / durationOpacity).toFixed(2);

      if (visibility && progress <= 1) {
        $.burgerOverlay.style.opacity = progress;
        id = requestAnimationFrame(toggleHandler);
      }

      if (!visibility && progress >= 0) {
        $.burgerOverlay.style.opacity = 1 - progress;
        id = requestAnimationFrame(toggleHandler);
      }

      if (progress > 1 || progress < 0) {
        startTime = NaN;
        cancelAnimationFrame(id);
        console.log(' : ', startTime);
      }
    };

    requestAnimationFrame(toggleHandler);
    isBurgeMenuVisible($);
  });
};

export const burgerMenuClickHandler = ($) => {
  $.burgerOverlay.addEventListener('click', ({target}) => {
    if (target === target.closest('.burger__link') || target === $.burgerOverlay || target === $.burgerCalllBtn) {
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
