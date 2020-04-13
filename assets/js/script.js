// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button

//generateBtn.addEventListener("click", writePassword);



// created a random functions to make it easier to call all the functions later if necessary. 
var randomFunction = (
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
);

// Generate password function
function generatePassword(lower, upper, number, symbol) {

}

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

console.log(getRandomSymbol());
