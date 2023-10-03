
// Code your buildCrewArray function here:

// Here are the candidates and the 'animals' array:


let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};
 
// Define an array of ID numbers


let idNumbers = [291, 414, 503, 599, 796, 890];


// Define an empty array to store the selections
let selections = [];

// Code your selectRandomEntry function here:
function selectRandomEntry (arr) {
    let randomindex = Math.floor (Math.random () *arr.length);
    return arr[randomindex]; 
 }
    
 function newSelection(newArray){
   for (i = 0; i < 3; i++) {
     let selectNumber = selectRandomEntry(idNumbers);
     if (selections.includes(selectNumber)) {

       i--;
     } else {
       selections.push(selectNumber);
     }

   }
   return selections;
 }
 console.log(newSelection(idNumbers));


// Code your template literal and console.log statements:


// // Candidate data & crew array.


// let candidateA = {
//    'name':'Gordon Shumway',
//    'species':'alf',
//    'mass':90,
//    'o2Used':function(hrs){return 0.035*hrs},
//    'astronautID':414
//  };
//  let candidateB = {
//    'name':'Lassie',
//    'species':'dog',
//    'mass':19.1,
//    'o2Used':function(hrs){return 0.030*hrs},
//    'astronautID':503
//  };
//  let candidateC = {
//    'name':'Jonsey',
//    'species':'cat',
//    'mass':3.6,
//    'o2Used':function(hrs){return 0.022*hrs},
//    'astronautID':796
//  };
//  let candidateD = {
//    'name':'Paddington',
//    'species':'bear',
//    'mass':31.8,
//    'o2Used':function(hrs){return 0.047*hrs},
//    'astronautID':291
//  };
//  let candidateE = {
//    'name':'Pete',
//    'species':'tortoise',
//    'mass':417,
//    'o2Used':function(hrs){return 0.010*hrs},
//    'astronautID':599
//  };
//  let candidateF = {
//    'name':'Hugs',
//    'species':'ball python',
//    'mass':2.3,
//    'o2Used':function(hrs){return 0.018*hrs},
//    'astronautID':890
//  };
 
// //***************************************************************************************

//   // Create an empty array to store the selected crew members
//   let crew = [];

//   // Loop through the array of ID numbers

//   for (let id of ids) {
//     // Find the candidate object that has the same astronautID as the current ID
//     let candidate = candidates.find (c => c.astronautID === id);
//     // If a candidate is found, push it to the crew array
//     if (candidate) {
//       crew.push (candidate);
//     }
//   }
//   // Return the crew array
//   return crew;

// // Test the function with some sample data
// let ids = [414, 796, 599];
// let candidates = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];
// let crew = selectCrew (ids, candidates);
// console.log (crew);

