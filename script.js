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
    console.log('Clear');
    return;
  }
  // Check if it is a num or operator
  if (Number(!isNaN(input))) {
    console.log('Num');
  } else {
    console.log('Operator');
  }
}

// If the input is equal
function getResult() {
  console.log('GR Function working');
}

// Call on page load
getInput();
