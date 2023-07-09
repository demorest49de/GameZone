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
              <svg width="90px" height="90px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"
                   stroke="#6C0287" stroke-width="0.00024000000000000003" transform="matrix(1, 0, 0, 1, 0, 0)">
                  <path
                    d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"
                    fill="#6C0287"></path>
              </svg>
            </button>
            <button class="reviews__button-next">
              <svg width="90px" height="90px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"
                   stroke="#6C0287" stroke-width="0.00024000000000000003" transform="matrix(-1, 0, 0, 1, 0, 0)">
                  <path
                    d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"
                    fill="#6C0287"></path>
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

