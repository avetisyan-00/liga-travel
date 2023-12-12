const sliderAdvantages = document.querySelector('.advantages__blocks');

const initSliderAdvantages = () => {
  if (sliderAdvantages) {
    // eslint-disable-next-line
    new Swiper(sliderAdvantages, {
      navigation: {
        nextEl: '#advantages-slider-next',
        prevEl: '#advantages-slider-prev',
      },

      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 5,
          spaceBetween: 30,
        },

        320: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderAdvantages};
