
'use strict'

let form = document.getElementById('joinForm');
let xBtn1 = document.getElementById('xsubmit');
let msgDiv = document.getElementById('message');
xBtn1.style.display = 'none';
form.addEventListener('submit', handelClicks)
let btn1 = document.getElementById('submitm');
btn1.style.display = 'none';
msgDiv.style.display = 'none';

function handelClicks(event) {
    event.preventDefault();
    xBtn1.style.display = 'block';
    if (btn1.style.display = 'none') {
        btn1.style.display = 'block';
    }
    if (msgDiv.style.display = 'none') {
        msgDiv.style.display = 'block';
    }
};
xBtn1.addEventListener('click', handelClicks1);

function handelClicks1(event) {
    event.preventDefault();

    if (btn1.style.display = 'block') {
        btn1.style.display = 'none';
    }
    if (xBtn1.style.display = 'block') {
        xBtn1.style.display = 'none';
    }
    if (msgDiv.style.display = 'block') {
        msgDiv.style.display = 'none';
    }
};



