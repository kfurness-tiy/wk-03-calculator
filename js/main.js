"use strict";

console.log('cheese and puppies');

let mathSentence = [];

function add (x, y) {
  return x + y;
}

function subtract (x, y) {
  return x - y;
}

function multiply (x, y) {
  return x * y;
}

function divide (x, y) {
  return x / y;
}

function remainder (x, y) {
  return x % y;
}

function calculate (x, y, cb) {
  console.log(cb(x, y));
  return cb(x, y);
}

function makeArray(value) {
  mathSentence.push(value);
  console.log(mathSentence);
}

function answer () {
  var x = mathSentence.slice(0,1).join('');
  var cb = mathSentence.slice(1,2).join('');
  var y = mathSentence.slice(2,3).join('');
  console.log('x: ' + x);
  console.log('y: ' + y);
  console.log('cb: ' + cb);
  calculate(x,y,cb);
}
