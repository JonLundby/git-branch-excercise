"use strict";

window.addEventListener("load", startApp);

function startApp() {
    console.log("app is running!");
    anotherFunction();
}

function anotherFunction() {
    console.log("just another function...")
    fourthFunction();
}

function fourthFunction() {
    console.log("the fourth is strong with this one!")
}