const list = document.querySelector('.faq__list');
const itemActive = document.getElementsByClassName('faq__item_active');
const textWrapper = document.querySelectorAll('.faq__item-wrapper');
let heightWrapper = 0;

const updateHeightWrapper = () => {
  heightWrapper = 0;

  textWrapper.forEach(item => {
    const itemHeight = getComputedStyle(item.querySelector('.faq__text'), "").height;
    const heightNumber = +(itemHeight.slice(0, -2));
    if (heightNumber > heightWrapper) {
      heightWrapper = heightNumber;
    }
  });
  console.log(' : ', heightWrapper);
};

updateHeightWrapper();

window.addEventListener('resize', () => {
  updateHeightWrapper();
  if (itemActive[0]) {
    itemActive[0].querySelector('.faq__item-wrapper').style.height = `${heightWrapper}px`;
  }
});

list.addEventListener('click', ({target}) => {

  if (itemActive[0] && itemActive[0] !== target.closest('.faq__item')) {
    itemActive[0].querySelector('.faq__item-wrapper').style.height = '0';

    itemActive[0].classList.remove('faq__item_active');
  }

  if (target.closest('.faq__button')) {

    const item = target.closest('.faq__item');
    const isActive = item.classList.toggle('faq__item_active');
    const txtWrapper = item.querySelector('.faq__item-wrapper');
    updateHeightWrapper();
    txtWrapper.style.height = isActive ? `${heightWrapper}px` : '0';
  }
});
