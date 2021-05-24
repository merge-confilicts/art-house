
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
//................Join us form code.....................

// let form  = document.getElementById('joinForm');

// form.addEventListener('click',handelClicks)
// let btn1 = document.getElementById('submitm');
// let xBtn1 = document.getElementById('xsubmit');
// btn1.addEventListener('click', handelClicks);
// xBtn1.addEventListener('click', handelClicks);
// function handelClicks(event) {
//     event.preventDefault();
//     let slideShow = document.getElementById('submitm');
//     let displaySetting = slideShow.style.display;
//     if (displaySetting == 'block') {
//         slideShow.style.display = 'none';
       
//     }
// }

function settingpaints(){
    let data = JSON.stringify(products);
    localStorage.setItem('paintsImg',data);
}

function gettingppaints(){
    let stringpaint = localStorage.getItem('paintsImg')
    let normalpaint = JSON.parse(stringpaint);
    if (normalpaint !== null){
        products =normalpaint ;
  }
}
settingpaints();

