// let students = {
//     names: ["Gerard Darris", "Banana Cat", "Apple Dog", "Mango Zebra", "Kiwi Kiwi"],
//     scores: [100, 95, 74, 82, 91]
// };

// for (let i = 0; i < students["names"].length; i++) {
//     let output = "";

//     for (items in students) {
//         output += `${students[items][i]}: `
//     }
//     console.log(output.slice(0, -2));
// }


// function randomSelection(arr){
//     let index = Math.floor(Math.random()*arr.length);
//     return arr[index];
//  }

//  let happiness = ['Hope','Joy','Peace','Love','Kindness','Puppies','Kittens','Tortoise'];

//  for (i=0; i < 8; i++){
//     console.log(randomSelection(happiness));
//  }


// let shuttleCrews = [
//    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
//    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
//    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
// ];

// let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new crew array to the end of shuttleCrews
// shuttleCrews.push(newCrew);
// console.log(shuttleCrews[3][2]);

// Reverse the order of the crew at index 1
// shuttleCrews[1].reverse();
// console.log(shuttleCrews[1]);


// let commaSeparatedValues = "Smith,Jane,100 Cherry Blossom Lane";

// console.log( commaSeparatedValues.split(','));


// function printArray(names) {
//    for (let i = 0; i < names.length; i++) {
//        console.log(names[i]);
//    }
// }

// printArray(["orange", "apple", "pear"]);
// console.log("---");



// function sayHello() {
   
//    console.log("Hello, World!");
// }

// sayHello();


var students = [80, 77, 88, 95, 68];

let Avgmarks = 0;

for (let i = 0; i < students.length; i++) {
  Avgmarks += students[i][1];
  let avg = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);

if (avg < 60) {
  console.log("Grade : F");
} else if (avg < 70) {
  console.log("Grade : D");
} else if (avg < 80) {
  console.log("Grade : C");
} else if (avg < 90) {
  console.log("Grade : B");
} else if (avg < 100) {
  console.log("Grade : A");
}