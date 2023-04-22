const initBurgerMenuVars = () => {
  const visibility = false;
  const startTimeBurgerMenu = NaN;
  const startTimeBurgerLink = NaN;
  const durationOpacity = 400;
  return {
    visibility, startTimeBurgerMenu, startTimeBurgerLink, durationOpacity,
  };
};

let {visibility, startTimeBurgerMenu, startTimeBurgerLink, durationOpacity} = initBurgerMenuVars();

const burgerMenuIconHandler = ($) => {
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

const changeVisibility = ($, isVisibilityOff = null) => {
  if (isVisibilityOff) {
    visibility = false;
    return;
  }
  visibility = !visibility;
};

const toggleMenuHandler = ($, isVisibilityOff = null) => {
  if (isVisibilityOff && !visibility) return;
  changeVisibility($, isVisibilityOff);
  let rafId = 0;

  const toggleHandler = (timestamp) => {
    startTimeBurgerMenu ||= timestamp;
    const progress = +((timestamp - startTimeBurgerMenu) / durationOpacity).toFixed(2);
    // console.log(' progress before if condition enter: ', progress);

    if (visibility && progress <= 1) {
      // console.log(' progress: ', progress);
      $.burgerOverlay.style.opacity = progress.toString();
      rafId = requestAnimationFrame(toggleHandler);
    }

    if (!visibility && progress >= 0) {
      $.burgerOverlay.style.opacity = (1 - progress).toFixed(1);
      // console.log($.burgerOverlay.style.opacity);
      rafId = requestAnimationFrame(toggleHandler);
    }

    if (progress > 1 || progress < 0) {
      startTimeBurgerMenu = NaN;
      cancelAnimationFrame(rafId);
      // console.log(' NaN startTime: ', startTime);
    }
  };

  if (!visibility) {
    setTimeout(() => {
      $.burgerOverlay.style.display = 'none';
    }, durationOpacity * 2);
  } else {
    $.burgerOverlay.style.display = 'block';
  }

  requestAnimationFrame(toggleHandler);
  burgerMenuIconHandler($);
};

const blinkingDuration = 600;

const animateBurgerLinkClick = ($, target) => {
  const burgerLink = target;
  const rafId = 0;
  let isBlinking = false;
  const colorNone = 'rgba(0, 0, 0, 0)';
  burgerLink.style.transition = `all .3s ease-in-out`;
  const animateLinkHandler = (timestamp) => {
    startTimeBurgerLink ||= timestamp;

    const progress = +((timestamp - startTimeBurgerLink) / blinkingDuration).toFixed(2);

    const backgroundColorActive = '#CD06FF';
    burgerLink.style.backgroundColor = backgroundColorActive;
    isBlinking = !isBlinking;

    if (progress <= 1) {
      isBlinking ? burgerLink.style.backgroundColor =
        colorNone : burgerLink.style.backgroundColor = backgroundColorActive;
      setTimeout(() => {
        requestAnimationFrame(animateLinkHandler);
      }, 70);
    }

    if (progress > 1) {
      startTimeBurgerLink = NaN;
      cancelAnimationFrame(rafId);
    }

    setTimeout(() => {
      burgerLink.style.backgroundColor = colorNone;
    }, blinkingDuration * 2);
  };
  requestAnimationFrame(animateLinkHandler);
};

export const burgerMenuClickHandler = ($) => {
  const burgerBtnClickHandler = ($) => {
    $.burgerBtn.addEventListener('click', () => {
      toggleMenuHandler($);
    });
  };

  const burgerMenuOutsideClickHandler = ($) => {
    $.burgerOverlay.addEventListener('click', (ev) => {
      const target = ev.target;
      ev.stopPropagation();
      const targetHref = target.href;
      target.href = `#`;
      if (target === target.closest('.burger__link')) {
        animateBurgerLinkClick($, target);
        setTimeout(() => {
          toggleMenuHandler($, true);
          target.href = targetHref;
          const elemId = targetHref.slice((targetHref.lastIndexOf('#')), targetHref.length);
          const elem = document.querySelector(`${elemId}`);
          elem.scrollIntoView();
        }, blinkingDuration);
      }

      if (target === $.burgerOverlay || target === $.burgerCallBtn) {
        toggleMenuHandler($, true);
      }
    });
  };

  const headerClickHandler = ($) => {
    $.header.addEventListener('click', ({target}) => {
      if (target !== target.closest('.header__burger-button')) {
        toggleMenuHandler($, true);
      }
    });
  };
  burgerBtnClickHandler($);
  burgerMenuOutsideClickHandler($);
  headerClickHandler($);
};

export const mouseHoverActiveFocusHandler = ($) => {
// hover
  const mouseOutOverHandler = ($) => {
    $.burgerBtn.addEventListener('mouseover', ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        $.burgerBtn.style.backgroundImage = `url(../img/header/close-hover.svg)`;
      } else {
        $.burgerBtn.style.backgroundImage = `url(../img/header/menu-hover.svg)`;
      }
    });

    $.burgerBtn.addEventListener('mouseout', ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        $.burgerBtn.style.backgroundImage = `url(../img/header/close.svg)`;
      } else {
        $.burgerBtn.style.backgroundImage = `url(../img/header/menu.svg)`;
      }
    });
  };

  // active
  const mouseUpDownHandler = ($) => {
    $.burgerBtn.addEventListener('mouseup', ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        $.burgerBtn.style.backgroundImage = `url(../img/header/close-active.svg)`;
      } else {
        $.burgerBtn.style.backgroundImage = `url(../img/header/menu-active.svg)`;
      }
    });

    $.burgerBtn.addEventListener('mousedown', ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        $.burgerBtn.style.backgroundImage = `url(../img/header/close-active.svg)`;
      } else {
        $.burgerBtn.style.backgroundImage = `url(../img/header/menu-active.svg)`;
      }
    });
  };

  // focus
  const mouseFocusHandler = ($) => {
    $.burgerBtn.addEventListener('focus', ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        target.style.backgroundImage = `url(../img/header/close-focus.svg)`;
      } else {
        target.style.backgroundImage = `url(../img/header/menu-focus.svg)`;
      }
    });
  };

  // focus
  const mouseBlurHandler = ($) => {
    $.burgerBtn.addEventListener('blur', ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        target.style.backgroundImage = `url(../img/header/close.svg)`;
      } else {
        target.style.backgroundImage = `url(../img/header/menu.svg)`;
      }
    });
  };

  mouseOutOverHandler($);
  mouseUpDownHandler($);
  mouseFocusHandler($);
  mouseBlurHandler($);
};
