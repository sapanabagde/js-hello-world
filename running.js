// 3) Add  validation to your code to deal with user input that are longer than the word. 
// In such cases, default to moving 3 characters. Also, the template literals should note the error.

//Validation of string under four characters

/*if(word.length < 4){
  console.log(`Your word ${} is too short, so we have to change it to Launchcode.`);
  word = "Launchcode";
}*/

// Validation for numbers below 3

//const input = require('readline-sync');

//let str = input.question("Please enter a word: ");


//let firstThree = "";
//let remaining = "";
//let convertedStr = "";


let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages =  ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///

 
  for (let i = 0; i < pantry.length; i++) {
      let temp = [];
      temp.push(protein[i]);
      temp.push(grains[i]);
      temp.push(veggies[i]);
      temp.push(beverages[i]);
      temp.push(desserts[i]);
    
    meals.push(temp);
    





