// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordLength = Number(prompt("How long would you like your password be?"));

while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 120) {
  alert("You must input a number and the password length must be 8-100 characters.");
  passwordLength = Number(prompt("How long would you like you're password to be?"));
}

let upperCase = confirm("Do you want uppercase letters?");
let lowerCase = confirm("Do you want lowercase letters?");
let number = confirm("Do you want numbers?");
let symbol = confirm("Do you want special characters?");

while (!upperCase && !lowerCase && !number && !symbol) {
  alert("You have to choose at least one type.");
  upperCase = confirm("Do you want uppercase letters?");
  lowerCase = confirm("Do you want lowercase letters?");
  number = confirm("Do you want numbers?");
  symbol = confirm("Do you want special characters?");
}

// Generates the password based off of the users inputs
function generatePassword() {
  let pass = "";
  let lLetters = "abcdefghijklmnopqrstuvwxyz";
  let uLetters = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "~!@#$%^&*()_+=-<>";
  let onlyLetters = lLetters + uLetters;
  let numsSyms = numbers + symbols;
  let all = lLetters + uLetters + numbers + symbols;
  let upsNums = uLetters + numbers;
  let upsSyms = uLetters + symbols;
  let lowNums = lLetters + numbers;
  let lowSyms = lLetters + symbols;
  let upsNumsSyms = uLetters + numbers + symbols;
  let lowNumsSyms = lLetters + numbers + symbols;
  let upsLowNums = uLetters + lLetters + numbers;
  let upsLowSyms = uLetters + lLetters + symbols;

  if (upperCase === true && lowerCase === true && number === true && symbol === true) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * all.length);
      pass += all.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === true && number === false && symbol === false) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * onlyLetters.length);
      pass += onlyLetters.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === false && number === true && symbol === false) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * upsNums.length);
      pass += upsNums.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === false && number === false && symbol === true) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * upsSyms.length);
      pass += upsSyms.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === false && number === false && symbol === false) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * uLetters.length);
      pass += uLetters.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === true && number === false && symbol === false) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * lLetters.length);
      pass += lLetters.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === true && number === true && symbol === false) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * lowNums.length);
      pass += lowNums.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === true && number === false && symbol === true) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * lowSyms.length);
      pass += lowSyms.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === false && number === true && symbol === true) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * numsSyms.length);
      pass += numsSyms.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === false && number === true && symbol === true) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * upsNumsSyms.length);
      pass += upsNumsSyms.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === true && number === true && symbol === true) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * lowNumsSyms.length);
      pass += lowNumsSyms.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === false && number === true && symbol === false) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * numbers.length);
      pass += numbers.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === false && number === false && symbol === true) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * symbols.length);
      pass += symbols.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === true && number === true && symbol === false) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * upsLowNums.length);
      pass += upsLowNums.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === true && number === false && symbol === true) {
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * upsLowSyms.length);
      pass += upsLowSyms.charAt(char)
    }
  }

  return pass;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);