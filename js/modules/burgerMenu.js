const initBurgerMenuVars = () => {
  let opacity = 0;
  let visibility = false;
  const opacityStep = 0.15;
  let startTime = NaN;
  const durationOpacity = 1500;
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
      startTime ||= timestamp;

      const progress = +((timestamp - startTime) / durationOpacity).toFixed(2);

      console.log(' progress: ', progress);
      if (visibility && progress <= 1) {
        $.burgerOverlay.style.opacity = progress;
        console.log(' startTime: ', startTime);
        console.log(' timestamp: ', timestamp);
        id = requestAnimationFrame(toggleHandler);
      }

      if (!visibility && progress > 0) {
        startTime = $.burgerOverlay.style.opacity = 1 - progress;
        console.log(' : ', 1 - progress);
        id = requestAnimationFrame(toggleHandler);
      }

      if (progress >= 1 || progress < 0) {
        startTime = NaN;
        console.log(' : ', startTime);
        cancelAnimationFrame(id);
      }

      // setTimeout(() => {
      //   visibility ? $.burgerOverlay.style.opacity = 1 : $.burgerOverlay.style.opacity = 0;
      // }, durationOpacity);
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
