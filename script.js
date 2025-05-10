"use strict"


//nav toggle
// get links & button
//listen to button click
//add & remove show links to button
const navtoggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

 
navtoggle.addEventListener("click", ()=>{
    if (links.classList.contains("show-links")) {
        links.classList.remove("show-links")
    } else {
        links.classList.add("show-links")
    }
})