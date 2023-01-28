// Banner Swiper
const swiper = new Swiper('.bannerSwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  speed: 2000,
  autoplay: {
    enabled: true,
    delay: 4000,
  },
  effect: "fade",
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
