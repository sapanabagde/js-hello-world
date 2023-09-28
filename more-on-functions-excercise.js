//******************************************************************* */
let arrayType = ['Elocution', 21, 'Clean teeth', 100];

let practice = arrayType.map(function(myArg) {
    if (typeof myArg === "number") {
       return myArg * 3;
    } else if (typeof myArg === "string") {
       return "ARRR!";
    } else {
       return myArg;
    }
 
 });

 console.log(practice);
 //

 function checkFuel(level) {
    if (level > 100000){
       return 'green';
    } else if (level > 50000){
       return 'yellow';
    } else {
       return 'red';
    }
 }
 
 function holdStatus(arr){
    if (arr.length < 7) {
       return `Spaces available: ${7 - arr.length}`;
    } else if (arr.length > 7){
       return `Over capacity by ${arr.length - 7} items.`
    } else {
       return "Full";
    }
 }
 
 let fuelLevel = 200000;
 let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
 
 console.log("Fuel level: "+ checkFuel(fuelLevel));
 console.log("Hold status: "+ holdStatus(cargoHold));

 /* Steal some fuel from the shuttle:
 */
 
//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.

//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

//c). Once you figure out how much fuel to pump out, return that value.

//d). Decide where to best place your function call to gather our new fuel.

let checkEngine = function(level) {
    let maxFuel = 0; 
    if (level > 100000) {
        maxFuel = level - 100000;
        return maxFuel; 
    } else if (level > 50000) {
        maxFuel = level - 50000;
        return maxFuel; 
    }
};

let newFuel = checkEngine(fuelLevel); 
console.log("New fuel: " + newFuel); fuelLevel -= newFuel; 


