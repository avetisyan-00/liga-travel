const sliderTrain = document.querySelector('.train__instructor');

const initSliderTrain = () => {
  if (sliderTrain) {
    // eslint-disable-next-line
    new Swiper(sliderTrain, {
      navigation: {
        nextEl: '#train-slider-next',
        prevEl: '#train-slider-prev',
      },

      breakpoints: {
        1200: {
          initialSlide: 4,
          slidesPerView: 4,
          spaceBetween: 20,
        },

        768: {
          initialSlide: 4,
          slidesPerView: 3,
          spaceBetween: 20,
        },

        320: {
          initialSlide: 2,
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderTrain};
