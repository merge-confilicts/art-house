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
    } else if (xBtn.addEventListener) {
        slideShow.style.display = 'block';
    }
}


