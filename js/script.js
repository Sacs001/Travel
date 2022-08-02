let slide = document.querySelectorAll(".popular_destination_section .destination");
let popularDestinationSlider = document.querySelector(".slider .popular_destination_slider")
let slideSwitch = document.querySelectorAll(".slide_swicher");
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
slideSwitch.forEach(item => {
    item.addEventListener("click", (event) => {
        console.log(event)
        let classSlide = event.originalTarget.classList;
        classSlide.forEach(item2 => {
            classSlide.remove("active")
            if (item2 !== 'active') {
                classSlide.add("active")
                console.log(classSlide)
            }
        });
        console.log("tup")
    })
})
function slideDot() {

}
window.addEventListener("resize", init)

