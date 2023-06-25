import Swiper from "../../node_modules/swiper/swiper-bundle.esm.browser.min.js";

export const initSwiper=()=> {
new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //   delay: 2000
    // },

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
  });

}

