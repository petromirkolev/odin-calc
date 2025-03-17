// Global vars
let result = 0;
let waitForOperation = true;
let firstNum = 0;
let secondNum = 0;
let operator;

// Get the current input
function getInput() {
  document.addEventListener('click', (e) => {
    evalInput(e.target.id);
  });
}

// Evaluate the input
function evalInput(input) {
  // Check if it is equal
  if (input === '=') {
    getResult();
    return;
  }
  if (input === 'clear') {
    clearCalculator();
    return;
  }
  // Check if it is a num or operator
  if (Number(!isNaN(input))) {
    handleNumInput(input);
  }
}

// If the input is "equal"
function getResult() {
  // document.getElementById('result').textContent = result;
  document.getElementById('result').textContent = result;
}
// If the input is "clear"
function clearCalculator() {
  result = 0;
  firstNum = 0;
  secondNum = 0;
  operator = undefined;
  document.getElementById('result').textContent = result;
}
// If the input is a number
function handleNumInput(num) {
  // If it is the first input of the user
  if (waitForOperation) {
    firstNum === 0 ? (firstNum = num) : (firstNum += num);
    console.log('First num');
    console.log(firstNum);
    // If it is the secondary input of the user
  } else {
    secondNum === 0 ? (secondNum = num) : (secondNum += num);
    console.log('Second num');
    console.log(secondNum);
  }
}
// If the input is an operator
function handleOpInput() {}

// Call on page load
getInput();
