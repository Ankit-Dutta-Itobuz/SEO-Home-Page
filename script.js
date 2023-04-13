var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides : true,
    freeMode: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        800: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
  });