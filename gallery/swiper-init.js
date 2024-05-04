var thumbSwiper = new Swiper(".thumb", {
  modules: [thumbPlugin],
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  //loop: true,
  preventClicks: true,
  freeMode: true,
  watchSlidesProgress: true,
  //simulateTouch: false,

});

var swiper = new Swiper(".left", {
  modules: [galleryPlugin],
  mousewheel: true,
  keyboard: true,
  loop: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [-10, 0, 0],
      opacity: 0,
    },
    next: {
      translate: [10, 0, 0],
      opacity: 0,
    }
  },
  fadeEffect: {
    crossFade: true
  },
  preventClicks: true,
  simulateTouch: false,
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
  thumbs: {
    swiper: thumbSwiper
  },

  debugger: true,
});