// console.log("Hello, World!");

// let message = "Hello, World!";
// console.log(message);

// let message = "What's up, Doc?";
// let n = 17;
// let pi = 3.14159;

// console.log(typeof message);
// console.log(typeof n);
// console.log(typeof pi);

// let day = "Thursday";
// day = 32.5;
// day = 19;
// console.log(day);

// let day = "Thursday";
// console.log(day);

// day = "Friday";
// console.log(day);

// day = 21;
// console.log(day);

// let programmingLanguage;
// programmingLanguage = "JavaScript";

// console.log(String("Sapana"));
//console.log(String("123.45"));
//console.log(typeof String("123.45"));

//console.log(typeof Number("33"));

// const appName = "Get It Done";
// appName = "Best TODO application Ever!";


// const input = require('readline-sync');

// let name = input.question("Enter your name: ");
// console.log("Your name is " + name );



// const input = require('readline-sync');

// let num1 = input.question("Enter a number: " );
// let num2 = input.question("Enter another number: " );

// console.log(num1 + num2);

// let shuttleName = 'Determination';
// let shuttleSpeedMph = 17500;
// let distanceToMarsKm = 225000000;
// let distanceToMoonKm = 38400;
// const milesPerKm = 0.621;

// console.log(Boolean("true"));
// console.log(Boolean("TRUE"));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(''));
// console.log(Boolean('LaunchCode'));

// let billHasBeenPaid = true;

// if (billHasBeenPaid) {
//    console.log("Your bill is due soon!");
// } else {
//    console.log("Your payments are up to date.");
// }
//******************************* */

// let x = 10;
// let y = 20;


//ELSE IF ELSE STATEMENT
// if (x > y) {
//    console.log("x is greater than y");
// } else if (x < y) {
//    console.log("x is less than y");
// } else {
//    console.log("x and y are equal");
//}

// let jsCreator = "Brendan Eich";
// let firstInitial = jsCreator[0];
// let lastInitial = jsCreator[8];

// let outputStr = "JavaScript was created by somebody with initials " + firstInitial + "." + lastInitial + ".";

// console.log(outputStr);


//The most useful string property is named length, and it tells us how many characters are in a string.
// let firstName = "Grace";
// let lastName = "Hopper";

// console.log(firstName, "has", firstName.length, "characters");
// console.log(lastName, "has", lastName.length, "characters");


//EXample of String Methods
// language = 'JavaScript';
// console.log( language.slice(1,6));


//Example of TEMPLATE LITERALS*****************************
// let name = "Jack";
// let currentAge = 9;

// console.log(`Next year ${name} will be ${currentAge + 1}.`);

// EXAMPLE OF SPECIAL CHARACTER IN STRING
//console.log("A message\nbroken across lines,\n\tand indented");


//ARRRRRRAYYYYYYYYYYYYYYYY topic**************
// let emptyArray = [];
// console.log(emptyArray.length);


// let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
// console.log(programmingLanguages.length);

//EXAMPLe ARRAY ARE MUTABLE

// let javaScriptFrameworks = ["React", "Angular", "Ember"];

// console.log(javaScriptFrameworks);

// Set the value of index 2 to be "Vue"
// javaScriptFrameworks[2] = "Vue";

// Notice the value at index 2 is now "Vue"
// console.log(javaScriptFrameworks);


// CONCAT ARRAY METHOD example

/*let arr = [1, 2, 3];
let otherArray = ['M', 'F', 'E'];
let newArray = [];*/

//console.log(arr.concat(otherArray, arr));

// INCUDES ARRAY METHOD example
// let charles = [1, 7, 5, 9, 5];
// let otherArr = ['hello', 'world!'];

// console.log(charles.includes(5));
// console.log(otherArr.includes('hello'));


//indexOf   ARRAY METHOD example
// let charles = [1, 7, 5, 9, 5];
// let otherArray = ['hello', 'world!'];

