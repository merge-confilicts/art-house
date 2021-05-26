"use strict";
// .............................................. Creating Constructors
let paints = ["Bow by Clare Grill.jpg", "Composition X by Wassily Kandinsky.jpg", "cubism still life by Anis.jpg", "skyline city by Joun doe.jpg", "Still Life Tazza by jacob.jpg", "whatever by khalid.jpg"];
let paitsPrices = [15, 20, 7, 75, 30, 175];
let paintingsArray = [];
function Paintings(paintName, price) { // ........Paintings Constructor
    this.paintName = paintName.split('by')[0];
    this.price = price;
    this.source = 'Images/Paints/' + paintName;
    paintingsArray.push(this);
}
let decore = ['Ceramic vase by Job Heykamp.jpg', 'Ceramics by Job Heykamp.jpg', 'Daum by Nancy.jpg', 'dragon by Emile Galle.jpg', 'Pottery created by the Hohokam people.jpg', 'Wisteria by Emile Galle.jpg'];
let decorePrices = [20, 12, 30, 23, 54, 17];
let decoreArray = [];
function Decore(decoreName, price) { // ..........Decore Constructor
    this.decoreName = decoreName.split('by')[0];
    this.price = price;
    this.source = 'Images/Decore/' + decoreName;
    decoreArray.push(this);
}
let posters = ['Lake Milky Way by zack.jpg', 'GREENE ISLAND by Heun Jung.jpg', 'joshua tree by natalie.jpg', 'New Zealand lake by  Jess Santos.jpg', 'KRAVETS TREE by  NOOR.jpg', 'PEP BONET by Daniel Skwarna.jpg', 'SEBASTIAN LISTE by Justin Mott.jpg', 'utah mountains by edward.jpg'];
let posterPrices = [23, 12, 56, 80, 23, 67, 63, 34];
let postersArray = [];
function Poster(posterName, price) { // ..........Posters Constructor
    this.posterName = posterName.split('by')[0];
    this.price = price;
    this.source = 'Images/Posters/' + posterName;
    postersArray.push(this);
}
// ............................................... Creating Objects
function creatProducts() {
    for (let i = 0; i < paints.length; i++) {
        new Paintings(paints[i], paitsPrices[i]);
    }
    for (let i = 0; i < decore.length; i++) {
        new Decore(decore[i], decorePrices[i]);
    }
    for (let i = 0; i < posters.length; i++) {
        new Poster(posters[i], posterPrices[i]);
    }
}
creatProducts();
// ............................................... Render Functions
// ......Paintings Render
let paintingsDiv = document.getElementById('paintingsContainer');
let products = [];
function renderPaintings() {
    if (!(paintingsDiv == null)) {
        for (let i = 0; i < paintingsArray.length; i++) {
            let imgDiv = document.createElement('div');
            paintingsDiv.appendChild(imgDiv);
            let imgEL = document.createElement('img');
            imgDiv.appendChild(imgEL);
            imgEL.setAttribute('src', `../${paintingsArray[i].source}`);
            imgEL.setAttribute('title', `${paintingsArray[i].paintName}`);
            //adding name and price
            let spanEl = document.createElement('span');
            imgDiv.appendChild(spanEl);
            spanEl.textContent = `${paintingsArray[i].paintName}`;
            let spanEl2 = document.createElement('span');
            imgDiv.appendChild(spanEl2);
            spanEl2.textContent = `${paintingsArray[i].price}$`;
            // Adding like and cart buttons
            let likebtnEl = document.createElement('button');
            imgDiv.appendChild(likebtnEl);
            likebtnEl.textContent = 'likes';
            likebtnEl.setAttribute('onclick', `getLikes('${paintingsArray[i].paintName}','Paintings')`);
            let cartbtnEl = document.createElement('button');
            imgDiv.appendChild(cartbtnEl);
            cartbtnEl.innerHTML = '<i class="fas fa-cart-plus"></i>';
            cartbtnEl.setAttribute('onclick', `getProducts('${paintingsArray[i].paintName}','${paintingsArray[i].price}')`);
        }
    }
}
renderPaintings();
// ..................Decore Render
function renderDecore() {
    let decoreDiv = document.getElementById('decoreContainer');
    if (!(decoreDiv == null)) {
        for (let i = 0; i < decoreArray.length; i++) {
            let imgDiv = document.createElement('div');
            decoreDiv.appendChild(imgDiv);
            let imgEL = document.createElement('img');
            imgDiv.appendChild(imgEL);
            imgEL.setAttribute('src', `../${decoreArray[i].source}`);
            imgEL.setAttribute('title', `${decoreArray[i].decoreName}`);
            //adding name and price
            let spanEl = document.createElement('span');
            imgDiv.appendChild(spanEl);
            spanEl.textContent = `${decoreArray[i].decoreName}`;
            let spanEl2 = document.createElement('span');
            imgDiv.appendChild(spanEl2);
            spanEl2.textContent = `${decoreArray[i].price}$`;
            // Adding like and cart buttons
            let likebtnEl = document.createElement('button');
            imgDiv.appendChild(likebtnEl);
            likebtnEl.textContent = 'likes';
            likebtnEl.setAttribute('onclick', `getLikes('${decoreArray[i].decoreName}','Decoration')`);
            let cartbtnEl = document.createElement('button');
            imgDiv.appendChild(cartbtnEl);
            cartbtnEl.innerHTML = '<i class="fas fa-cart-plus"></i>';
            cartbtnEl.setAttribute('onclick', `getProducts('${decoreArray[i].decoreName}','${decoreArray[i].price}')`);
        }
    }
}
renderDecore();
// ................. Posters Render
function renderPosters() {
    let postersDiv = document.getElementById('PostersContainer');
    if (!(postersDiv == null)) {
        for (let i = 0; i < postersArray.length; i++) {
            let imgDiv = document.createElement('div');
            postersDiv.appendChild(imgDiv);
            let imgEL = document.createElement('img');
            imgDiv.appendChild(imgEL);
            imgEL.setAttribute('src', `../${postersArray[i].source}`);
            imgEL.setAttribute('title', `${postersArray[i].posterName}`);
            //adding name and price
            let spanEl = document.createElement('span');
            imgDiv.appendChild(spanEl);
            spanEl.textContent = `${postersArray[i].posterName}`;
            let spanEl2 = document.createElement('span');
            imgDiv.appendChild(spanEl2);
            spanEl2.textContent = `${postersArray[i].price}$`;
            // Adding like and cart buttons
            let likebtnEl = document.createElement('button');
            imgDiv.appendChild(likebtnEl);
            likebtnEl.textContent = 'likes';
            likebtnEl.setAttribute('onclick', `getLikes('${postersArray[i].posterName}','Posters')`);
            let cartbtnEl = document.createElement('button');
            imgDiv.appendChild(cartbtnEl);
            cartbtnEl.innerHTML = '<i class="fas fa-cart-plus"></i>';
            cartbtnEl.setAttribute('onclick', `getProducts('${postersArray[i].posterName}','${postersArray[i].price}')`);
        }
    }
}
renderPosters();
// .................. Adding Products to Local storage
let productsList = [];
let prices = [];
function getProducts(product, price) {
    productsList.push(product);
    prices.push(price);
    let data = JSON.stringify(productsList);
    localStorage.setItem('product', data);
    let data2 = JSON.stringify(prices);
    localStorage.setItem('price', data2);
    let count = document.getElementById('numberOFitems');
    count.textContent = `(${productsList.length})`;
}
// .................. Adding Likes to List and Local storage
let likesList = [];
let typeslist = [];
function getLikes(like, type) {
    let flag = true;
    if (likesList == null) {
        likesList.push(like);
        typeslist.pushu(type);
        localStorage.setItem('like', JSON.stringify(likesList));
        localStorage.setItem('type', JSON.stringify(typeslist));
        let count = document.getElementById('numberOFitems');
        count.textContent = `(${likesList.length})`;
        renderLikes();
    } else {
        for (let i = 0; i < likesList.length; i++) {
            if (likesList[i] === like) {
                flag = false;
            }
        }
        if (flag !== false) {
            likesList.push(like);
            typeslist.push(type);
            localStorage.setItem('like', JSON.stringify(likesList));
            localStorage.setItem('type', JSON.stringify(typeslist));
            renderLikes();
        }
        else {
            let message = document.getElementById('alertMessage');
            message.style.width = '500px';
            let closeMessageBtn = document.getElementById('closeMessage');
            closeMessageBtn.addEventListener('click', closeSideMessage);
            function closeSideMessage() {
                message.style.width = '0px';
            }
        }
    }
}
// .................. Render Likes to likes list
let divEl = document.getElementById('sideBarItems');
let div1EL;
function renderLikes() {
    if (likesList !== null) {
        if (!(divEl == null)) {
            divEl.innerHTML = '';
            let firstRow = document.createElement('tr');
            divEl.appendChild(firstRow);
            let thEl = document.createElement('th');
            firstRow.appendChild(thEl);
            thEl.textContent = 'Art Name';
            let thEl2 = document.createElement('th');
            firstRow.appendChild(thEl2);
            thEl2.textContent = 'Category';
            let thEl3 = document.createElement('th');
            firstRow.appendChild(thEl3);
            thEl3.textContent = '';
            for (let i = 0; i < likesList.length; i++) {
                div1EL = document.createElement('tr');
                divEl.appendChild(div1EL);
                let td = document.createElement('td');// the first td
                div1EL.appendChild(td);
                td.textContent = likesList[i];
                let td2 = document.createElement('td');// the second td
                div1EL.appendChild(td2);
                td2.textContent = typeslist[i];
                let td3 = document.createElement('td');// the third td
                div1EL.appendChild(td3);
                td3.innerHTML = `<i class="far fa-trash-alt" id = '${i}'></i>`;
                // td3.setAttribute('id', i);
                td3.addEventListener('click', removeFromList);
                // td3.setAttribute = ('onclick', removeFromList());
            }
        }
    }
    else {
        divEl.textContent = 'Your Likes List is empty';
    }
}
renderLikes();

