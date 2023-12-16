const sliderGallery = document.querySelector('.gallery__slider');

const initSliderGallery = () => {
  if (sliderGallery) {
    // eslint-disable-next-line
    new Swiper(sliderGallery, {
      loop: true,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '#gallery-slider-next',
        prevEl: '#gallery-slider-prev',
      },

      breakpoints: {
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 5,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 5,
        },

        320: {
          slidesPerView: 2,
          spaceBetween: 3,
        },
      },
    });
  }
};

export {initSliderGallery};
