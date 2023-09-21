//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync');
let fuelLevel = 0, numAstronauts = 0, altitude = 0;

//Exercise #4: Construct while loops to do the following:
//a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

 

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
   fuelLevel = input.question("Enter the starting fuel level between 5000 and 30000: ");
   console.log();
   if(fuelLevel > 5000 && fuelLevel < 30000){
     console.log("correct fuel level:",fuelLevel );
   }
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.


while (numAstronauts <= 1 || numAstronauts > 7 || isNaN(numAstronauts)) {
    numAstronauts = input.question("Enter the number of Astronauts between 1-7: ");
    console.log();
    if(numAstronauts > 1 && numAstronauts < 7){
      console.log("Number of Astronauts:",numAstronauts );
    }
 }

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.


while (fuelLevel-100*numAstronauts >= 0) {
    altitude += 50;
    fuelLevel -= 100*numAstronauts;
   // console.log(altitude);
   // console.log(fuelLevel);
    
}

//*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/


let output = `The shuttle gained an altitude of ${altitude} km.`;

if (altitude >= 2000) {
output += " Orbit achieved!";
}
console.log(output);





