const initBurgerMenuVars = () => {
  let opacity = 0;
  let visibility = false;
  const opacityStep = 0.15;
  let startTime = NaN;
  const durationOpacity = 1500;
  return {
    opacity,
    visibility,
    opacityStep,
    startTime,
    durationOpacity
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
let endtime = NaN;
let diff = NaN;
export const toggleMenuHandler = ($) => {
  // $.burgerOverlay.style.opacity = opacity;

  $.burgerBtn.addEventListener('click', () => {
    changeVisibility($);

    const toggleHandler = (timestamp) => {
      startTime ||= timestamp;
      endtime ||= startTime + 1000;
      diff = (endtime -startTime)/1000;
      console.log(' : ',endtime -startTime);
      const progress = (timestamp - startTime) / durationOpacity;

      console.log(' progress: ', progress);

      if (visibility && progress < diff) {
        $.burgerOverlay.style.opacity = progress;
        requestAnimationFrame(toggleHandler);
      } else if (!visibility && progress > 0) {
        endtime = NaN;
        diff = NaN;
        $.burgerOverlay.style.opacity = (diff) - progress;

        requestAnimationFrame(toggleHandler);
      }

      setTimeout(() => {
        visibility ? $.burgerOverlay.style.opacity = 1 : $.burgerOverlay.style.opacity = 0;
      }, durationOpacity);
    };

    requestAnimationFrame(toggleHandler);
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
