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
  if (numOne === '') {
    return;
  }
  if (numOne !== '' && numTwo === '') {
    operator = symbol;
    document.getElementById('result').textContent = operator;
  } else {
    pressEqual();
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
    if (numOne.length > 11) {
      document.getElementById('result').textContent = `${numOne.substring(
        numOne.length,
        numOne.length - 11
      )}...`;
    } else {
      document.getElementById('result').textContent = numOne;
    }
  }
  // If second num
  if (numOne !== '' && operator !== '') {
    numTwo += number;
    if (numTwo.length > 11) {
      document.getElementById('result').textContent = `${numTwo.substring(
        numTwo.length,
        numTwo.length - 11
      )}...`;
    } else {
      document.getElementById('result').textContent = numTwo;
    }
  }
}
// Evaluate result when equal is pressed
function pressEqual() {
  if (numOne !== '' && numTwo !== '') {
    result = String(eval(numOne + operator + numTwo));
    if (result.length > 11) {
      let newResult = result.substring(result.length - 14, result.length + 1);
      document.getElementById('result').textContent = newResult;
    } else {
      document.getElementById('result').textContent = result;
    }
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

//// Bugs to fix ////

// CAN start with an operator - fixed
// LIMIT number of input chars on display - fixed
// LIMIT number of result chars - fixed
