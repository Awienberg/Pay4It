'use strict';
import {$} from "./modules/nQuery.js";

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
//loop that prints the data from server into the HTML
for (let i = 0; i < obj.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let id = document.createTextNode(`${obj[i].id}`);
    td1.appendChild(id);
    let td2 = document.createElement("td");
    let city = document.createTextNode(`${obj[i].name}`);
    td2.appendChild(city);
    let td3 = document.createElement("td");
    let population = document.createTextNode(`${obj[i].population}`);
    td3.appendChild(population);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    $("new").appendChild(tr);
    }
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
var modal = $("myModal");

// Get the button that opens the modal
var btn = $("solarie1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}