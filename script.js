// Global vars
let result = 0;
let waitForOperation = false;
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
  }
}

// If the input is "equal"
function getResult() {
  // document.getElementById('result').textContent = result;
  document.getElementById('result').textContent = 'Result';
}
// If the input is "clear"
function clearCalculator() {
  result = 0;
  document.getElementById('result').textContent = result;
}
// If the input is a number
function handleNumInput() {}
// If the input is an operator
function handleOpInput() {}

// Call on page load
getInput();
