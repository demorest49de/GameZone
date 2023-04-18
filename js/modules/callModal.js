import {changeVisibility} from './burgerMenu.js';

export const callModalHandler = () => {
  const toggleModalVisible = (isActive) => {
    document.body.style.overflow = isActive ? 'hidden' : 'visible';
  };

  const modalCalllBtn = document.querySelector('.header__call-button');
  const burgerCalllBtn = document.querySelector('.burger__call-button');

  const callOverlay = document.querySelector('.call-overlay');
  const closeBtn = callOverlay.querySelector('.call__close-btn');
  const screenWidthForScroll = 1024;

  modalCalllBtn.addEventListener("click", () => {
    handleCallBtns();
  });

  burgerCalllBtn.addEventListener("click", () => {
    handleCallBtns();
  });

  const handleCallBtns = () => {
    const isActive = callOverlay.classList.toggle('is-visible');
    changeVisibility();
    toggleModalVisible(isActive && screen.width > screenWidthForScroll);
  };

  callOverlay.addEventListener('click', ({target}) => {
    console.log(' : ', closeBtn.className);
    if (!target.closest('.call') || target === closeBtn) {
      callOverlay.classList.remove('is-visible');
      toggleModalVisible(false);
    }
  });

  window.addEventListener('resize', () => {
    toggleModalVisible(callOverlay.classList.contains('is-visible') && screen.width > screenWidthForScroll);
  });
};