// ........... remove from the list function
function removeFromList(event) {
    let index = event.target.id;
    let variable = [];
    let newtypes = [];
    for ( let i = 0; i < likesList.length; i++) {
        if (i !== Number(index)) {
            variable.push(likesList[i]);
            newtypes.push(typeslist[i]);
        }
    }
    likesList = variable;
    typeslist = newtypes;
    renderLikes();
    localStorage.setItem('like', JSON.stringify(likesList));
    localStorage.setItem('type', JSON.stringify(typeslist));
}
//............ rendering Likes list when refresh
function gettingLikes() {
    let normalLikes = JSON.parse(localStorage.getItem('like'));
    let types = JSON.parse(localStorage.getItem('type'));
    if (normalLikes !== null) {
        likesList = normalLikes;
        typeslist = types;
        renderLikes();
    }
}
gettingLikes();
// ................ Showing Category Collection
let collectionNumber = 0;
showCollection(collectionNumber);
function showCollection(index) {
    let myCollections = document.getElementsByClassName("myCollections");
    let categories = document.getElementsByClassName("categoryBtn");
    if (!(myCollections == null)) {
        for (let i = 0; i < myCollections.length; i++) {
            myCollections[i].style.display = "none";
            categories[i].style.backgroundColor = "#F4EBD0";
        }
        myCollections[index].style.display = "block";
        categories[index].style.backgroundColor = "#DDBF88";
    }
}
// ........................ Likes Button and Likes List
let btnlike = document.getElementById('like1');
let btnclose = document.getElementById('close');
btnlike.addEventListener('click', opensidebar);
btnclose.addEventListener('click', closeSideBar);
function opensidebar(event) {
    document.getElementById("sidebar").style.width = "325px";
    document.getElementById("sidebar").style.display = "block";
}
function closeSideBar() {
    document.getElementById("sidebar").style.width = "0px";
}
// ... End