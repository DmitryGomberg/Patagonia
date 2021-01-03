

new Swiper('.swiper_images', {
    navigation: {
        nextEl: '.swiper-button-thenext',
        prevEl: '.swiper-button-back'
    },
    
    
   spaceBetween: 15,
//    autoplay: {
//        delay: 2000,
//        stopOnLastSlide: true,
//        disableOnInteraction: true,
//    },
    speed: 800,
});

new Swiper('.prod_swiper_container', {
    slidesPerView: 4,
    watchOverflow: true,
    slidesPerGroup: 2,
    navigation: {
        nextEl: '.swiper_prod_next',
        prevEl: '.swiper_prod_prev'
    },
    breakpoints:{
        300:{
            slidesPerView:1,
            slidesPerGroup: 1,
        },
        400:{
            slidesPerView:2,
            slidesPerGroup: 1,
        },
        600:{
            slidesPerView:3,
            slidesPerGroup: 1,
            
        },
        800:{
            slidesPerView:4,
        }
    },
});
