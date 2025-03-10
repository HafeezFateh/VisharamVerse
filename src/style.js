// const menu = document.getElementById("menu");
//         const mobileMenu = document.getElementById("mobile-menu");
//         menu.addEventListener("click", function(){
//             if (mobileMenu.style.display === "flex") {
//                mobileMenu.style.display = "none";  // Hide the menu
//             } else {
//                mobileMenu.style.display = "flex";  // Show the menu
//             }   
// })




function toggleMenu() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('expanded');
    }

