// Global var
let firstNum = '';
let secondNum = '';
let operator = '';
let result = '';

// Get the current input
function getInput() {
  document.addEventListener('click', (e) => {
    evalInput(e.target.id);
  });
}

// Evaluate the input
function evalInput(input) {
  if (input === 'clear') {
    firstNum = secondNum = operator = result = '';
    document.getElementById('result').textContent = '0';
    return;
  }
  if (input === '=') {
    console.log('equal');
    return;
  }
  // Get the first number
  if (!Number(isNaN(input)) && operator === '') {
    firstNum += input;
    document.getElementById('result').textContent = firstNum;
  }
  // Get the second number
  if (!Number(isNaN(input)) && operator !== '') {
    secondNum += input;
    document.getElementById('result').textContent = secondNum;
  }
  // Get the operator
  if (Number(isNaN(input))) {
    if (operator === '') {
      operator = input;
      document.getElementById('result').textContent = operator;
    } else {
      calculator();
      operator = input;
      document.getElementById('result').textContent = operator;
    }
  }
}

// Calculator function
function calculator() {
  switch (operator) {
    case '+':
      result = Number(firstNum) + Number(secondNum);
      document.getElementById('result').textContent = result;
      break;
    case '-':
      result = Number(firstNum) - Number(secondNum);
      document.getElementById('result').textContent = result;
      break;
    case '*':
      result = Number(firstNum) * Number(secondNum);
      document.getElementById('result').textContent = result;
      break;
    case '/':
      result = Number(firstNum) / Number(secondNum);
      document.getElementById('result').textContent = result;
      break;
    default:
      return;
  }
}

// Call on page load
getInput();
