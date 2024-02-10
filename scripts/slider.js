import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4.3, 
    spaceBetween: 20, 

    navigation: {
        nextEl: '#swiper-button-next', 
        prevEl: '#swiper-button-prev', 
    },
});