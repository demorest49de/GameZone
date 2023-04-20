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

  if (visibility) {
    $.burgerBtn.style.backgroundImage = `url(../img/header/close.svg)`;
    $.burgerBtn.classList.add('header__burger-close-btn');
  } else {
    $.burgerBtn.style.backgroundImage = `url(../img/header/menu.svg)`;
    $.burgerBtn.classList.remove('header__burger-close-btn');
  }
};

export const changeVisibility = ($) => {
  visibility = !visibility;
};

export const toggleMenuHandler = ($) => {

  $.burgerBtn.addEventListener("click", ({target}) => {

    changeVisibility($);
    let id = 0;
    const toggleHandler = (timestamp) => {
      startTime ||= timestamp;
      console.log(' : ', startTime);
      const progress = +((timestamp - startTime) / durationOpacity).toFixed(2);

      if (visibility && progress <= 1) {
        $.burgerOverlay.style.opacity = progress;
        id = requestAnimationFrame(toggleHandler);
      }

      if (!visibility && progress >= 0) {
        startTime = $.burgerOverlay.style.opacity = 1 - progress;
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


export const mouseHoverActiveFocusHandler = ($) => {
//hover
  const mouseOutOverHandler = ($) => {
    $.burgerBtn.addEventListener("mouseover", ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        $.burgerBtn.style.backgroundImage = `url(../img/header/close-hover.svg)`;
      } else {
        $.burgerBtn.style.backgroundImage = `url(../img/header/menu-hover.svg)`;
      }
    });

    $.burgerBtn.addEventListener("mouseout", ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        $.burgerBtn.style.backgroundImage = `url(../img/header/close.svg)`;
      } else {
        $.burgerBtn.style.backgroundImage = `url(../img/header/menu.svg)`;
      }
    });
  };

  //active
  const mouseUpDownHandler = ($) => {

    $.burgerBtn.addEventListener("mouseup", ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        $.burgerBtn.style.backgroundImage = `url(../img/header/close-active.svg)`;
      } else {
        $.burgerBtn.style.backgroundImage = `url(../img/header/menu-active.svg)`;
      }
    });

    $.burgerBtn.addEventListener("mousedown", ({target}) => {

      if (target.closest('.header__burger-close-btn')) {
        $.burgerBtn.style.backgroundImage = `url(../img/header/close-active.svg)`;
      } else {
        $.burgerBtn.style.backgroundImage = `url(../img/header/menu-active.svg)`;
      }
    });
  };

  //focus
  const mouseFocusHandler = ($) => {
    $.burgerBtn.addEventListener("focus", ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        target.style.backgroundImage = `url(../img/header/close-focus.svg)`;
      } else {
        target.style.backgroundImage = `url(../img/header/menu-focus.svg)`;
      }
    });
  };

  mouseOutOverHandler($);
  mouseUpDownHandler($);
  // TODO check focus handler
  mouseFocusHandler($);
};
