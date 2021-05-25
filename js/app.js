
'use strict';

//................Tour button code.....................
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
    } else if (xBtn.addEventListener) {
        slideShow.style.display = 'block';
    }
}

//................Slide show code.....................

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

    slides[index - 1].style.display = "block";
}

