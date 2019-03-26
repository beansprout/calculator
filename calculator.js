const add = (x , y) => {
  return x + y;
}

const subtract = (x, y) => {
  return x - y;
}

const multiply = (x, y) => {
  return x * y;
}

const divide = (x, y) => {
  return x / y;
}

const operate = (x , y, operation) => {
  return operation(x, y);
}

const container = document.getElementById('container');
const calculatorScreen = document.getElementById('calculator-screen');
const div0 = document.getElementById('div0');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');
const div7 = document.getElementById('div7');
const div8 = document.getElementById('div8');
const div9 = document.getElementById('div9');
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const equalsBtn = document.getElementById('equals');
const decimalBtn = document.getElementById('decimal');
const clear = document.getElementById('clear');

let numX ='';
let numY;
let total;

const addNumListeners = () => {
  // const numButton = document.querySelectorAll('div.num-btn');
  // console.log(numButton);
  for (let i = 0; i < 10; i++) {
    document.getElementById(`div${i}`).addEventListener('click', (e) => {
      numX = numX.concat(i);
      console.log(numX);
      calculatorScreen.innerHTML = numX
    })
  }
}
addNumListeners();

clear.addEventListener('click', (e) => {
  numX ='';
  calculatorScreen.innerHTML = '0';
})