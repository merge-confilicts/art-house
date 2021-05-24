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

const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart; 

const cartItems = JSON.parse(localStorage.getItem('product')) || []; 
console.log(cartItems); 

function renderCart() {
	loadCart();
	clearCart();
	showCart();
  }

function loadCart() {
	const cartItems = JSON.parse(localStorage.getItem('product')) || [];
	let cart = new Paintings(cartItems[i]);
  }

function clearCart() {
let tBody= table.getElementsByTagName('tbody')[0];

while (tBody.firstElementChild){
  tBody.removeChild(tBody.firstElementChild);
}
}

function showCart() {
	let tBody = table.getElementsByTagName('tbody')[0];
	for (let i=0; i<productsList.length;i++){
		
	let tableRow = document.createElement('tr');
    
	let deletetd= document.createElement('td');
    deletetd.setAttribute('id',productsList[i]);
    let button=document.createElement('p');
    deletetd.appendChild(button);
    button.textContent='X';
    button.setAttribute('id',productsList[i].product);
    button.addEventListener('click',removeItemFromCart);
  
    let nameProducttd= document.createElement('td');
    nameProducttd.textContent=productsList[i];
    
	let itemtd= document.createElement('td');
    itemtd.textContent=productsList[i];

    tBody.appendChild(tableRow);
    tableRow.appendChild(deletetd);
    tableRow.appendChild(nameProducttd);
    tableRow.appendChild(itemtd);

  }
}

function removeItemFromCart(event) {
	let removeItem= event.target.id;
	for (let i=0; i<cart.paintings.length;i++){
	  if (cart.paintings[i].product===removeItem){
	  cart.removeItem (cart.paintings[i]);
	}}

	cart.saveToLocalStorage();
    renderCart();
}

renderCart();