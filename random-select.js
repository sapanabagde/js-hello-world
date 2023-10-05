//Your code here to select a random element from the array passed to the function.

function randomFromArray(arr) {

    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
    
}                               
    
//2. Do not forget to export the randomFromArray function so you can use it in your project.

module.exports = randomFromArray;