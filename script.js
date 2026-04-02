// Initialisation de Swiper
const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoHeight: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
   
});