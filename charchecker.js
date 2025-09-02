// Import readline-sync
const readlineSync = require("readline-sync");

// Use readlineSync.question() to prompt a user for input
let inputString = readlineSync.question("Enter a string as input\n");

//Prompt a user for an index number to find the character at that index
let indexNumber = readlineSync.question("Enter an index number\n");

//Use bracket notation to access the character
let characterAt = inputString[indexNumber];

//Print out the character
console.log("Character at the index number" +indexNumber + " is "+  characterAt);