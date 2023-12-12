const sliderReview = document.querySelector('.review__blocks');

const initSliderReview = () => {
  if (sliderReview) {
    // eslint-disable-next-line
    new Swiper(sliderReview, {
      navigation: {
        nextEl: '#review-slider-next',
        prevEl: '#review-slider-prev',
      },

      breakpoints: {
        1200: {
          slidesPerView: 1.5,
          spaceBetween: 120,
        },

        768: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderReview};
