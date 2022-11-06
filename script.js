// Assignment Code
let generateBtn = document.querySelector("#generate");
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let characters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

function generatePassword() {
  let passwordLength = parseInt(prompt('How long do you want your password to be?'))
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert('Password must be between 8-128 characters');
    return;
  }
  let wantsUppercase = confirm('Do you want uppercase characters?');
  let wantsLowercase = confirm('Do you want lowercase letters?');
  let wantsNumbers = confirm('Do you want numbers?');
  let wantsSpecialcharacters = confirm('Do you want special characters?');
  if (!wantsUppercase && !wantsLowercase && !wantsNumbers && !wantsSpecialcharacters) {
    alert('Must choose at least one option');
    return;
  }
  let passwordOptions = [];
  if(wantsUppercase ===  true) {
    letters.forEach(function(letter){
      passwordOptions.push(letter.toUpperCase())
    })
  };
  if(wantsLowercase ===  true) {
    letters.forEach(function(letter){
      passwordOptions.push(letter)
    })
  };
  console.log(passwordOptions)
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
