"use strict";

let collectionNumber = 0;
showCollection(collectionNumber);

function showCollection(index) {
    let myCollections = document.getElementsByClassName("myCollections");
    let categories = document.getElementsByClassName("categoryBtn");
    for (let i = 0; i < myCollections.length; i++) {
        myCollections[i].style.display = "none";
        categories[i].style.backgroundColor = "white";
    }
    myCollections[index].style.display = "block";
    categories[index].style.backgroundColor = "gray";
}

// .............................................. Creating Constructors
let paints = ["Bow by Clare Grill.jpg", "Composition X by Wassily Kandinsky.jpg", "cubism still life painting by Anis.jpg", "skyline city by Joun doe.jpg", "Still Life Tazza by jacob.jpg", "whatever by khalid.jpg"];
let paitsPrices = ['15$', '20$', '7$', '75$', '30$', '175$'];
let paintingsArray = [];
function Paintings(paintName, price) { // ........Paintings Constructor
    this.paintName = paintName.split('by')[0];
    this.price = price;
    this.source = 'Images/Paints/' + paintName;

    paintingsArray.push(this);
}
let decore = ['Ceramic vase by Job Heykamp.jpg', 'Ceramics by Job Heykamp.jpg', 'Daum by Nancy.jpg', 'dragon by Emile Galle.jpg', 'Pottery created by the Hohokam people.jpg', 'Wisteria by Emile Galle.jpg'];
let decorePrices = ['20$', '12$', '30$', '23$', '54$', '17$'];
let decoreArray = [];
function Decore(decoreName, price) { // ..........Decore Constructor
    this.decoreName = decoreName.split('by')[0];
    this.price = price;
    this.source = 'Images/Decore/' + decoreName;

    decoreArray.push(this);
}
let posters = ['Crater Lake Milky Way by zack.jpg','GREENE  CHECHEN ISLAND by Heun Jung.jpg','joshua tree by natalie.jpg','New Zealand lake by  Jess Santos.jpg','OLGA KRAVETS  BALIKESIR TREE by  NOOR.jpg','PEP BONET by Daniel Skwarna.jpg','SEBASTIAN LISTE by Justin Mott.jpg','utah mountains by edward.jpg'];
let posterPrices = ['23$','12$','56$','80$','23$','67$','63$','34$'];
let postersArray = [];
function Poster(posterName, price) { // ..........Posters Constructor
    this.posterName = posterName;
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
        new Poster(posters[i], postersArray[i]);
    }
}
creatProducts();
console.log(paintingsArray);
console.log(decoreArray);
console.log(postersArray);
// ............................................... Render Functions
// ......Paintings Render
function renderPaintings() {
    let paintingsDiv = document.getElementById('paintingsContainer');
    for (let i = 0; i < paintingsArray.length; i++) {
        let imgEL = document.createElement('img');
        paintingsDiv.appendChild(imgEL);
        imgEL.setAttribute('src', `../${paintingsArray[i].source}`);
    }
}
renderPaintings();
// ......Decore Render
function renderDecore() {
    let paintingsDiv = document.getElementById('decoreContainer');
    for (let i = 0; i < decoreArray.length; i++) {
        let imgEL = document.createElement('img');
        paintingsDiv.appendChild(imgEL);
        imgEL.setAttribute('src', `../${decoreArray[i].source}`);
        imgEL.setAttribute('title',`${paintingsArray[i].paintName}`);
    }
}
renderDecore();
// ......Posters Render
function renderPosters() {
    let paintingsDiv = document.getElementById('PostersContainer');
    for (let i = 0; i < postersArray.length; i++) {
        let imgEL = document.createElement('img');
        paintingsDiv.appendChild(imgEL);
        imgEL.setAttribute('src', `../${postersArray[i].source}`);
    }
}
renderPosters();

// ............................................... Adding Event Listners
