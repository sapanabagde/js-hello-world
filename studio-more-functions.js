//Part 1 and Part 2
//Define a new, empty array to hold the final sorted numbers.
//Use your function from the previous exercise to find the minimum value in the old array.
//Add the minimum value to the new array, and remove the minimum value from the old array.
//Repeat parts b & c until the old array is empty.
//Return the new sorted array.
//Be sure to print the results in order to verify your code.

function sortArray(array) {
    
    let sortedArray = [];
    
    while (array.length > 0) {
        let min = Math.min(...array);
        sortedArray.push(min);
        let index = array.indexOf(min);
        array.splice(index, 1);
    }
    return sortedArray;
}

let array1 = [5, 10, 2, 42];
let array2 = [-2, 0, -10, -44, 5, 3, 0, 3 ];
let array3 = [ 200, 5, 4, 10, 8, 5, -3.3, 4.4, 0 ];
console.log(sortArray(array1)); 
console.log(sortArray(array2)); 
console.log(sortArray(array3)); 


//Part 3
//Sort each sample array in increasing order.
//Sort each sample array in decreasing order.
let array4 = [5, 10, 2, 42];
let sortedArray = array4.sort(function(a, b){return a-b});
let array5 = [-2, 0, -10, -44, 5, 3, 0, 3 ];
let sortedArray1 = array5.sort(function(a, b){return b-a});

console.log(sortedArray);
console.log(sortedArray1);
