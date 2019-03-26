const add = (x , y) => {
  console.log(`x ${x} + y ${y}`);
  return Number(x) + Number(y);
}

const subtract = (x, y) => {
  console.log(`y ${y} - x ${x}`);
  return Number(y) - Number(x);
}

const multiply = (x, y) => {
  console.log(`x ${x} * y ${y}`);
  return Number(x) * Number(y);
}

const divide = (x, y) => {
  console.log(`y ${y} / x ${x}`);
  return Number(y) / Number(x);
}

// const operate = (x , y, operation()) => {
//   return operation(Number(x), Number(y));
// }

const equals = (op) => {
  if (operation === 'add') {
    console.log('total = ')
    total = add(numX, numY);
  }
  if (operation === 'minus') {
    console.log('total = ')
    total = subtract(numX, numY);
  }
  if (operation === 'multiply') {
    console.log('total = ')
    total = multiply(numX, numY);
  }
  if (operation === 'divide') {
    console.log('total = ')
    total = divide(numX, numY);
  }
  calculatorScreen.innerHTML = total;
    numY = total;
    total = '';
    numX ='';
}

const blip = new Audio();
blip.src = 'button.mp3'

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
let numY = '';
let total = '';
let operation = '';
let lastOperation ='';

const flashScreen = () => {
  calculatorScreen.style.background = '#F9F871';
  setTimeout(() => {
    calculatorScreen.style.background = '#FF9671';
  }, 3);
}

const clearScreen = () => {
  calculatorScreen.innerHTML = '';
}

const operBtnSequence = (op) => {
  flashScreen();
  blip.play();
  if (calculatorScreen.innerHTML !== '0') {
    clearScreen();
  }
  if (operation === '') {
    operation = op;
    lastOperation = op;
  } else {
    operation = lastOperation; // use last operation (for running list of operations)
    lastOperation = op; // save new operation for next in list
  };
  if (numY === '') {
    numY = numX;
    console.log(`numY ${numY}`);
    if (numY === '0' && op === 'divide') {
      console.log('numY = 0')
      clearScreen();
      return alert('Dividing by zero is a no-no.  Your work has been cleared.  Start over - sorry \'bout it.')
    }
    numX = '';
  } else {
    equals();
  }
}

const addNumListeners = () => {
  // const numButton = document.querySelectorAll('div.num-btn');
  // console.log(numButton);
  for (let i = 0; i < 10; i++) {
    document.getElementById(`div${i}`).addEventListener('click', (e) => {
      if (calculatorScreen.innerHTML === '0') {
        numX = i.toString();
      } else {
        numX = numX.concat(i);
      }
      console.log(`numX ${numX}`);
      calculatorScreen.innerHTML = numX;
      blip.play();
    })
  }
}
addNumListeners();

decimalBtn.addEventListener('click', (e) => {
  if (numX === '') {
    numX = '0';
  }
  numX = numX.concat('.');
  calculatorScreen.innerHTML = numX;
  blip.play();
})

clear.addEventListener('click', (e) => {
  numX ='';
  numY ='';
  total ='';
  operation ='';
  calculatorScreen.innerHTML = '0';
  blip.play()
});

plusBtn.addEventListener('click', (e) => {
  console.log('add')
  operBtnSequence('add');
});

minusBtn.addEventListener('click', (e) => {
  console.log('minus')
  operBtnSequence('minus');
});

multiplyBtn.addEventListener('click', (e) => {
  console.log('mult')
  operBtnSequence('multiply');
});

divideBtn.addEventListener('click', (e) => {
  console.log('divide')
  operBtnSequence('divide');
});

equalsBtn.addEventListener('click', (e) => {
  operBtnSequence(lastOperation);
})
