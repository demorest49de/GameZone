const items = document.querySelectorAll('.faq__item');
const buttons = document.querySelectorAll('.faq__button');
const textWrappers = document.querySelectorAll('.faq__text-wrapper');


let heightWrapper = 0;

textWrappers.forEach(item => {
  if (item.scrollHeight > heightWrapper) {
    heightWrapper = item.scrollHeight;
  }
});


buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i++) {
      if (index === i) {
        textWrappers[i].style.height =
          items[i].classList.contains('faq__item_active') ?
            // '' : `${heightWrapper}px`;
            '' : `${textWrappers[i].scrollHeight}px`;
        items[i].classList.toggle('faq__item_active');
      } else {
        items[i].classList.remove('faq__item_active');
        textWrappers[i].style.height = '';
      }
    }
  });
});

