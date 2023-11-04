
//  EXPORT FINISHED MODULES 1.  In averages.js, add code to export all of the functions within an object.

// function averageForStudent(nameIndex,scores){
//     let sum = 0;
//     for (let i=0; i<scores.length; i++){
//       sum += scores[nameIndex][i];
//     }
//     let average = sum/scores[nameIndex].length;
//     return average;
//   }
  
//   function averageForTest(testIndex,scores){
//     let sum = 0;
//     for (let i=0; i<scores.length; i++){
//       sum += scores[i][testIndex];
//     }
//     let average = sum/scores[0].length;
//     return average;
//   }
  
//   module.exports = {
//     averageForStudent: averageForStudent,
//     averageForTest: averageForTest
//  };

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};