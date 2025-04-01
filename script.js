// Global vars

let numOne = '';
let numTwo = '';
let operator = '';

// Start the calculator
function startCalculator() {
  ls;
  document.addEventListener('click', (e) => {
    if (e.target.id === '') {
      return;
    } else {
      getInput(e.target.id);
    }
  });
}

// Get input from the calculators
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
    console.log('I am a num!');
  }
  // If it is a symbol
  if (Number(isNaN(inp))) {
    operator = inp;
    console.log(operator);
    return;
  }
}

function pressEqual() {
  console.log('equal');
}

function pressClear() {
  console.log('clear');
}

startCalculator();
