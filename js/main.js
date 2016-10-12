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
  document.querySelector('.answer').innerHTML = mathSentence.join(' ');
}

function answer () {
  var x = parseFloat(mathSentence[0]);
  var y = parseFloat(mathSentence[2]);
  let answer;
  if(mathSentence[1] === '+') {
    let cb = add;
    console.log(calculate(x,y,cb));
    answer = calculate(x, y, cb);
  }
  if(mathSentence[1] === '-') {
    let cb = subtract;
    console.log(calculate(x,y,cb));
    answer = calculate(x, y, cb);
  }
  if(mathSentence[1] === '*') {
    let cb = multiply;
    console.log(calculate(x,y,cb));
    answer =  calculate(x, y, cb);
  }
  if(mathSentence[1] === '/') {
    let cb = divide;
    console.log(calculate(x,y,cb));
    answer =  calculate(x, y, cb);
  }
  if(mathSentence[1] === '%') {
    let cb = remainder;
    console.log(calculate(x,y,cb));
    answer =  calculate(x, y, cb);
  }
  document.querySelector('.answer').innerHTML = answer;
}

function reload() {
  location.reload(true);
};
