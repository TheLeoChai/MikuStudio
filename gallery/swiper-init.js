
var swiper = new Swiper(".left", {
  modules: [myPlugin],
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


  debugger: true,
});
