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

// Questions to be answered by user to determin password result
var questions = {
    q1: "Please answer the folowing questions.",
    q2: "How many characters would you like in your password? Pick between '8' and '120'",
    q3: "Would you like Upper-case letters? 'yes' or 'no'",
    q4: "Would you like numbers? 'yes' or 'no'",
    q5: "Would you like lower-case letters? 'yes' or 'no'",
    q6: "Would you like symbols? 'yes' or 'no'",
    q7: "Error: Please enter proper input."

};




// Begin generation of password. User criteria.
function generatePassword() { // <== function definition(must be called to execute)
    alert(questions.q1);

    //Question to determine num of char desired.
    ansQ2 = prompt(questions.q2);

    //While loop begns
    //  While loop  to determine user input.
    // num of char question
    while (ansQ2 < 8 || ansQ2 > 120 || isNaN(ansQ2)) {
        alert(questions.q7);
        ansQ2 = prompt(questions.q2);

    }
    // upper-case question
    ansQ3 = prompt(questions.q3);
   
    //array for proper user input
    var yesAndNo = ['yes', "no"]

    // while loop for user choice (upper-case letters)
    while (!yesAndNo.includes(ansQ3)) {
        alert(questions.q7);
        ansQ3 = prompt(questions.q3);
    }
    // If user wantsnumber question
    ansQ4 = prompt(questions.q4);
    // While loop for user choice (Numbers)
    while (!yesAndNo.includes(ansQ4)) {
        alert(questions.q7);
        ansQ4 = prompt(questions.q4);
    }
    // lower-case question
    ansQ5 = prompt(questions.q5);
    // Whle loop for user choice (lower-case letters)
    while (!yesAndNo.includes(ansQ5)) {
        alert(questions.q7);
        ansQ5 = prompt(questions.q5);
    }
    // symbols question
    ansQ6 = prompt(questions.q6);
    // while loop for user choice (special characters)
    while (!yesAndNo.includes(ansQ6)) {
        alert(questions.q7);
        ansQ5 = prompt(questions.q6);
    } //While loop ends


    //  array to hold functions to call pending user input

    var randomFunctions = []
    //passTemp holds pasword result
    var passTemp = "";
    // conditional statement to determine what functions will be used and pushed to randomFunctions array

    // If statement to push necessary functions to array.  
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
    // for loop will generates number of characters desired in password and returns a integer that is used to run random functions 
    for (var i = 0; i < parseInt(ansQ2); i++) {
       // character chosen var is the return value of the function im going to call.
        var characterChosen = callRandomFunction(randomFunctions)
        passTemp = passTemp + characterChosen;
    }   // the callrandomfunction has an array parameter or I'm passing an array as an argument to the callrandomfunction - function.
        
    return passTemp; // password returned to window 
}



// creating the password random functions using the users parameters

// Generator Functions using - http://www.net-comber.com/charset.html for random numbers and upper and lower case letters. Symbols used keyboard and used array equation to run.

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
function callRandomFunction(insertArrayUsed) {
    var randomIndex = (Math.floor(Math.random() * insertArrayUsed.length));
    var randomChar = insertArrayUsed[randomIndex]();
    return randomChar;
}
var generateBtn = document.querySelector("#generate");


// // Targets text to  #password  

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// // Generate button is activated with eventlistener
generateBtn.addEventListener("click", writePassword);








