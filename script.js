// Get used input

function getInput() {
  document.addEventListener('click', (e) => {
    console.log(`Got input: ${e.target.id}`);
    return e.target.id;
  });
}

// Call the function on page load
getInput();
