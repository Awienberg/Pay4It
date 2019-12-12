'use strict';
import {$} from "./modules/nQuery.js";
/*import {Ajax} from "./modules/Ajax.js";*/

let xhr = new XMLHttpRequest()

xhr.open("GET", "https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=562");
xhr.setRequestHeader("Authorization", "Basic cmlra2VfY2FybHNzb25AbGl2ZS5kazoJIDRqUE1kTmg2Nw==");
xhr.setRequestHeader("Cache-Control", "no-cache");

xhr.send()

xhr.addEventListener("load", function(){
  let json = xhr.responseText;
  json = JSON.parse(json)
  console.log(json);

  let booths = json.Booths;
  let shelves = json.Shelves;

//EACH BOOTH
for (let booth of booths) {
  console.log(booth.Description);
  console.log(booth);
}

//EACH SHELVE
for (let shelve of shelves) {
  console.log(shelve.Description);
  console.log(shelve);
}
});

/*
//Event handler for fortune button - tests responseText
let getNewContent = function() {
  let req = Object.create(Ajax);
  req.init();
  req.getFile("https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=562", txtHandler); //callback
}
*/

//ajax load event puts received text onto the dom into the dom
let txtHandler = function(e) {
  let obj = JSON.parse(e.xhr.responseText);    // objectify response
                                                  // and use it

//loop that prints the data into table in HTML
for (let i = 0; i < obj.length; i++) {
let createProduct = document.createElement("div")
  let p1 = document.createElement("p")
  let id = document.createTextNode(`${obj[i].ID}`)
  p1.appendChild(id);

  let p2 = document.createElement("p")
  let description = document.createTextNode(`${obj[i].Description}`)
  p2.appendChild(description);

  let p3 = document.createElement("p")
  let inUse = document.createTextNode(`${obj[i].IsInUse}`)
  p3.appendChild(inUse);

  let p4 = document.createElement("p")
  let price = document.createTextNode(`${obj[i].Price}`)
  p4.appendChild(price);

  createProduct.appendChild(p1);
  createProduct.appendChild(p2);
  createProduct.appendChild(p3);
  createProduct.appendChild(p4);
  document.getElementByClassName("content").appendChild(createProduct);
  }                                            
};                           

/*
//Click solarie1
let showStarter = function () {
  $("solarie1").addEventListener("click", txtHandler);
}

window.addEventListener("load", showStarter);
*/

/*
let createModal = function(modalContent, onAddToBasket, onClose) {
  let modal = document.createElement('div');
  modal.className = 'modal';
    
  let wrapper = document.createElement('div');
  wrapper.className = 'modal-content';
  modal.appendChild(wrapper)
  
  let close = document.createElement('span');
  close.className = 'close';
  close.appendChild(document.createTextNode('&times;'));
  close.addEventListener('click', onClose)
  wrapper.appendChild(close);
  
  let content = document.createElement('div');
  content.className = 'content';
  wrapper.appendChild(content);
  
  let paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode(modalContent))
  content.appendChild(paragraph)
  
  let button = document.createElement('button');
  button.addEventListener('click', onAddToBasket)
  button.appendChild(document.createTextNode('Tilføj til kurv'));
  wrapper.appendChild(button);

};

//popUp box
let popUp = function () {
  $("solarie1").addEventListener("click", createModal);
}

window.addEventListener("load", popUp);
*/

//When .kategori is clicked, toggle css .large
let arr = document.getElementsByClassName("kategori");
for (let elm of arr) {
    elm.addEventListener("click", function (e) {
        elm.classList.toggle("large");
    });
if (elm.classList.contains('large')) {
    elm.classList.remove('large');
} 
};

//Pop-up 
// Get the modal
let modal = $("myModal");

// Get the button that opens the modal
let btn = $("solarie1");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(event) {
  if (event.target == btn) {
  modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(event) {
  if (event.target == span) {
  modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
