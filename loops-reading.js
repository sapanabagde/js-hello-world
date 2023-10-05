

// BASIC FOR LOOP (this loop will print number from 0 to 4)

// for (let i = 0; i < 3; i++) {
//    console.log(i);
//  }

/*for (let i = 0; i < 10 ; i++){
    console.log(i);
}*/

/*for (let i = 2; i < 10 ; i++){
    console.log(i);
}*/


//LOOPING THROUGH ARRAY ( Ths loop will iterate through the fruits array and print each fruit)

//for (let i = 0; i < 10 ; i++){
   // console.log(i);

/*const fruits = ["apple", "banana", "cherry", "mango", "guava" ];

 for (let i=0; i < fruits.length; i++){
    console.log([i]);
 }*/

/*const fruits = ["apple", "banana", "cherry", "mango", "guava" ];

 for (let i=2; i < fruits.length; i++){
    console.log([i]);
 }*/

 // LOOPING THROUGH AN OBJECT PROPERTIES

 //(This loop will iterate through the properties of the person object and print each property and its value)
  
 
 /*const person = {
    name: "John",
    age:  30,
    job: "developer"
 };
for (const key in person) {
   console.log(key + ": " + person[key]);
}*/

/*let person = {
    name: "Alice",
    age: 25,
    occupation: "programmer"
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }*/

// USING FOR .. of loop (for arrays): This loop simplifies iterating through an array by directing acessing its elements

/*const colors = [ "red", "green", "blue", "white" ]; 
for (const color of colors){
    console.log(color);
}*/

/*const animals = [ "lion", "deer", "rhino", "monkey" ]; 
for (const animal of animals){
    console.log(animal);
}*/

//USING forEach (for arrays);

/*const animals = [ "lion", "deer", "rhino", "monkey", "Jiraff" ]; 
animals.forEach(function(animal) {
    console.log(animal);
});*/


// Iterating   ***over "STRING"**

/*let name = "Launchcode";
for (let i = 0; i < name.length; i++) {
   console.log(name[i]);
}*/


// create a string variable containing your name

/*let name = "Sapana";
for (let i = 0; i < name.length; i++) {
   console.log(name[i]);
}*/


// write a for loop that prints each character in your name on a different line

/*let name = [ "S", "A", "P" , "A" , "N" , "A" ]; 
for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}*/

// ITERATING ***OVER ARRAY**

/*let languages = ["JS", "Java", "C#", "Python"];

for (let i = 0; i < languages.length; i++) {
   console.log(languages[i]);
}*/
	
	
/*let names = ["Sapana", "Parag", "Shantanu", "Samyak"];

for (let i = 0; i < names.length; i++) {
   console.log(names[i]);
}*/

/*const names = [ "Sapana", "Parag", "Shantanu", "Samyak" ]; 
for (const name of names){
    console.log(name);
}*/

/*let name = "LaunchCode";

for (let i = 6; i < name.length; i++) {
   console.log(name[i]);
}*/

/*for (let i = 3; i < 10; i++) {
   console.log(i);
}*/


// This is EXAMPLE of loop does not iterate at all, because its condition is false to start with.

/*for (let i = 0; i < -1; i++) {

   console.log("LaunchCode");
}*/

/*for (let i = 0; i < 51; i = i + 2) {
   console.log(i);
}
*/

/*let phrase = "Chili Cook-off";
              012345678910111213
console.log(phrase.length)
for (let i = 0; i < phrase.length-1; i = i + 3) {
                 15 <     13          i = 12+3 = 15
   console.log(phrase[i]);
}*/

/*let n = 6;
let total = 0;

for (let i = 1; i <= n; i++) {
   total += i;
   console.log("----------------------------",i);
   console.log("value of i: ",i);
   console.log("value of total: ",total)
   
}*/

//console.log(total);

//***********Reversing String Example*********

// /*let str = "blue";
// let reversed = "";

// for (let i = 0; i < str.length; i++) {
//    reversed = str[i] + reversed;
// }

// console.log(reversed);

// let str = "blue";
// let reversed = "";

// for (let i = 0; i < str.length; i++) {
//    reversed = reversed + str[i] ;

// }
// console.log(reversed);

	
// for (let i = 0; i < 5; i++) {
//    console.log(i);
// }

//Iterating over string


// let name = "LaunchCode";

// for (let i = 0; i < name.length; i++) {
//    console.log(name[i]);
// }

// let name = "Sapana";

// for (let i = 0; i < name.length; i++) {
//    console.log(name[i]);
// }

//************************************************** */

//Iterating over Arrays
// let languages = ["JS", "Java", "C#", "Python"];

// for (let i = 0; i < languages.length; i++) {
//    console.log(languages[i]);
// }


// let names = ["Wani", "Toni", "Soni", "Mani"];

// for (let i = 0; i < names.length; i++) {
//    console.log(names[i]);
// }

//  let numbers = [1,2,3,4,5];
// for (let i = 0; i < numbers.length; i++) {
//       console.log(numbers[i]);
//       }

// for (let i = 3; i <= 10; i++) {
//    console.log(i);
// }

// let name = "LaunchCode";

// for (let i = 6; i < name.length; i++) {
//    console.log(name[i]);
// }

// Varaible not Required

	
// let phrase = "Chili Cook-off";

// for (let i = 0; i < phrase.length - 1; i = i + 3) {
//    console.log(phrase[i]);
// }


// for (let i = 0; i < 10; i = i + 3) {
//    console.log(i);
// }