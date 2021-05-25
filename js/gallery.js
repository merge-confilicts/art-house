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

// ........................ Likes Button and Likes List
let btnlike = document.getElementById('like1');
let btnclose = document.getElementById('close');

btnlike.addEventListener('click', opensidebar);
btnclose.addEventListener('click', closeSideBar);
function opensidebar(event) {
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("sidebar").style.display = "block";
}

function closeSideBar() {
    document.getElementById("sidebar").style.width = "0px";
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

let posters = ['Crater Lake Milky Way by zack.jpg', 'GREENE  CHECHEN ISLAND by Heun Jung.jpg', 'joshua tree by natalie.jpg', 'New Zealand lake by  Jess Santos.jpg', 'OLGA KRAVETS  BALIKESIR TREE by  NOOR.jpg', 'PEP BONET by Daniel Skwarna.jpg', 'SEBASTIAN LISTE by Justin Mott.jpg', 'utah mountains by edward.jpg'];
let posterPrices = ['23$', '12$', '56$', '80$', '23$', '67$', '63$', '34$'];
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
        new Poster(posters[i], postersArray[i]);
    }
}
creatProducts();
console.log(paintingsArray);
console.log(decoreArray);
console.log(postersArray);
// ............................................... Render Functions

let paintingsDiv = document.getElementById('paintingsContainer');
function renderPaintings() {
    for (let i = 0; i < paintingsArray.length; i++) {
        let imgEL = document.createElement('img');
        paintingsDiv.appendChild(imgEL);
        imgEL.setAttribute('src', `../${paintingsArray[i].source}`);

        imgEL.setAttribute('title',`../${paintingsArray[i].paintName}`);


        // Adding like and cart buttons
        let likebtnEl = document.createElement('button');
        paintingsDiv.appendChild(likebtnEl);
        likebtnEl.textContent = 'likes';

        likebtnEl.setAttribute('onclick', `getLikes('${paintingsArray[i].paintName}')`);
        let cartbtnEl = document.createElement('button');
        paintingsDiv.appendChild(cartbtnEl);
        cartbtnEl.innerHTML = '<i class="fas fa-cart-plus"></i>';
        cartbtnEl.setAttribute('onclick', `getProducts('${paintingsArray[i].paintName}','${paintingsArray[i].paitsPrices}'`);
    }
}

let likesList = [];

// function settingpaints(){
//     let data = JSON.stringify(likesList);
//     localStorage.setItem('paintsImg',data);
// }

function gettingLikes() {
    let stringlikes = localStorage.getItem('paintsImg')
    let normalLikes = JSON.parse(stringLikes);
    if (normalLikes !== null) {
        likesList = normalLikes;
        return normalLikes;
    }
  
}

// settingpaints();
let divEl = document.getElementById('sidebar');

function getLikes(like) {
    likesList.push(like);
    console.log(likesList);
    let data = JSON.stringify(likesList);
    localStorage.setItem('like', data);
    renderLikes();
}

getLikes();


