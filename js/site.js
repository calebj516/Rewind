
// get the string from the UI

function getString() {
  // get string from the page
  let userString = document.getElementById('userInput').value;
  // call reverseString
  let reversedString = reverseString(userString);
  // console.log(reversedString);
  displayString(reversedString);
}

// generate the string in reverse
function reverseString(str) {
  let len = str.length;
  let result = "";

  for(let i = len - 1; i >= 0; i--){
    result += str[i];
  }

  return result;
}

// display the result
function displayString(str) {

  document.getElementById('msg').innerHTML = `${str}`;
  // document.querySelector('invisible').classList.remove('invisible');

}