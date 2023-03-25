const list = document.querySelector('.faq__list');
const itemActive = document.getElementsByClassName('faq__item_active');
const txtWrappers = document.querySelectorAll('.faq__text-wrapper');
let heightWrapper = 0;

txtWrappers.forEach(item => {
  if (item.scrollHeight > heightWrapper) {
    heightWrapper = item.scrollHeight;
  }
});

list.addEventListener('click', ({target}) => {
  if (itemActive[0] && itemActive[0] !== target.closest('.faq__item')) {
    itemActive[0].querySelector('.faq__text-wrapper').style.height = '0';

    itemActive[0].classList.remove('faq__item_active');
  }
  if (target.closest('.faq__button')) {
    const item = target.closest('.faq__item');
    const isActive = item.classList.toggle('faq__item_active');

    const txtWrapper = item.querySelector('.faq__text-wrapper');
    txtWrapper.style.height = isActive ? `${heightWrapper}px` : '0';

  }
});
