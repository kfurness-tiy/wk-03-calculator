"use strict";

console.log('cheese and puppies');

let mathSentence = '';

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
  return cb(x, y);
}

// function togglePosNeg () {
//   mathSentence.unshift(2);
//   console.log(mathSentence);
// }

function makeArray(value) {
  // if(value === 'neg') {
  //   if(value !== ' + ' || value !== ' - ')
  //     mathSentence *= parseInt(-1);
  //     // mathSentence.unshift('2');
  //     console.log(mathSentence);
  //     document.querySelector('.answer').innerHTML = mathSentence;
  // }
  // else {
    mathSentence += value;
    document.querySelector('.answer').innerHTML = mathSentence;
  // }
}

function answer () {
  let sentenceArr = [];
  sentenceArr = mathSentence.split(' ');
  var x = parseFloat(sentenceArr[0]);
  var y = parseFloat(sentenceArr[2]);
  let answer;
  if(sentenceArr[1] === '+') {
    let cb = add;
    answer = calculate(x, y, cb);
  }
  if(sentenceArr[1] === '-') {
    let cb = subtract;
    answer = calculate(x, y, cb);
  }
  if(sentenceArr[1] === '*') {
    let cb = multiply;
    answer =  calculate(x, y, cb);
  }
  if(sentenceArr[1] === '/') {
    let cb = divide;
    answer =  calculate(x, y, cb);
  }
  if(sentenceArr[1] === '%') {
    let cb = remainder;
    answer =  calculate(x, y, cb);
  }
  document.querySelector('.answer').innerHTML = answer;
  mathSentence = answer;
}

function reload() {
  location.reload(true);
};
