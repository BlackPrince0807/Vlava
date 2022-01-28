// aos js
AOS.init();

// swiper carusel js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// menu 

let menuIcon = document.querySelector(".navbar .bx-menu");
let menu_1 = document.querySelector(".navbar .menu_1")
console.log(menuIcon)
console.log(menu_1)


menuIcon.onclick = function() {
    menu_1.style.display = "block"
}

// card js

let port = document.querySelectorAll(".port .all_1");
let button = document.querySelectorAll(".magnam .btn_1 button");
console.log(port)
console.log(button)

button[0].onclick = function() {
    port[1].style.display = "none"
    port[2].style.display = "none"
    port[3].style.display = "none"
    port[0].style.display = "block"
}
button[1].onclick = function() {
    port[0].style.display = "none"
    port[2].style.display = "none"
    port[3].style.display = "none"
    port[1].style.display = "block"
}
button[2].onclick = function() {
    port[1].style.display = "none"
    port[0].style.display = "none"
    port[3].style.display = "none"
    port[2].style.display = "block"
}
button[3].onclick = function() {
    port[1].style.display = "none"
    port[2].style.display = "none"
    port[0].style.display = "none"
    port[3].style.display = "block"
}