// Global vars
let numOne = '';
let numTwo = '';
let operator = '';
let result = '';

// Start the calculator
function startCalculator() {
  document.addEventListener('click', (e) => {
    if (e.target.id === '') {
      return;
    } else {
      getInput(e.target.id);
    }
  });
}
// Get input from the calculator
function getInput(inp) {
  // If it is the equal sign
  if (inp === '=') {
    pressEqual();
    return;
  }
  // If it is the clear sign
  if (inp === 'clear') {
    pressClear();
    return;
  }
  // If it is a number
  if (!Number(isNaN(inp))) {
    getNumber(inp);
  }
  // If it is a symbol
  if (Number(isNaN(inp))) {
    getOperator(inp);
    return;
  }
}
// Store input when it is a symbol
function getOperator(symbol) {
  if (numOne !== '' && numTwo === '') {
    operator = symbol;
    document.getElementById('result').textContent = operator;
  } else {
    result = eval(numOne + operator + numTwo);

    document.getElementById('result').textContent = result;
    numOne = result;
    numTwo = '';
    operator = symbol;
  }
}
// Store input when it is a number
function getNumber(number) {
  // If first num
  if (numTwo === '' && operator === '') {
    numOne += number;
    document.getElementById('result').textContent = numOne;
  }

  // If second num
  if (numOne !== '' && operator !== '') {
    numTwo += number;
    document.getElementById('result').textContent = numTwo;
  }
}
// Evaluate result when equal is pressed
function pressEqual() {
  if (numOne !== '' && numTwo !== '') {
    result = eval(numOne + operator + numTwo);
    document.getElementById('result').textContent = result;
  } else {
    return;
  }
}
// Clear calculator
function pressClear() {
  numOne = numTwo = operator = result = '';
  document.getElementById('result').textContent = '0';
}

startCalculator();
