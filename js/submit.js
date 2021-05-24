let form  = document.getElementById('joinForm');

form.addEventListener('submit',handelClicks)
let btn1 = document.getElementById('submitm');
let xBtn1 = document.getElementById('xsubmit');
//  btn1.addEventListener('click', handelClicks);
xBtn1.addEventListener('click', handelClicks1);
btn1.style.display = 'none';

function handelClicks(event) {
    event.preventDefault();
    // let slideShow = document.getElementById('submitm');

    if (btn1.style.display = 'none'){
    btn1.style.display = 'block';}
      
};
// xBtn1.style.display = 'none';
function handelClicks1(event) {
    event.preventDefault();
    // xBtn1.style.display = 'none';
    if (xBtn1.addEventListener = 'none'){
        xBtn1.style.display = 'block';}
   
};



