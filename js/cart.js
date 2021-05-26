'use strict';

function appear() {
  document.getElementById("form").style.display = "block";
}
let but = document.getElementById('submitBtn');
let form = document.getElementById('Information');
let popup = document.getElementById('alertMsg');
let okBtn = document.getElementById('okButton');
but.addEventListener('click', removeForm);
function removeForm(event) {
  event.preventDefault();
  form.style.display = "none";
  popup.style.display = "block";
}

but.addEventListener('onclick', okMessage);
okBtn.addEventListener('click', okMessage);
function okMessage(event) {
 
  localStorage.removeItem("product");
  localStorage.removeItem("price");
  location.reload();
}



let table = document.getElementById('cart');
let tBody = table.getElementsByTagName('tbody')[0];
let tableRow;
let cart;
let cartProduct;
let cartPrice;
let sum = 0;
function getLocalStorage() {
  cartProduct = JSON.parse(localStorage.getItem('product')) || [];
  console.log(cartProduct);
  cartPrice = JSON.parse(localStorage.getItem('price')) || [];
  cartPrice = cartPrice.map(Number);
  for (let i = 0; i < cartPrice.length; i++) {
    sum += cartPrice[i]; }
 
  console.log(cartPrice);
}


function renderCart() {
  clearCart();
  showCart();
}

function clearCart() {
  while (tBody.firstElementChild) {
    tBody.removeChild(tBody.firstElementChild);
  }
}
function showCart() {
  let tBody = table.getElementsByTagName('tbody')[0];
  for (let i = 0; i < cartProduct.length; i++) {

    tableRow = document.createElement('tr');

    let deletetd = document.createElement('td');
    deletetd.setAttribute('id', cartProduct[i]);
    let button = document.createElement('p');
    deletetd.appendChild(button);
    button.textContent= 'X';
    button.setAttribute('id', i);
    button.addEventListener('click', removeItemFromCart);

    let nameProducttd = document.createElement('td');
    nameProducttd.textContent = cartProduct[i];

    let Pricetd = document.createElement('td');
    Pricetd.textContent = cartPrice[i];
    
    let spantd = document.createElement('span'); 
    spantd.textContent = '$'; 
    Pricetd.appendChild(spantd); 

    tBody.appendChild(tableRow);
    tableRow.appendChild(deletetd);
    tableRow.appendChild(nameProducttd);
    tableRow.appendChild(Pricetd);
  }
}

function removeItemFromCart(event) {
  let removeItem = event.target.id;
  let removeArray = [];
  let removeArray2 = [];
  for (let i = 0; i < cartProduct.length; i++) {
    if (i !== Number(removeItem)) {
      removeArray.push(cartProduct[i]);
      removeArray2.push(cartPrice[i]);
    }
  }
  
// function sumRow(){
//     let tBody = table.getElementsByTagName('tbody')[0];
//     tableRow = document.createElement('tr');
//     tBody.appendChild(tableRow); 
//     let tdEl = document.createElement('td'); 
//     tableRow.appendChild(tdEl); 
//     tdEl.textContent= sum; 
//   }sumRow();

  cartProduct = removeArray;
  cartPrice = removeArray2;
  console.log(cartProduct);
  console.log(removeArray);
  tableRow.innerHTML = "";
  setToLocal();
  getLocalStorage();
  renderCart();
}
function setToLocal() {
  let item = JSON.stringify(cartProduct);
  localStorage.setItem('product', item);
  let item2 = JSON.stringify(cartPrice);
  localStorage.setItem('price', item2);
}

getLocalStorage();
let spanTotal = document.getElementById('total'); 
spanTotal.textContent= sum;
renderCart();