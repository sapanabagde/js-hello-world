// console.log(String("1234"));
 
	
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//  }

// function sayHello() {
//     console.log("Hello, World!");
// }

// sayHello();


// function calc() {
//     let number = 10;
//     return number;
// }
// console.log( calc());


//let selectedColors = ['red', 'blue'];

// to Print specific all elements in array
//console.log(selectedColors); // Will Print [ 'red', 'blue' ]

// to Print specific element in array
//Index Notation
//console.log(selectedColors[0]); // Will Print red


// to add new element in end of array
// selectedColors[2] = "green";
// console.log(selectedColors); // Print ['red', 'blue', 'green']

// to add Number element in end of array
//selectedColors[2] = 9;
//console.log(selectedColors); // Print [ 'red', 'blue', 9 ]

//Arrays are Object-  so the type of Array
//console.log(typeof selectedColors); // Will Print Obect



// function greet(name) {
// console.log('Hello ' + name);
// }
// greet('Parag');
// greet('Sapana');  //perform the same function with different name
//**************************

// let tortoiseTwo = {
//     species: "Galapagos Tortoise",
//     name: "Pete",
//     weight: 919,
    
// };

// tortoiseTwo["age"] = 120;
// tortoiseTwo["speed"] = 'Faster than the hare.'
// console.log(tortoiseTwo);

// let tortoiseOne = {
//     species: "Galapagos Tortoise",
//     diet: ["pumpkins", "lettuce", "cabbage"]
//  };

//  let tortoiseTwo = {
//     species: "Galapagos Tortoise",
//     diet: ["pumpkins", "lettuce", "cabbage"]
//  };

//  console.log(tortoiseOne === tortoiseTwo);

// let giraffe = {
//     species: "Reticulated Giraffe",
//     name: "Cynthia",
//     weight: 1500,
//     age: 15,
//     diet: "leaves"
//   };

//   for (item in giraffe) {
//      console.log(item + ", " + giraffe[item]);
//   }

	
// let tortoiseOne = {
//     species: "Galapagos Tortoise",
//     name: "Pete",
//     weight: 919,
//     age: 85,
//     diet: ["pumpkins", "lettuce", "cabbage"]
// };

//   };

//   function birthday(animal) {
//     animal.age = animal.age + 1;
//     return animal;
// }
//    birthday(giraffe);
//   console.log(giraffe.age);


// let tortoiseOne = {
//     age: 150,
//     species: "Galapagos Tortoise",
//     diet: ["pumpkins", "lettuce", "cabbage"]
//  };

//  let tortoiseTwo = {
//     age: 150,
//     species: "Galapagos Tortoise",
//     diet: ["pumpkins", "lettuce", "cabbage"]
//  };

//  console.log(tortoiseOne.age === tortoiseTwo.age);

// let commaSeparatedValues = "Smith,Jane,100 Cherry Blossom Lane";
// values = commaSeparatedValues.split(',')
// console.log(values);

// function printArray(names) {
//     for (let i = 0; i < names.length; i++) {
//         console.log(names[i]);
//     }
// }

// printArray(["Lena", "James", "Julio"]);
// printArray(["Rama", "Bhima", "Tana"]);

// function greet(name, lastName) {

//     console.log(`Hello! ${name} ${lastName}`);

// }
// greet('Parag', 'Bagde');

//console.log(undefined === "undefined");


// function isEven(n) {
//     return n % 2 === 0;
// }

// console.log(isEven(3));
// console.log(isEven(4));

// function hello(name, lastName) {
//     return `Hello, ${name} ${lastName}!`;
// }

// console.log(hello('Parag' , 'Bagde'));

//throw Error("You cannot divide by zero!");

//throw SyntaxError("That is the incorrect syntax");

	
const input = require('readline-sync');

let animals = [{name: 'cat'}, {name: 'dog'}];
let index = Number(input.question("Enter index of animal:"));

try {
    console.log('animal at index:', animals[index].name);
} catch(err) {
    console.log("We caught a TypeError, but our program continues to run!");
    console.log("You tried to access an animal at index:", index);
}

console.log("the code goes on...");