function renderLikes() {

    if (likesList !== null) {
        
        for (let i = 0; i < likesList.length; i++) {

            let div1EL = document.createElement('div');
            divEl.appendChild(div1EL);

            let stringLikes = localStorage.getItem('paintsImg')
            let normalLikes = JSON.parse(stringLikes);
            console.log(normalLikes);

            div1EL.textContent = normalLikes;

        }

        
}
renderPaintings();
  

// ......Decore Render

function renderDecore() {

  
    let decoreDiv = document.getElementById('decoreContainer');
    for (let i = 0; i < decoreArray.length; i++) {

        let imgEL = document.createElement('img');
        decoreDiv.appendChild(imgEL);
        imgEL.setAttribute('src', `../${decoreArray[i].source}`);

        

        imgEL.setAttribute('title',`${decoreArray[i].decoreName}`);

        // Adding like and cart buttons
        let likebtnEl = document.createElement('button');
        decoreDiv.appendChild(likebtnEl);
        likebtnEl.textContent = 'likes';
        likebtnEl.setAttribute('onclick',`getLikes('${decoreArray[i].decoreName}')`);

        let cartbtnEl = document.createElement('button');
        decoreDiv.appendChild(cartbtnEl);
        cartbtnEl.innerHTML = '<i class="fas fa-cart-plus"></i>';
        cartbtnEl.setAttribute('onclick',`getProducts('${decoreArray[i].decoreName}','${decoreArray[i].price}')`);


    }
    // console.log(renderLikes)
}

renderLikes();
renderPaintings();
// function saveThelikes(event) {
//     for (let index = 0; index < paintingsArray.length; index++) {
//         let save = paintingsArray[index].paintName;
//         likebtnEl.addEventListener('click', saveThelikes);
//         if(save.value=likebtnEl) {
//                 save.value=likebtnEl;
//                 products.push(save);

//         }

//     }
// }
// saveThelikes();

// function saveTheProducts() {
//     for (let index = 0; index < paintingsArray.length; index++) {
//         let save = paintingsArray[index].paintName;
//         switch (products) {
//             case 'add':
//                 products.push(save);
//                 break;
//         }
//     }
// }
// saveTheProducts();

// console.log(products);


// // ......Decore Render
// function renderDecore() {
//     let paintingsDiv = document.getElementById('decoreContainer');
//     for (let i = 0; i < decoreArray.length; i++) {
//         let imgEL = document.createElement('img');
//         paintingsDiv.appendChild(imgEL);
//         imgEL.setAttribute('src', `../${decoreArray[i].source}`);
//         imgEL.setAttribute('title', `${paintingsArray[i].paintName}`);


//     }
// }
// renderDecore();
// // ......Posters Render
// function renderPosters() {
//     let paintingsDiv = document.getElementById('PostersContainer');
//     for (let i = 0; i < postersArray.length; i++) {
//         let imgEL = document.createElement('img');
//         paintingsDiv.appendChild(imgEL);
//         imgEL.setAttribute('src', `../${postersArray[i].source}`);
//     }
// }
// renderPosters();

// // ............................................... Adding Event Listners

// function saveToLocalStorage() {
//     let data = JSON.stringify(products);
//     localStorage.setItem('product', data);
// }


renderDecore();
// ......Posters Render
function renderPosters() {

    

    let postersDiv = document.getElementById('PostersContainer');
    for (let i = 0; i < postersArray.length; i++) {

        let imgEL = document.createElement('img');
        postersDiv.appendChild(imgEL);
        imgEL.setAttribute('src', `../${postersArray[i].source}`);
        imgEL.setAttribute('title', `../${postersArray[i].paintName}`);

        // Adding like and cart buttons
        let likebtnEl = document.createElement('button');
        postersDiv.appendChild(likebtnEl);
        likebtnEl.textContent = 'likes';
        likebtnEl.setAttribute('onclick',`getLikes('${postersArray[i].posterName}')`);

        let cartbtnEl = document.createElement('button');
        postersDiv.appendChild(cartbtnEl);
        cartbtnEl.innerHTML = '<i class="fas fa-cart-plus"></i>';
        cartbtnEl.setAttribute('onclick',`getProducts('${postersArray[i].posterName}','${postersArray[i].price}')`);
    }
}
renderPosters();


// ............................................... Adding Event Listners



//sortbyy
let selection1=document.getElementById("sort");


selection1.addEventListener('change',sortselection1)

function sortselection1(event)
{
   /* for (let i = 0; i < paintingsArray.length; i++) {
        
        paintingsArray.sort();
        
    console.log(paintingsArray);


   }*/

 console.log(selection1.value);
 if(selection1.value=="section1"){
    
    paintingsDiv.innerHTML=""
    renderPaintings([paintingsArray[0],paintingsArray[1]]) ;

 }else if(selection1.value=="section2"){
    paintingsDiv.innerHTML=""
  renderPaintings([paintingsArray[2],paintingsArray[3]]) ;

 }else if(selection1.value=="section3"){
    paintingsDiv.innerHTML=""
    renderPaintings([paintingsArray[4],paintingsArray[5]]) ;
   

}
}



   






// ............................................... Adding Local Storage




// ............................................... Adding Likes and Products to List and Local storage
let likesList = [];
let productsList = [];
function getLikes(like) {
    likesList.push(like);
    console.log(likesList);
}
function getProducts(product,price){
    productsList.push(product,price);
    let data = JSON.stringify(productsList);
    localStorage.setItem('product',data);
}
}
