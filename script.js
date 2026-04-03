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

function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    
    // Cache tous les contenus
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Enlève la classe "active" de tous les boutons
    tabLinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Affiche l'onglet actuel et ajoute la classe "active" au bouton
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}