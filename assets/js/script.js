import { productsList, viewComponent } from './utils.js';
import { productCard } from './multiComponent.js';


// Header progressBar functional 
function updateProgressBar() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById("progressBar").style.width = scrollPercentage + "%";
}

window.onscroll = function() {
    updateProgressBar();
};

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".navigation-menu");

    // Toggle menu 
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        hamburger.classList.toggle("active");

        const isOpen = menu.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isOpen);
    });

    // Close menu
    document.querySelectorAll(".navigation-menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            hamburger.classList.remove("active");
            hamburger.setAttribute("aria-expanded", false);
        });
    });
});



const productListComponent = document.getElementById('products-list');
viewComponent(productsList, productCard, productListComponent)

