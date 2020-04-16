// Assignment Code

//  variables for creating password.

var randomLtrUpper = "";
var randomLtrLower = "";
var randomNum = "";
var randSym = "";
var ansQ2 = "";
var ansQ3 = "";
var ansQ4 = "";
var ansQ5 = "";
var ansQ6 = "";

// Questions to be answered by user
var questions = {
    q1: "Please answer the folowing questions.",
    q2: "How many characters would you like in your password? Pick between '8' and '120'",
    q3: "Would you like Upper-case letters? 'yes' or 'no'",
    q4: "Would you like numbers? 'yes' or 'no'",
    q5: "Would you like lower-case letters? 'yes' or 'no'",
    q6: "Would you like symbols? 'yes' or 'no'",
    q6: "Error: Please enter proper input."

};

// User prompt questions for establishing character selections.
// alerts and prompts for user questions
// alert(questions.q1);
// prompt(questions.q2)
// prompt(questions.q3);
// prompt(questions.q4);
// prompt(questions.q5);
// prompt(questions.q6);



// Begin generation of password.
function generatePassword() { //definition
    alert(questions.q1);

    ansQ2 = prompt(questions.q2);

    // while (ansQ2 < 8 || ansQ2 > 120) {
    //     alert(questions.q6);
    //     ansQ2 = prompt(questions.q2);
    // }
    if (ansQ2 < 8 || ansQ2 > 120) {
        alert(questions.q6);
        ansQ2 = prompt(questions.q2);

    }

    ansQ3 = prompt(questions.q3);
    var yesAndNo = ['yes', "no"]

    if (!yesAndNo.includes(ansQ3)) {
        alert(questions.q6);
        ansQ3 = prompt(questions.q3);
    }

    ansQ4 = prompt(questions.q4);

    if (!yesAndNo.includes(ansQ4)) {
        alert(questions.q6);
        ansQ4 = prompt(questions.q4);
    }

    ansQ5 = prompt(questions.q5);

    while (!yesAndNo.includes(ansQ5)) {
        alert(questions.q6);
        ansQ5 = prompt(questionsq5)
    }

}
// generatePassword();



// creating the password random functions using the users parameters

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
   var symbols = "!@#$%^&*(){}[]=<>/";
    return symbols[Math.floor(Math.random() * symbols.length)]
} 

// Take user input and function output and tie it to the 'generate password' btn
function generatePassword() {
    var randomFunctions = []
    if (ansQ3 === 'yes') {
        randomFunctions.push(getRandomUpper);
    }
    if (ansQ4 === 'yes') {
        randomFunctions.push(getRandomNumber);
    }
    if (ansQ5 === 'yes') {
        randomFunctions.push(getRandomLower);
    }
    if (ansQ6 === 'yes') {
        randomFunctions.push(getRandomSymbol);
    }
    for (var i = 0; i > ansQ2; i++){
        callRandomFunction(randomFunctions)
    
    }
}
function callRandomFunction(randomFunctionsArray){
    // generate random number 0-3 
    //return randomFunctionsArray[randomNumber]()
}
var generateBtn = document.querySelector("#generate");



// // Write password to the #password  

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// DOM variables and functions
// var uppercaseEl = document.getElementById("uppercase");
// var lowercaseEl = document.getElementById("lowercase");
// var numbersEl = document.getElementById("numbers");
// var symbolsEl = document.getElementById("symbols");
// var generateBtn = document.querySelector("#generate");





// Created a random functions to make it easier to call all the functions later if necessary. 
// var randomFunction = {
//     lower: getRandomLower(),
//     upper: getRandomUpper(),
//     number: getRandomNumber(),
//     symbol: getRandomSymbol()
// }; 




// function generatePassword() {
//    return randomFunction.lower + randomFunction.upper + randomFunction.number +
//    randomFunction.symbol; } 




