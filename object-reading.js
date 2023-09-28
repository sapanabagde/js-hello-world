	
//    let tortoiseOne = {
//     species: "Galapagos Tortoise",
//     diet: ["pumpkins", "lettuce", "cabbage"]
//  };

//  let tortoiseTwo = {
//     species: "Galapagos Tortoise",
//     diet: ["pumpkins", "lettuce", "cabbage"]
//  };

//  console.log(tortoiseOne === tortoiseTwo);             //   Output is FALSE


// Example of "  For in Loop "

//  let giraffe = {
//     species: "Reticulated Giraffe",
//     name: "Cynthia",
//     weight: 1500,
//     age: 15,
//     diet: "leaves"
//   };

//   for (item in giraffe) {
//      console.log(item + ", " + giraffe[item]);
//   }



// *****************************************************************************

 // Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

//   let tortoiseOne = {

//     species: "Galapagos Tortoise",
//     name: "Pete",
//     weight: 919,
//     age: 85,
//     diet: ["pumpkins", "lettuce", "cabbage"]
//  };
 
//  for (item in tortoiseOne) {
   
//     console.log(item + ", " + tortoiseOne[item]);
//   }

  // *****************************************************************************
//********************************OBJECTS AND FUNCTIONS******************************//

// let giraffe = {
//     species: "Reticulated Giraffe",
//     name: "Cynthia",
//     weight: 1500,
//     age: 15,
//     diet: "leaves"
//   };

//   function birthday(animal) {
//       animal.age = animal.age + 1;
//       return animal;
//   }

//   console.log(giraffe.age);

//   birthday(giraffe);

//   console.log(giraffe.age);

//************************************************************************ */

	
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

// MATH PROPERTIES AS CONSTANT

//************************************************************************ */

//  console.log(Math.PI);
//  console.log(Math.PI*4);
//  console.log(Math.PI + Math.PI);


// let num = Math.floor(Math.random()*10);

  //  console.log(num);




 //***********************************************************************

//  function randomSelection(arr){
//   let index = Math.floor(Math.random()*arr.length);
//   return arr[index];
// }

// let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];

// let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];

// for (i=0; i < 8; i++){
//   console.log(randomSelection(happiness));
// }

//Experiment with the code above. Try to:
//a) Print 3 random selections from each array.
//b) Have the code randomly pick one array, and then print 2 random items from it.
//c) Create a new array, then fill it with one random item from words and happiness. Print the new array.

	
// for (i=0; i<5; i++) {
//   let randNum = Math.random();
//   console.log(randNum);
// }

///  Maths.abs  example


console.log(Math.abs(24/-3));