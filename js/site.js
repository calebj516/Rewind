// get the string from the UI
// controller function
function getString() {
  // get string from the page
  let userString = document.getElementById('userInput').value;
  // call reverseString
  let reversedString = reverseString(userString);
  displayString(reversedString);
}

// generate the string in reverse
// logic function
function reverseString(str) {
  // array to hold result
  let reversed = [];
  // loop through and push each element of str to reversed, starting from the last index to the first.
  for(let i = str.length - 1; i >= 0; i--){
    reversed.push(str[i]);
  }
  // return the reversed array, joined back into a string.
  return reversed.join('');
}

// display the result
// view function
function displayString(revString) {
  if(revString){
    let myModal = new bootstrap.Modal(document.getElementById('resultModal'));
    // display return message in modal header
    document.getElementById('modalBody').innerHTML = `Your string reversed is: ${revString}`;
    // unhide the modal
    myModal.toggle();
  }
}