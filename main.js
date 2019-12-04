'use strict';
import {$} from "./modules/nQuery.js";
import {Ajax} from "./modules/Ajax.js";

//Event handler for fortune button - tests responseText
let getNewContent = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("./modules/example2.json", txtHandler);
}

//ajax load event puts received text onto the dom into the dom
let txtHandler = function(e) {
    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it
}