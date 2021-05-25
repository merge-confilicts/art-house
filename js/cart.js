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
    // let slideShow = document.getElementById('alertMsg');
    // let displaySetting = slideShow.style.display;
    // if (displaySetting == 'block') {
    //     slideShow.style.display = 'none';
    // } else if (okBtn.addEventListener) {
    //     slideShow.style.display = 'block';

    localStorage.removeItem("product");
    localStorage.removeItem("price"); 
    location.reload(); 
    }



const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart; 

const cartProduct = JSON.parse(localStorage.getItem('product')) || []; 
console.log(cartProduct); 
const cartPrice = JSON.parse(localStorage.getItem('price')) || [];
console.log(cartPrice); 
function renderCart() {
	// loadCart();
	clearCart();
	showCart();
  }

// function loadCart() {
//   new cartProduct(paints[i], cartPrice[i]);
//   }
// console.log(cartItems);
function clearCart() {
let tBody= table.getElementsByTagName('tbody')[0];

while (tBody.firstElementChild){
  tBody.removeChild(tBody.firstElementChild);
}
}

function showCart() {
	let tBody = table.getElementsByTagName('tbody')[0];
	for (let i=0; i<cartProduct.length;i++){
		
	let tableRow = document.createElement('tr');
    
	let deletetd= document.createElement('td');
    deletetd.setAttribute('id',cartProduct[i]);
    let button=document.createElement('p');
    deletetd.appendChild(button);
    button.textContent='X';
    button.setAttribute('id',cartProduct[i]);
    button.addEventListener('click',removeItemFromCart);
  
    let nameProducttd= document.createElement('td');
    nameProducttd.textContent=cartProduct[i];
    
	let Pricetd= document.createElement('td');
  Pricetd.textContent=cartPrice[i];
  
    tBody.appendChild(tableRow);
    tableRow.appendChild(deletetd);
    tableRow.appendChild(nameProducttd);
    tableRow.appendChild(Pricetd);
  }
}

function removeItemFromCart(event) {
	let removeItem= event.target.id;
	for (let i=0; i<cartProduct.length;i++){
	  if (cartProduct[i].product===removeItem){
      cartProduct.removeItem (cartProduct[i]);
      cartPrice.removeItem (cartPrice[i]);
	}}

	// cartProduct.saveToLocalStorage();
  // price.saveToLocalStorage(); 
    renderCart();
}

renderCart();