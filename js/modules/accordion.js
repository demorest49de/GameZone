export const accordionHelper = () => {
  const updateHeightWrapper = () => {
    let heightWrapper = 0;
    const textWrapper = document.querySelectorAll('.faq__item-wrapper');


    textWrapper.forEach(item => {
      const itemHeight = getComputedStyle(item.querySelector('.faq__text'),
          '').height;
      const heightNumber = +(itemHeight.slice(0, -2));
      if (heightNumber > heightWrapper) {
        heightWrapper = heightNumber;
      }
    });
    return heightWrapper;
  };

  const faqWrapperResize = () => {
    const itemActive = document.getElementsByClassName('faq__item_active');
    window.addEventListener('resize', () => {
      const heightWrapper = updateHeightWrapper();
      if (itemActive[0]) {
        itemActive[0].querySelector('.faq__item-wrapper')
            .style.height = `${heightWrapper}px`;
      }
    });
  };

  const accordionClick = () => {
    const list = document.querySelector('.faq__list');
    const itemActive = document.getElementsByClassName('faq__item_active');
    list.addEventListener('click', ({target}) => {
      if (itemActive[0] && itemActive[0] !== target.closest('.faq__item')) {
        itemActive[0].querySelector('.faq__item-wrapper').style.height = '0';

        itemActive[0].classList.remove('faq__item_active');
      }

      if (target.closest('.faq__button')) {
        const item = target.closest('.faq__item');
        const isActive = item.classList.toggle('faq__item_active');
        const txtWrapper = item.querySelector('.faq__item-wrapper');
        const heightWrapper = updateHeightWrapper();
        txtWrapper.style.height = isActive ? `${heightWrapper}px` : '0';
      }
    });
  };

  const updateTextWrapperHeight = () => {
    const textWrapper = document.querySelectorAll('.faq__item-wrapper');
    textWrapper.forEach((item) => {
      item.style.height = `0px`;
    });
  };

  updateTextWrapperHeight();
  faqWrapperResize();
  accordionClick();
};


