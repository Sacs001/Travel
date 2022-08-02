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






// other


function converter(num, sysInit, sysConvert) {

    if (sysInit == 0) { }

    let number = num;
    let result = 0;
    number = String(num)

    let index = number.length;
    for (let i = 0; i < number.length; i++) {
        index--;
        result += +number[i] * Math.pow(2, index);
    }
    console.log(result)

    // let binary = (num % 2).toString()
    // for (; num > 1;) {
    //     num = parseInt(num / 2)
    //     binary = (num % 2) + binary
    // }
    // console.log(binary)

}

converter(1101);
converter(1111);
// converter(14);
// converter(15);
