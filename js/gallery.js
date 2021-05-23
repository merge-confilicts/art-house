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
let paints = ["Bow by Clare Grill.jpg","Composition X by Wassily Kandinsky.jpg","cubism still life painting by Anis.jpg","skyline city by Joun doe.jpg","Still Life Tazza by jacob.jpg","whatever by khalid.jpg"];
let paitsPrices = ['15$','20$','7$','75$','30$','175$'];
let pintingsArray = [];
function Paintings(paintName, price) { // Paintings Constructor
    this.paintName = paintName.split ('.')[0];
    this.price = price;
    this.source = paintName;

    pintingsArray.push(this);
}
let decore = ['Ceramic vase by Job Heykamp.jpg','Ceramics by Job Heykamp.jpg','Daum by Nancy.jpg','dragon by Emile Galle.jpg','Pottery created by the Hohokam people.jpg','Wisteria by Emile Galle.jpg'];
let decorePrices = ['20$','12$','30$','23$','54$','17$'];
let decoreArray = [];
function Decore(decoreName, price) { // Decore Constructor
    this.decoreName = decoreName.split('by')[0] ;
    this.price = price;

    decoreArray.push(this);
}
let posters = [];
let posterPrices = [];
let postersArray = [];
function Poster(posterName, price) { // Posters Constructor
    this.posterName = posterName;
    this.price = price;

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
console.log(pintingsArray);
console.log(decoreArray);
// ............................................... Render Functions
function renderPaintings(){
    let paintingsDiv = document.getElementById('paintingsDiv');
    for (let i = 0; i < pintingsArray.length; i++) {
        let imgEL = document.createElement('img');
        paintingsDiv.appendChild(imgEL);
        imgEL.setAttribute('src', pintingsArray[i].source);
    }
}
renderPaintings();

// ................................................ Adding Event Listners
