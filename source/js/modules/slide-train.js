const sliderTrain = document.querySelector('.train__slider');

const initSliderTrain = () => {
  if (sliderTrain) {
    // eslint-disable-next-line
    new Swiper(sliderTrain, {
      navigation: {
        nextEl: '#tours-slider-next',
        prevEl: '#tours-slider-prev',
      },

      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderTrain};
