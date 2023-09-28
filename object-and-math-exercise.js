//Part 1: Create More Objects
//For each animal, add a property called astronautID. Each astronautID
//Add a move method to each animal object. The move method will select a random number of steps from 0 to 10 for the animal to take. The number can be 0 as well as 10.	
let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 1,
    move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 2,
    move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    astronautID: 3,
    move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    astronautID: 4,
    move: function () {return Math.floor(Math.random()*11)}
};

let waterBear = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    astronautID: 5,
    move: function () {return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

//Part 2: Crew Reports
//Define a crewReports function to accomplish this. When passed one of the animal objects, the function returns a template literal

function crewReports(animal){
    return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;

}

console.log(crewReports(superChimpOne));
console.log(crewReports(salamander));
console.log(crewReports(superChimpTwo));
console.log(crewReports(dog));
console.log(crewReports(waterBear));

//Part 3: Crew Fitness
//Within the function, race the five animals together by using the move method
//An animal is done with the race when they reach 20 steps or greater. Store the result as a string
//Return the array from the function, then print the results to the console (one animal per line).

function fitnessTest(candidates){
    let results = [], numSteps, turns;
    for (let i = 0; i < candidates.length; i++){
        numSteps = 0;
        turns = 0;
        while(numSteps < 20){
        numSteps += candidates[i].move();
        turns++;
        }
        results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
    }
    return results;
   }

   let raceResults = fitnessTest(crew);

    raceResults.forEach(result => console.log(result));