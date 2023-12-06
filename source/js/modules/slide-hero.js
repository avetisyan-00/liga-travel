const sliderHero = document.querySelector('.hero');

const initSliderHero = () => {
  if (sliderHero) {
    // eslint-disable-next-line
    new Swiper(sliderHero, {
      slidesPerView: 1,
      pagination: {
        el: '.hero__bullets',
        type: 'bullets',
        bulletElement: 'button',
        loop: true,
        clickable: true,
      },
    });
  }
};

export {initSliderHero};
