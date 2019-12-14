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


//ajax load event puts received text onto the dom into the dom
let dataHandler = function(e) {
  //  let obj = JSON.parse(e.xhr.responseText);    // objectify response
                                                  // and use it
    let s = e.target.id;
    console.log('a: ' + s);
    s = s.substring(s.length - 1) - 1;    // få nr fra id lavet til index 
    console.log('b: ' + s);
    let elm = booths[s];                  // find dette element 
    
    let createProduct = document.createElement("div")
    createProduct.setAttribute("id", "dataHolder");
    let p1 = document.createElement("p")
    let id = document.createTextNode("ID: " + `${elm.ID}`)
    p1.appendChild(id);

    let p2 = document.createElement("p")
    let description = document.createTextNode("Navn på kabine: " + `${elm.Description}`)
    p2.appendChild(description);

    let p3 = document.createElement("p")
    let inUse = document.createTextNode("Optaget: " + `${elm.IsInUse}`)
    p3.appendChild(inUse);

    let p4 = document.createElement("p")
    let price = document.createTextNode("Pris pr. minut: " + `${elm.Price}`)
    p4.appendChild(price);

    createProduct.appendChild(p1);
    createProduct.appendChild(p2);
    createProduct.appendChild(p3);
    createProduct.appendChild(p4);
    $("getData").appendChild(createProduct);
    $(e.target.id).removeEventListener("click", dataHandler); //virker stadig ikke helt :(                                          
};                           


//Click solarie1
let showStarter = function () {
  $("solarie1").addEventListener("click", dataHandler);
  $("solarie2").addEventListener("click", dataHandler);
  $("solarie3").addEventListener("click", dataHandler);
  $("solarie4").addEventListener("click", dataHandler);
}

window.addEventListener("load", showStarter);


//When .kategori is clicked, toggle css .large
let arr = document.getElementsByClassName("kategori");
for (let elm of arr) {
    elm.addEventListener("click", function () {
      if (elm.classList.contains("large")) {
        elm.classList.remove("large");
        console.log("remove");
      } else {
        elm.classList.add("large");
        console.log("add")
      }
    });
}

//Pop-up box
let modal = $("myModal");

let btn1 = $("solarie1");
let btn2 = $("solarie2");

let span = document.getElementsByClassName("close")[0];

btn1.onclick = function(event) {
  if (event.target == btn1) {
  modal.style.display = "block";
  }
}

btn2.onclick = function(event) {
  if (event.target == btn2) {
  modal.style.display = "block";
  }
}

span.onclick = function(event) {
  if (event.target == span) {
  modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
