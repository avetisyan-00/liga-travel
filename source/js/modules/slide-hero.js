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
        bulletClass: 'hero__bullet',
        bulletActiveClass: 'hero__bullet--active',
        modifierClass: 'hero__',
        loop: true,
        clickable: true,
      },
    });
  }
};

export {initSliderHero};
