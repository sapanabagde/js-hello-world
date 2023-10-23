// const input = require('readline-sync');

// let name = input.question("What is your name?");
// console.log(`Hello, ${name}`);

// let age = input.question("What is your age?");
// console.log(`My age is, ${age}`);

// let occup = input.question("What is your occupation?");
// console.log(`My occupation is, ${occup}`);



//Example Exporting Single Function

function isPalindrome(str){
    return str === str.split('').reverse().join('');
}

function evenOrOdd(num){
    if (num%2===0){
        return "Even";
    } else {
        return "Odd";
    }
}

function randomArrayElement(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}