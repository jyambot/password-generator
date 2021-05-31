// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength, upCase, loCase, number, spChar, allChar;
var index;
var pWord = "";


// Arrays for each character option
var lcase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var ucase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var schar = ['\!', '\"', '\#', '\$', '\%', '\&', '\'', '\(', '\)', '\*', '\+', '\,', '\-', '\.', '\/', '\:', '\;', '\<', '\=', '\>', '\?', '\@', '\[', '\\', '\]', '\^', '\_', '\`', '\{', '\|', '\}', '\~'];


// Prompts for conditions
function getLength() {
  pwLength = prompt("How long would you like your password to be?", "8-128 Characters");
  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    pwLength = prompt("Please choose a number between 8 and 128");
  }
  return pwLength;
}

function lowerCase() {
  loCase = confirm("Would you like lower case letters in your password?")
  return loCase;
}

function upperCase() {
  upCase = confirm("Do you want upper case letters in your password?")
  return upCase;
}

function numerals() {
  number = confirm("Would you like numbers in your password?")
  return number;
}

function specChar() {
  spChar = confirm("Would you like special characters in your password?")
  return spChar;
}

// getLength();
// console.log(pwLength);
// lowerCase();
// console.log(loCase);
// upperCase();
// console.log(upCase);
// numerals();
// console.log(number);
// specChar();
// console.log(spChar);



// Simple Password Generator
function generatePassword() {
  getLength();
  lowerCase();
  upperCase();
  numerals();
  specChar();
  for (var i = 0; i < pwLength;) {
    if(i == pwLength) {break}
    if(loCase) {
      pWord += lcase[Math.floor(Math.random()*(lcase.length))];
      // console.log(pWord);
      i++;
    }
    if(i == pwLength) {break}
    if(upCase) {
      pWord += ucase[Math.floor(Math.random()*(ucase.length))];
      // console.log(pWord);
      i++;
    }
    if(i == pwLength) {break}
    if(number) {
      pWord += nums[Math.floor(Math.random()*(nums.length))];
      // console.log(pWord);
      i++;
    }
    if(i == pwLength) {break}
    if(spChar) {
      pWord += schar[Math.floor(Math.random()*(schar.length))];
      // console.log(pWord);
      i++;
    }
  }   
  return pWord;
}

// generatePassword();
// console.log(pWord);
// console.log(pWord.length);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
