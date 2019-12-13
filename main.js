'use strict';
import {$} from "./modules/nQuery.js";
/*import {Ajax} from "./modules/Ajax.js";*/

let xhr = new XMLHttpRequest()

xhr.open("GET", "https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=562");
xhr.setRequestHeader("Authorization", "Basic cmlra2VfY2FybHNzb25AbGl2ZS5kazoJIDRqUE1kTmg2Nw==");
xhr.setRequestHeader("Cache-Control", "no-cache");

xhr.send()
var booths;
var shelves;

xhr.addEventListener("load", function(){
  let json = xhr.responseText;
  json = JSON.parse(json)
  console.log(json);

  booths = json.Booths;
  shelves = json.Shelves;

//EACH BOOTH
for (let booth of booths) {
//  console.log(booth.Description);
//  console.log(booth);

}

//EACH SHELVE
for (let shelve of shelves) {
//  console.log(shelve.Description);
//  console.log(shelve);
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
  //  let obj = JSON.parse(e.xhr.responseText);    // objectify response
                                                  // and use it
    let s = e.target.id;
    console.log('a: ' + s);
    s = s.substring(s.length - 1) - 1;    // få nr fra id lavet til index 
    console.log('b: ' + s);
    let elm = booths[s];                  // find dette element 
    let createProduct = document.createElement("div")
    let p1 = document.createElement("p")
    let id = document.createTextNode(`${elm.ID}`)
    p1.appendChild(id);

    let p2 = document.createElement("p")
    let description = document.createTextNode(`${elm.Description}`)
    p2.appendChild(description);

    let p3 = document.createElement("p")
    let inUse = document.createTextNode(`${elm.IsInUse}`)
    p3.appendChild(inUse);

    let p4 = document.createElement("p")
    let price = document.createTextNode(`${elm.Price}`)
    p4.appendChild(price);

    createProduct.appendChild(p1);
    createProduct.appendChild(p2);
    createProduct.appendChild(p3);
    createProduct.appendChild(p4);
    document.getElementById("contentNML").appendChild(createProduct);
    $(e.target.id).removeEventListener("click", txtHandler);
                                              
};                           


//Click solarie1
let showStarter = function () {
  $("solarie1").addEventListener("click", txtHandler);
  $("solarie2").addEventListener("click", txtHandler);
  $("solarie3").addEventListener("click", txtHandler);
}

window.addEventListener("load", showStarter);

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
