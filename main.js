'use strict';
import {$} from "./modules/nQuery.js";
import {Ajax} from "./modules/Ajax.js";

//Event handler for fortune button - tests responseText
let getNewContent = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("", txtHandler);
}

//ajax load event puts received text onto the dom into the dom
let txtHandler = function(e) {
    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it
}

//Click button
let showStarter = function () {
    $("solarie1").addEventListener("click", getNewContent);
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
