let slide = document.querySelectorAll(".popular_destination_section .destination");
let popularDestinationSlider = document.querySelector(".slider .popular_destination_slider")
let count = 0;
let width;

function init() {
    console.log(slide)
    width = document.querySelector(".slider").offsetWidth;
    popularDestinationSlider.getElementsByClassName.width = width * slide.length + "px";
    slide.forEach(item => {
        item.getElementsByClassName.width = width + "px";
        // item.style.height = "auto";
    })

}

window.addEventListener("resize", init)