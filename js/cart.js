'use strict' 
function appear() { 
    document.getElementById("form").style.display="block"; 
}
let but = document.getElementById('submitBtn'); 
let form = document.getElementById('Information'); 
let popup = document.getElementById('alertMsg');
let okBtn = document.getElementById('okButton');
but.addEventListener('click', removeForm);
function removeForm(event) {
event.preventDefault(); 
form.style.display="none";
popup.style.display="block"; 
}

but.addEventListener('onclick', okMessage); 
okBtn.addEventListener('click', okMessage);
function okMessage(event) {
    let slideShow = document.getElementById('alertMsg');
    let displaySetting = slideShow.style.display;
    if (displaySetting == 'block') {
        slideShow.style.display = 'none';
    } else if (okBtn.addEventListener) {
        slideShow.style.display = 'block';
    }
}



// let btn = document.getElementById('submitBtn');
// let xBtn = document.getElementById('xButton');
// btn.addEventListener('click', tourShow);
// xBtn.addEventListener('click', tourShow);
// function tourShow(event) {
    
// }




// Swal.fire({
//     title: 'Congratulation!',
//     text: 'Your order has been placed',
//     icon: 'success',
//     confirmButtonText: 'OK'
//   });