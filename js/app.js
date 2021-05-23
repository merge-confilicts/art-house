<<<<<<< HEAD
 let form  = document.getElementById('joinForm');

form.addEventListener('click',handelClicks)
let btn = document.getElementById('submitm');
let xBtn = document.getElementById('xsubmit');
btn.addEventListener('click', handelClicks);
xBtn.addEventListener('click', handelClicks);
function handelClicks(event) {
    event.preventDefault();
    let slideShow = document.getElementById('submitm');
    let displaySetting = slideShow.style.display;
    if (displaySetting == 'block') {
        slideShow.style.display = 'none';
        btn.innerHTML = 'submitm';
=======
'use strict';

let btn = document.getElementById('button');
let xBtn = document.getElementById('xButton');
btn.addEventListener('click', tourShow);
xBtn.addEventListener('click', tourShow);

function tourShow(event) {
    let slideShow = document.getElementById('tour');
    let displaySetting = slideShow.style.display;

    if (displaySetting == 'block') {
        slideShow.style.display = 'none';
        btn.innerHTML = 'tour';
>>>>>>> 26aa6bbd8d3f4d28a7a98a515d637f22d2f8256c
    } else if (xBtn.addEventListener) {
        slideShow.style.display = 'block';
    }
}

<<<<<<< HEAD
=======
let index = 1;
showSlide(index);
function plusSlides(action) {
    showSlide(index += action);
}

function showSlide(n) {
    let slides = document.getElementsByClassName('mySlide');
    console.log(slides);
    if (n > slides.length) { index = 1 }
    if (n < 1) { index = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    slides[index-1].style.display = "block";

}
>>>>>>> 26aa6bbd8d3f4d28a7a98a515d637f22d2f8256c

