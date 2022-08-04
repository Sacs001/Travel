
// Slider 

// for mobile

let slide = document.querySelectorAll(".destination");
let slideSwitch = document.querySelectorAll(".slide_swicher");
// let btnLeft = document.querySelector('.')
// let btnRight = document.querySelector('.')
let i = 1;
let z = 1;

// for Desktop

slideSwitch.forEach(e => {
    e.addEventListener('click', () => {
        slideSwitch.forEach((elem) => {
            elem.classList.remove("act")
        })
        e.classList.add('act')
        i = e.id;
        slide.forEach((slider) => {
            slider.classList.remove("slide_active");
        })
        slide[i - 1].classList.add('slide_active');
    });
});

// For mobile


// btnLeft.addEventListener('click', function () {
//     changer(i - 1);
// });

// btnRight.addEventListener('click', function () {
//     changer(i + 1);
// });

function changer() {
    slideSwitch[i - 1].classList.remove('act');
    slideSwitch[i].classList.add('act');
    slide[i].classList.add('slide_active');
    slide[i - 1].classList.remove('slide_active')
}