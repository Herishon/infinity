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
let collapseBtn = document.querySelectorAll('.coll-btn');
let len = document.querySelectorAll('.coll-btn').length;
for(let i = 0; i < len; i++) {
    collapseBtn[i].addEventListener('click', function(){

        collapseBtn[i].nextElementSibling.classList.toggle('show-coll');
        collapseBtn[i].querySelector('.fa-angle-down').classList.toggle("fa-angle-up");
        
    })
}