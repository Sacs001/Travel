
// Slider 

// for mobile

let slide = document.querySelectorAll(".destination");
let slideSwitch = document.querySelectorAll(".slide_swicher");
let btnLeft = document.querySelector('.arrow_left_slider')
let btnRight = document.querySelector('.arrow_right_slider')
let i = 0;
let z = 1;

// for Desktop

function removeActAndAction() {

    slideSwitch.forEach((elem) => {
        elem.classList.remove("act")
    });
    slide.forEach((slider) => {
        slider.classList.remove("slide_active");
    });
};

slideSwitch.forEach(e => {
    e.addEventListener('click', () => {
        removeActAndAction()
        e.classList.add('act')
        i = e.id;
        slide[i].classList.add('slide_active');
    });
});


// For mobile

btnLeft.addEventListener('click', function () {
    i--;
    if (i == -1) i = 2;
    changer();

});

btnRight.addEventListener('click', function () {
    i++;
    if (i == 3) i = 0;
    changer();
});

function changer() {
    removeActAndAction()
    slideSwitch[i].classList.add('act');
    slide[i].classList.add('slide_active');
}



// sing_up

let popupLogin = document.querySelector('.popup_login')
let popupSingUp = document.querySelector('.popup_sing_up')

function styleChange(clas) {
    setTimeout(() => {
        clas.classList.toggle('popup_close')
    }
        , 300)
};


document.querySelector('.btn_login').addEventListener('click', (ev) => {
    styleChange(popupLogin)

});

document.querySelector('.register').addEventListener('click', () => {
    styleChange(popupSingUp)
});

document.querySelector(".forgot_your_pass").addEventListener('click', (event) => {
    event.preventDefault()
});
document.querySelector(".register").addEventListener('click', (event) => {
    event.preventDefault()
});

document.querySelector(".register_log_in").addEventListener('click', (event) => {
    event.preventDefault()
    styleChange(popupSingUp)
});


// Close

document.addEventListener('click', (event) => {
    if (event.target.classList.value == "popup_login") {
        styleChange(popupLogin)
    } else if (event.target.classList.value == "popup_sing_up") {
        styleChange(popupSingUp)
    }
    console.log(event.target.classList.value)
});

document.addEventListener('keydown', (event) => {
    if (event.keydown == 27) {
        styleChange(popupLogin)
        console.log(event.keydown)
    }
});