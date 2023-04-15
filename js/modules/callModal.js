const modalBtn = document.querySelector('.header__call-button');
const callOverlay = document.querySelector('.call-overlay');
const body = document.body;
const closeBtn = callOverlay.querySelector('.call__close-btn');

const screenWidthForScroll =  1024;


export const toggleModalVisible = (isActive) => {
  body.style.overflow = isActive ? 'hidden' : 'visible';
};

modalBtn.addEventListener("click", () => {
  const isActive = callOverlay.classList.toggle('is-visible');
  toggleModalVisible(isActive && screen.width > screenWidthForScroll);
});

callOverlay.addEventListener('click', ({target}) => {
  console.log(' : ',closeBtn.className);
  if (!target.closest('.call') || target === closeBtn) {
    callOverlay.classList.remove('is-visible');
    toggleModalVisible(false);
  }
});

window.addEventListener('resize', () => {
  toggleModalVisible(callOverlay.classList.contains('is-visible') && screen.width > screenWidthForScroll);
  // console.log(' : ', screen.width, callOverlay.classList.contains('is-visible'));
});
