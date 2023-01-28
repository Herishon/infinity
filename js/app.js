// Top note show-hide function
const noteTogglerBtn = document.getElementById("noteTogglerBtn");
const noteTogglerIcon = document.getElementById("togglerIcon");
const note = document.getElementById("note");

const body = document.getElementById("parent-body");

noteTogglerBtn.addEventListener("click", function () {
    
    let noteStyle = "";
    this.classList.toggle("collapse-me");
    
    if(note.style.marginTop == "0rem") {
        note.style.marginTop = "-7.5rem";
        note.style.visibility = "hidden";
        body.style.marginTop = "0rem";
        noteStyle = "hidden";
    } else {
        note.style.marginTop = "0rem";
        note.style.visibility = "visible";
        body.style.marginTop = "7.5rem";
        noteStyle = "visible";
    }

    if(noteStyle == "visible") {
        noteTogglerIcon.classList.add("fa-minus");
        noteTogglerIcon.classList.remove("fa-plus");
    } else {
        noteTogglerIcon.classList.add("fa-plus");
        noteTogglerIcon.classList.remove("fa-minus");
    }

})


// Top head section BDT-USD drop-down function
const currencyBtn = document.getElementById("drop_btn");
const dropMenu = document.getElementById("drop_menu");

currencyBtn.addEventListener("click", function () {

    if(dropMenu.style.display == "none") {
        dropMenu.style.display = "block";
    } else {
        dropMenu.style.display = "none";
    }

})


// Fixed Navbar
window.addEventListener("scroll", function () {

    const nav = document.getElementById("navBar");
    nav.classList.toggle("top-fixed", window.scrollY > 100);

})


// Mobile/Hamburger Menu
const mobileBtn = document.getElementById("mobile-menu-btn");
const navBar = document.getElementById("navbarNav");
const cartCounter = document.getElementById("cart-counter");

mobileBtn.addEventListener("click", function () {

    navBar.classList.toggle("show");
    cartCounter.classList.toggle("d-none");

})
// Dynamically Change Menu Icon
$('#mobile-menu-btn').click(function () {

    $(this).find('i').toggleClass('fa-bars fa-times');

})


// Collapsible items
const collBtn1 = document.getElementById("collBtn1");
const collItem1 = document.getElementById("collItem1");
const icon1 = document.querySelector(".arrow1");

collBtn1.addEventListener("click", function () {

    let letDecide = "";

    if(collItem1.style.display == "block") {
        collItem1.style.display = "none";
        letDecide = "none";
        
    } else {
        collItem1.style.display = "block";
        letDecide = "block";
    }

    if(letDecide == "block") {
        console.log("angle-up");
        icon1.classList.remove("fa-angle-down");
        icon1.classList.add("fa-angle-up");
    } else {
        console.log("angle-down");
        icon1.classList.remove("fa-angle-up");
        icon1.classList.add("fa-angle-down");
    }

})

const collBtn2 = document.getElementById("collBtn2");
const collItem2 = document.getElementById("collItem2");
const icon2 = document.querySelector(".arrow2");

collBtn2.addEventListener("click", function () {

    let letDecide = "";

    if(collItem2.style.display == "block") {
        collItem2.style.display = "none";
        letDecide = "none";
    } else {
        collItem2.style.display = "block";
        letDecide = "block";
    }

    if(letDecide == "block") {
        console.log("angle-up");
        icon2.classList.remove("fa-angle-down");
        icon2.classList.add("fa-angle-up");
    } else {
        console.log("angle-down");
        icon2.classList.remove("fa-angle-up");
        icon2.classList.add("fa-angle-down");
    }

})

const collBtn3 = document.getElementById("collBtn3");
const collItem3 = document.getElementById("collItem3");
const icon3 = document.querySelector(".arrow3");

collBtn3.addEventListener("click", function () {

    let letDecide = "";

    if(collItem3.style.display == "block") {
        collItem3.style.display = "none";
        letDecide = "none";
    } else {
        collItem3.style.display = "block";
        letDecide = "block";
    }

    if(letDecide == "block") {
        console.log("angle-up");
        icon3.classList.remove("fa-angle-down");
        icon3.classList.add("fa-angle-up");
    } else {
        console.log("angle-down");
        icon3.classList.remove("fa-angle-up");
        icon3.classList.add("fa-angle-down");
    }

})

const collBtn4 = document.getElementById("collBtn4");
const collItem4 = document.getElementById("collItem4");
const icon4 = document.querySelector(".arrow4");

collBtn4.addEventListener("click", function () {

    let letDecide = "";

    if(collItem4.style.display == "block") {
        collItem4.style.display = "none";
        letDecide = "none";
    } else {
        collItem4.style.display = "block";
        letDecide = "block";
    }

    if(letDecide == "block") {
        console.log("angle-up");
        icon4.classList.remove("fa-angle-down");
        icon4.classList.add("fa-angle-up");
    } else {
        console.log("angle-down");
        icon4.classList.remove("fa-angle-up");
        icon4.classList.add("fa-angle-down");
    }
    
})