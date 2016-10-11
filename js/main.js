"use strict";

console.log('cheese and puppies');

// TODO add onclick=  to html buttons

function add (x, y) {
  // console.log(x + y);
  return x + y;
}

function subtract (x, y) {
  // console.log(x - y);
  return x - y;
}

function multiply (x, y) {
  // console.log(x * y);
  return x * y;
}

function divide (x, y) {
  // console.log(x / y);
  return x / y;
}

function remainder (x, y) {
  return x % y;
}

function calculate (x, y, cb) {
  console.log(cb(x, y));
  return cb(x, y);
}

function makeArray() {
  console.log('pizza-fart');
}
