import {toggleBurgerMenuHandler} from './burgerMenu.js';


export const callModalHandler = ($) => {
  const toggleModalVisible = (isActive) => {
    document.body.style.overflow = isActive ? 'hidden' : 'visible';
  };
  const screenWidthForScroll = 1024;

  $.modalCalllBtn.addEventListener('click', () => {
    handleCallButtons();
  });

  $.burgerCalllBtn.addEventListener('click', () => {
    handleCallButtons();
    toggleBurgerMenuHandler($, true);
  });

  const handleCallButtons = () => {
    const isActive = $.callOverlay.classList.toggle('is-visible');
    toggleModalVisible(isActive && screen.width > screenWidthForScroll);
    // toggleBurgerMenuHandler($, isActive);
  };

  $.callOverlay.addEventListener('click', ({target}) => {
    if (!target.closest('.call') || target === $.closeBtn) {
      $.callOverlay.classList.remove('is-visible');
      toggleModalVisible(false);
    }
  });

  window.addEventListener('resize', () => {
    toggleModalVisible($.callOverlay.classList.contains('is-visible') && screen.width > screenWidthForScroll);
  });
};

export  const closeCallModal =($)=>{
  $.callOverlay.classList.remove('is-visible');
}
