'use strict' 


function appear() { 

	document.getElementById("form").style.display="block"; 
}

let but = document.getElementById('submitBtn'); 
let form = document.getElementById('Information'); 
let popup = document.getElementById('alertMsg')
but.addEventListener('click', removeForm);
function removeForm(event) {
event.preventDefault(); 
form.style.display="none";
popup.style.display="block"; 
}

let butt = document.getElementById('xButton'); 
butt.addEventListener('click', restartPage)
function restartPage(event){
    

}

// let btn = document.getElementById('submitBtn');
// let xBtn = document.getElementById('xButton');
// btn.addEventListener('click', tourShow);
// xBtn.addEventListener('click', tourShow);
// function tourShow(event) {
//     let slideShow = document.getElementById('tour');
//     let displaySetting = slideShow.style.display;
//     if (displaySetting == 'block') {
//         slideShow.style.display = 'none';
//         btn.innerHTML = 'tour';
//     } else if (xBtn.addEventListener) {
//         slideShow.style.display = 'block';
//     }
// }




// Swal.fire({
//     title: 'Congratulation!',
//     text: 'Your order has been placed',
//     icon: 'success',
//     confirmButtonText: 'OK'
//   });