const bar = document.querySelector('.bar');
const nav = document.querySelector('nav');
bar.addEventListener('click', () => {
    nav.classList.toggle('show');
    bar.classList.toggle('fa-xmark');
});

var moadel = document.querySelectorAll(".moadel");
var first = document.getElementById("first");
var last = document.getElementById("last");
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var modalImg = document.getElementById("modalImg");
var modalImg2 = document.getElementById("modalImg2");
first.addEventListener("click", function() {
moadel[0].style.transform = "scale(1)";
modalImg.src = "./assets/images/experience/apelah.jpg";
});
last.addEventListener("click", function() {
moadel[1].style.transform = "scale(1)";
modalImg2.src = "./assets/images/testimonials/11.jpg";
});
btn.addEventListener("click", function() {
moadel[0].style.transform = "scale(0)";
});
btn2.addEventListener("click", function() {
moadel[1].style.transform = "scale(0)";
});
document.onkeydown = (e)=> {
if(e.key == "Escape") {
    moadel[0].style.transform = "scale(0)";
    moadel[1].style.transform = "scale(0)";
}
};

let arrowUp = document.querySelector('.arrow-up');
// on load 
window.onscroll = function () {
    if (scrollY > 600) {
        arrowUp.style.display= "flex";
    } else {
        arrowUp.style.display= "none";
    }
}
// on click
arrowUp.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior:'smooth'});
});