const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages =  ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


  function mealAssembly(protein, grains, veggies, beverages, desserts) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  
  // Part A #2: Write a ``for`` loop inside this function
  // Code your solution for part A #2 below this comment (and above the return statement) ... //

 
  for (let i = 0; i < pantry.length; i++) {
      let temp = [];
      temp.push(protein[i]);
      temp.push(grains[i]);
      temp.push(veggies[i]);
      temp.push(beverages[i]);
      temp.push(desserts[i]);
    
    meals.push(temp);
    
}

console.log(meals);

 }
