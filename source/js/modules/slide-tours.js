const sliderTours = document.querySelector('.tours__slider');

const initSliderTours = () => {
  if (sliderTours) {
    // eslint-disable-next-line
    new Swiper(sliderTours, {
      initialSlide: 1,
      navigation: {
        nextEl: '#tours-slider-next',
        prevEl: '#tours-slider-prev',
      },

      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderTours};
