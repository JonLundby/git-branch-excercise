"use strict";

window.addEventListener("load", startApp);

function startApp() {
    console.log("app is running!");
    anotherFunction();
}

function anotherFunction() {
    console.log("just another function...")
    thirdFunction();
}

function thirdFunction() {
    console.log("3rd function executed...")
}