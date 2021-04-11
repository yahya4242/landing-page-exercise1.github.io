//select the navbar
let navbar = document.querySelector("#header");
//change navbar color on scrolling below top
window.addEventListener('scroll', (e) => {
    e.preventDefault();
    if (window.scrollY <= 150) {
        navbar.style.background = "transparent";
    } else {
        navbar.style.background = "blue"
    }
});

//change slides

let slideIndex = 1;

showSlide(slideIndex);

function plusSlide(n) {
    showSlide(slideIndex += n);
};

function showSlide(n) {
    let i;
    let slide = document.getElementsByClassName("slides")

    if (n > slide.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slide.length;
    };

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    };

    slide[slideIndex - 1].style.display = "block";
}

const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");

prev[0].addEventListener("click", function() { plusSlide(-1) });
next[0].addEventListener("click", function() { plusSlide(1) });