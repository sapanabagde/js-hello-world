//Exercise #1: Construct for loops that accomplish the following tasks:
//a. Print the numbers 0 - 20, one number per line.

for (let i = 0; i <= 20; i++) {

    console.log(i);
 } 

// Print only the ODD values from 3 - 29, one number per line.

for (let i = 3; i <= 29; i++) {

if (i % 2 !== 0 ) {
     console.log(i);
    }
}

 // c. Print the EVEN numbers 12 to -14 in descending order, one number per line.


 for (let i = 12; i >= -14; i-=2) {
    console.log(i);
 }


// d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for (let i = 50; i >= 20; i--) {

if (i % 3 === 0 ) {
        console.log(i);
    }
}

    
//Exercise #2: 

//Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
//Construct ``for`` loops to accomplish the following tasks:

// const myString = "Launchcode";
// const MyArray =  [1, 5, 'LC101', 'blue', 42];


//a. Print each element of the array to a new line.

for (let i =0 ; i < MyArray.length; i++ ) {
    
     console.log(MyArray[i]);  
    }


//b. Print each character of the string - in reverse order - to a new line. 


for (let i = myString.length - 1; i >= 0; i--) {
     
    console.log(myString[i]);
}
 

//Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:

//a. One array contains the even numbers, and the other holds the odds.
//b. Print the arrays to confirm the results. */
                
// let otherArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
// let evens = [], odds = [];
             
// for (let i = 0; i < otherArr.length; i++){
//     if (otherArr[i] % 2 == 0){
//         evens.push(otherArr[i]);
//     }else {
//         odds.push(otherArr[i]);
//     }
// }
// console.log(evens);
// console.log(odds);


// writing for loop 

let students = {
    names: ["Gerard Darris", "Banana Cat", "Apple Dog", "Mango Zebra", "Kiwi Kiwi"],
    scores: [100, 95, 74, 82, 91]
};

for (let i = 0; i < students["names"].length; i++) {
    let output = "";

    for (items in students) {
        output += `${students[items][i]}: `
    }
    console.log(output.slice(0, -2));
}