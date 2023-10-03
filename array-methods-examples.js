//                     Example of Slice AND Sort


// let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
// let selectedItems = [];

// selectedItems = groceryBag.slice(2, 5).sort();
// console.log(selectedItems);


let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

// Creating additional crew array

let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new crew array to the end of shuttleCrews
shuttleCrews.push(newCrew);            // this will give the Joan Higginbotham

console.log(shuttleCrews[3][2]);