// console.log(charles.indexOf(5));
// console.log(otherArray.indexOf('hi'));

//Join   ARRAY METHOD example
// let arr = [1, 2, 3, 4];
// let words = ['hello', 'world', '!'];

//console.log(arr.join("+"));

//console.log(words.join(" "));
//console.log(words.join("-"));

//Push   ARRAY METHOD example

//   let arr = ['a', 'b', 'c'];
//    console.log(arr.push('d', 'f', 42));
//    console.log(arr);


//pop   ARRAY METHOD example
//        let arr = ['a', 'b', 'c', 'd', 'e'];
//        arr.pop()
//         console.log(arr);


//reverse   ARRAY METHOD example
//     let arr = ['At', 'banana', 'orange', 'apple', 'zoo'];
//      arr.reverse();
//       console.log(arr);

//shift   ARRAY METHOD example
//        let arr = ['a', 'b', 'c', 'd', 'e'];
//         arr.shift();
//         console.log(arr);

//unshift   ARRAY METHOD example
//  let arr = ['a', 'b', 'c'];
//  arr.unshift('hello', 121);
//   console.log(arr);


//slice   ARRAY METHOD example
//let arr = ['a', 'b', 'c', 'd', 'e'];
//console.log(arr.slice(2));
//console.log(arr.slice(1,4));
//console.log(arr);

//sort   ARRAY METHOD example
//Alphabetical order
// let letters = ['f', 'c', 'B', 'X', 'a'];
// console.log(letters.sort());

//mixed sort example
//   let mixed = ['a', 'A', 20, 40];
//   console.log(mixed.sort());

//numerical sort example
// let numbers = [2, 8, 10, 400, 30];
// numbers.sort();
//console.log(numbers);


//splice   ARRAY METHOD example
// example of removing elementwith one argument only that is splice(index)

//let arr = ['apple', 'ball', 'cat', 'dog', 'elephant', 'fox'];

//console.log(arr.splice(2));  //Everything from index 2 and beyond is removed.


// example of removing elementwith two arguments that is, splice(index, number of items)
//let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// arr.splice(2,3);    //Sta rt at index 2 and remove 3 total entries.
// console.log(arr);
// arr.splice(1,2);    //Start at index 1 and remove 1 entry.
// console.log(arr);

// example of adding OR Replacing elements with three arguments that is,, splice(index, 0 , new item)
//    let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
//   arr.splice(2,0,'hello');     //Start at index 2, remove 0 entries, and add 'hello'.
//   console.log(arr); 

//replace elements in an array, the number of elements argument must be a positive integer. Follow this with the new items for the array.
//        let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
//
//        arr.splice(2,3,'hello', 9);    //Start at index 2, replace 3 entries with 'hello' and 9.
//       console.log(arr);


//split   actually a String Method/ARRAY METHOD example

let numbers = "1,2,3,4";
let word = "Rutabaga";
let phrase = "Bookkeeper of balloons."
let arr = [];

// arr = numbers.split(',');  //split the string at each comma.
// console.log(arr);

// arr = phrase.split(' ');   //split the string at each space.
// console.log(arr);

// arr = word.split('');      //split the string at each character.
// console.log(arr);


	
// let shuttleCrews = [
//     ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
//     ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
//     ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
// ];

// let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// // Add a new crew array to the end of shuttleCrews
// shuttleCrews.push(newCrew);
// console.log(shuttleCrews[3][2]);
//**************************************************************************************************************
// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {

 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected.

// function initialPrompt() {
//     let candidateWord = "";   //declaring the Variable first
    
//     console.log("Let's play some scrabble!\n");
    
//     candidateWord = input.question("Enter a word to score: "); // previously defined function and the word provided by the user 
    
//     //console.log(oldScrabbleScorer(candidateWord));  //        // This will score the 
    
//     return candidateWord;
//  };
 
//console.log("This is" an example);


