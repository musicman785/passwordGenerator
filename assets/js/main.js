// Assignment Code
//var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button

//generateBtn.addEventListener("click", writePassword);

// DOM variables and functions
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateBtn = document.querySelector("#generate");





// Created a random functions to make it easier to call all the functions later if necessary. 
var randomFunction = {
    lower: getRandomLower(),
    upper: getRandomUpper(),
    number: getRandomNumber(),
    symbol: getRandomSymbol()
}; console.log(randomFunction);



// Generate password function
function generatePassword() {
   return randomFunction.lower + randomFunction.upper + randomFunction.number +
   randomFunction.symbol;  
}; console.log(generatePassword());

// Generator Functions using - http://www.net-comber.com/charset.html for random numbers and upper and lower case letters. Symbols used keyboard.

function getRandomLower() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
   var symbols = " !@#$%^&*(){}[]=<>/";
    return symbols[Math.floor(Math.random() * symbols.length)]
}


