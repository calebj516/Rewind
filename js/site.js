
// get the string from the UI
// controller function
function getString() {

  document.getElementById('alert').classList.add('invisible');
  // get string from the page
  let userString = document.getElementById('userInput').value;
  // call reverseString
  let reversedString = reverseString(userString);
  displayString(reversedString);
}

// generate the string in reverse
// logic function
function reverseString(str) {

  let reversed = [];

  for(let i = str.length - 1; i >= 0; i--){
    reversed.push(str[i]);
  }

  return reversed;
}

// display the result
// view function
function displayString(revString) {

  // write to the page
  document.getElementById('msg').innerHTML = `Your string reversed is: ${revString.join('')}`;
  // show the alert box
  document.getElementById('alert').classList.remove('invisible');

}