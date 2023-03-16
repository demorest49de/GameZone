const items = document.querySelectorAll('.faq__item');
const buttons = document.querySelectorAll('.faq__button');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    items[index].classList.toggle('faq__item_active');
  });
});
