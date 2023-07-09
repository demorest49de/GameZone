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
            <!-- Add Navigation -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
    </div>
  `);

  return reviews;
};

export const initSwiperRooms = () => {
  const preview = document.querySelector('#preview');
  preview.append(createSectionRooms());

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
