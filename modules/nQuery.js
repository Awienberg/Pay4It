'use strict';
//nQuery.mjs

const $ = function (foo) {
    return document.getElementById(foo);    // get element by id
}

export {$};