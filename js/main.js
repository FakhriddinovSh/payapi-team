"use strict";

let elHeader = document.querySelector(".site-header")
let elHamburger = document.querySelector(".site-header__hamburger")

elHamburger.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--active")
})