
const createSectionRooms = () => {
  const rooms = document.createElement('section');
  // <section  id="rooms">
  rooms.className = "rooms";
  rooms.id = 'rooms';
  rooms.insertAdjacentHTML('beforeend', `

    <div class="container rooms__container">
      <h2 class="subtitle rooms__subtitle">Наши залы</h2>

      <div class="swiper">
        <div class="swiper-wrapper">
           <swiper-slide>
              <a class="swiper__link" href="/">
              <img class="swiper__img" src='img/swiper/80s.jpg' alt="80s">
              </a></swiper-slide>
          <swiper-slide>
              <a class="swiper__link" href="/">
              <img class="swiper__img" src='img/swiper/starwars.jpg' alt="starwars">
              </a></swiper-slide>
          <swiper-slide>
              <a class="swiper__link" href="/">
              <img class="swiper__img" src='img/swiper/wildwest.jpg' alt="wildwest">
              </a></swiper-slide>
          <swiper-slide>
              <a class="swiper__link" href="/">
              <img class="swiper__img" src='img/swiper/neon.jpg' alt="neon">
              </a>
          </swiper-slide>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Navigation -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
  `);

  return rooms;
};

export const initSwiper = () => {
  const preview = document.querySelector('#preview');
  preview.append(createSectionRooms());

   const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000
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
};
