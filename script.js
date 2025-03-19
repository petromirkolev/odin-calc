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

  // Capture the first number
  if (!Number(isNaN(input)) && operator === '') {
    firstNum += input;
    document.getElementById('result').textContent = firstNum;
  }

  // Capture the second number
  if (!Number(isNaN(input)) && operator !== '') {
    // First time capturing second number
    if (secondNum === '') {
      secondNum += input;
      document.getElementById('result').textContent = secondNum;
      // Every other time we capture it
    } else {
    }
  }

  // Get the operator
  if (Number(isNaN(input))) {
    // If it is the first time capturing it
    if (operator === '') {
      operator = input;
      document.getElementById('result').textContent = operator;
      // Every other time we are capturing it
    } else {
      calculator();
      operator = input;
      document.getElementById('result').textContent = operator;
      console.log(result);
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
