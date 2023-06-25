
new Swiper('.swiper', {slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 3000
  },

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
