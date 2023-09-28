

// console.log(typeof 42);
// console.log(typeof "LC101");
// console.log(typeof Number);

// function hello(num) {
//   let a = num + 5;
//   return a;

// }

// let helloFunc = hello;
// console.log(helloFunc(5));


let add = function(a, b) {
    return a + b;
};

console.log(add(1, 1));


let multiply = function(a, b) {
    return a * b;
};

 // Annonymous function Variable

console.log(multiply(3, 3));


let reverseann = function(str) {

    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
};
console.log(reverseann("apple"));



let reverseann1 = function(str) {

    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
};
console.log(reverseann1("LC101"));


let f1 = function(str) {
    return str + str;
};

let f2 = f1;
console.log(f1("abcd"));


let logger = function(errorMsg) {
    console.log("ERROR: " + errorMsg);
};

let userInput = -1;
if (userInput < 0) {
    logger("Invalid input");
    
}


//SetTimeout Function//

function printMessage() {
    console.log("The future is now!");
}

console.log(setTimeout(printMessage, 5000));


// This is the example of creating anonymous function and passing it to setTimeout Function //

setTimeout(function () {      
    console.log("The future is now!");
}, 5000);



// THE ARRAY METHOD   "Map" with Function name

// let nums = [3.14, 42, 4811];

// let timesTwo = function (n) {

//     return n*2;
// };

// let doubled = nums.map(timesTwo);

// console.log(nums);
// console.log(doubled);




// THE ARRAY METHOD   Mapping Function is defined annonymously within the call to map
// I should doubled the each number in Array


// let nums = [3.14, 42, 4811];

// let doubled = nums.map(function (n) {
//     return n*2;
// });

// console.log(doubled);


// THE ARRAY METHOD   Mapping Function is defined annonymously within the call to map
// It should half the each number in Array

let nums = [3.14, 42, 4811];

let halved = nums.map(function (n) {
   return n/2; 
});

console.log(halved);


// It should Print the First Character in the array when Names is there

let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

let firstInitials = names.map(function (names) {
    
    return names[0] ;

});

console.log(firstInitials);


//********************************************************************************************
 //      GeNeric InPut ValiDiTor


//  const input = require('readline-sync');

//  function getValidInput(prompt, isValid) {
 
//      // Prompt the user, using the prompt string that was passed
//      let userInput = input.question(prompt);
 
//      // Call the boolean function isValid to check the input
//      while (!isValid(userInput)) {
//      console.log("Invalid input. Try again.");
//      userInput = input.question(prompt);
//      }
 
//      return userInput;
//  }
 
 // A boolean function for validating input
//  let isEven = function(n) {
//      return Number(n) % 2 === 0;
//  };
 
 console.log(getValidInput('Enter an even number:', isEven));
   
//Enter an even number: 3
// Invalid input. Try again.
// Enter an even number: 5
// Invalid input. Try again.
// Enter an even number: 4
// 4
//**********************************************************************
