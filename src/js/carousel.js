var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  centerSlide: true, 
  fade: true, 
  grabCursor: true, 
  autoplay: {
    delay: 5000, 
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
    dynamicBullets: true,   
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
