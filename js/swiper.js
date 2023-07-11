const createSectionRooms = () => {
  const rooms = document.createElement('section');
  rooms.className = "rooms";
  rooms.id = 'rooms';
  rooms.insertAdjacentHTML('beforeend', `

    <div class="container rooms__container">
      <h2 class="subtitle rooms__subtitle">Наши залы</h2>

      <div class="swiper">
        <div class="swiper-wrapper">
           <swiper-slide>
<!--              <a class="swiper__link" href="/">-->
              <img class="swiper__img" src='img/swiper/80s.jpg' alt="80s">
              </swiper-slide>
          <swiper-slide>
<!--              <a class="swiper__link" href="/">-->
              <img class="swiper__img" src='img/swiper/starwars.jpg' alt="starwars">
              </swiper-slide>
          <swiper-slide>
<!--              <a class="swiper__link" href="/">-->
              <img class="swiper__img" src='img/swiper/wildwest.jpg' alt="wildwest">
              </swiper-slide>
          <swiper-slide>
<!--              <a class="swiper__link" href="/">-->
              <img class="swiper__img" src='img/swiper/neon.jpg' alt="neon">

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

const createSectionReviews = () => {
  const reviews = document.createElement('section');
  reviews.className = "reviews";
  reviews.id = 'reviews';
  reviews.insertAdjacentHTML('beforeend', `

    <div class="container reviews__container">
          <h2 class="subtitle reviews__subtitle">
            Отзывы посетителей
          </h2>
          <div class="swiper">
            <div class="swiper-wrapper">
              <swiper-slide>
                <div class="reviews__item">
                <figure class="reviews__figure">
                  <div class="reviews__block-img">
                    <img class="reviews__img" src="img/reviews/person_1.png" width="150" alt="Имя">
                  </div>
                  <figcaption class="reviews__text-size">Макс Самойлов
                  </figcaption>
                </figure>
                <p class="reviews__text reviews__text-size">
                  Отмечали здесь день рождения с компанией друзей, все было очень круто! VR очки это просто бомба,
                  никогда еще я не был в таком полном игровом погружении. Сервис на высоте!
                </p>
              </div>
              </swiper-slide>
              <swiper-slide>
                <div class="reviews__item">
                <figure class="reviews__figure">
                  <div class="reviews__block-img">
                    <img class="reviews__img" src="img/reviews/person_2.png" width="150" alt="Имя">
                  </div>
                  <figcaption class="reviews__text-size">Оксана Григорьева</figcaption>
                </figure>
                <p class="reviews__text reviews__text-size">
                  Были в комнате Дикий Запад, пели в караоке под Шакиру, отличный получился корпоратив! У нас в городе
                  больше нет подобных заведений
                </p>
              </div>
              </swiper-slide>
              <swiper-slide>
                 <li class="reviews__item">
                <figure class="reviews__figure">
                  <div class="reviews__block-img">
                    <img class="reviews__img" src="img/reviews/person_3.png" width="150" alt="Имя">
                  </div>
                  <figcaption class="reviews__text-size">Никита Ященко</figcaption>
                </figure>
                <p class="reviews__text reviews__text-size">
                  Немного подвисала игра в VR очках, а так все норм. Крутое оформление комнаты в стиле звездных войн,
                  попал в атмосферу космоса
                </p>
              </li>
              </swiper-slide>
            </div>
            <button class="reviews__button-prev">
                          <svg class="reviews__prev-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 27 51" fill="none">
            <path d="M25.4558 0L26.5626 1.10678L1.10674 26.5626L-3.31402e-05 25.4558L25.4558 0Z" fill="#6C0287"/>
            <path d="M-3.31402e-05 25.4558L1.10674 24.3491L26.5626 49.8049L25.4558 50.9117L-3.31402e-05 25.4558Z" fill="#6C0287"/>
            </svg>
            </button>
            <button class="reviews__button-next">
                    <svg class="reviews__next-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 51" fill="none">
                    <path d="M1.45581 0L0.349035 1.10678L25.8049 26.5626L26.9117 25.4558L1.45581 0Z" fill="#6C0287"/>
                    <path d="M26.9117 25.4558L25.8049 24.3491L0.349036 49.8049L1.45581 50.9117L26.9117 25.4558Z" fill="#6C0287"/>
                    </svg>
                </button>
          </div>
    </div>
  `);

  return reviews;
};

export const initSwiperRooms = () => {
  const preview = document.querySelector('#preview');
  preview.after(createSectionRooms());

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //   delay: 2000
    // },
    pagination: {
      el: '.swiper-pagination',
    },
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
    effect: 'coverflow',
    coverflowEffect: {
      scale: 0.4,
      slideShadows: true,
    }
  });
};

export const initSwiperReviews = () => {
  const about = document.querySelector('#about');
  about.after(createSectionReviews());

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //   delay: 2000
    // },
    speed: 500,
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
    mousewheel: true,
    keyboard: true,
  });
};

