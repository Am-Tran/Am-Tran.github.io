// --- 1. GESTION DU BOUTON RETOUR EN HAUT ---
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        // Cette ligne s'affichera dans la console (F12) pour vérifier que ça tourne
        // console.log("Position du scroll :", window.scrollY); 
        
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
}

// --- 2. GESTION DE SWIPER (Seulement si le carrousel est présent) ---
const swiperElement = document.querySelector(".mySwiper");

if (swiperElement) {
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoHeight: true,
        preventClicks: false,
        preventClicksPropagation: false,
        pagination: { 
            el: ".swiper-pagination", 
            clickable: true 
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}