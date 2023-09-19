str = "LaunchCode";
console.log(str.slice(0,3));

let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check;
	let output;
	//TODO: 2. write the code required for this step

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash() {
	let check;
	let output;
//TODO: write the code required for this step

  
	return output;
}

//4)
function reverseSpaces() {
	let check;
	let output;
  //TODO: write the code required for this step

	return output;
}

//5)
function commaSpace() {
	let check;
	let output;
	//TODO: write the code required for this step
  
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};


//Bonus Mission: Multi-dimensional Arrays

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodarray = food.split(",");
console.log(foodarray);

let euipmentarray = equipment.split(",");
console.log(euipmentarray);

let petsarray = pets.split(",");
console.log(petsarray);

let sleepAidsarray = sleepAids.split(",");
console.log(sleepAidsarray);


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.


let foodarray1 = [ 'water bottles', 'meal packs', 'snacks', 'chocolate' ]
let euipmentarray1 = [ 'space suits', 'jet packs', 'tool belts', 'thermal detonators' ]
let petsarray1 = [ 'parrots', 'cats', 'moose', 'alien eggs' ]
let sleepAidsarray1 = [ 'blankets', 'pillows', 'eyepatches', 'alarm clocks' ]

let cargoHold = [];

cargoHold.push(foodarray1);

cargoHold.push(euipmentarray1);

cargoHold.push(petsarray1);

cargoHold.push(sleepAidsarray1);


console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
console.log(cargoHold.slice(0,3));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”