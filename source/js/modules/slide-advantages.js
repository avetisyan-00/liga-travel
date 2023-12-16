const sliderAdvantages = document.querySelector('.advantages__blocks');

function initSliderAdvantages() {
  let mySwiper = null;
  function initSwiper() {
    mySwiper = new Swiper(sliderAdvantages, {
      centeredSlides: true,
      slidesPerView: 'auto',
      initialSlide: 4,
      spaceBetween: 30,
      loop: true,

      navigation: {
        nextEl: '#advantages-slider-next',
        prevEl: '#advantages-slider-prev',
      },
    });
  }

  function destroySwiper() {
    if (mySwiper) {
      mySwiper.destroy();
      mySwiper = null;
    }
  }

  function handleWindowSizeChange() {
    if (window.innerWidth >= 1200) {
      if (!mySwiper) {
        initSwiper();
      }
    } else {
      destroySwiper();
    }
  }

  handleWindowSizeChange();

  window.addEventListener('resize', handleWindowSizeChange);
}

export {initSliderAdvantages};
