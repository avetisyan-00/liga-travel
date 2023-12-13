const sliderAdvantages = document.querySelector('.advantages__blocks');

const initSliderAdvantages = () => {
  if (sliderAdvantages) {
    // eslint-disable-next-line
    const swiper = new Swiper(sliderAdvantages, {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: '#advantages-slider-next',
        prevEl: '#advantages-slider-prev',
      },
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1200) {
        swiper.init();
      } else {
        swiper.destroy();
      }
    });
  }
};

export {initSliderAdvantages};
