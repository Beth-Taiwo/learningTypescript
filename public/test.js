"use strict";
console.log("testing 1 2 3!!!");
let greet;
greet = () => {
    console.log("Hi there!");
};
const add = (a, b, c = "Well") => {
    console.log(a + b);
    console.log(c);
};
add(2, 3);
