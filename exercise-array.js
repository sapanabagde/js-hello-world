let practiceFile = [273.15];

console.log(practiceFile);
practiceFile.push(42, "Hello" );
console.log(practiceFile);

console.log(practiceFile);
practiceFile.push( "false",-4.6, 87 );

console.log(practiceFile);

// EXERCISE PART 2


let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold[5] = 'space tether';
console.log(cargoHold);

newCargoHold = cargoHold.shift();
console.log(cargoHold);


console.log(`The array ${cargoHold} has a length of ${cargoHold.length}.`);

// EXERCISE PART 3


cargoHold.splice(3,0,'keys');
console.log(cargoHold);

cargoHold.splice(2,3,'cat','fob','string cheese');
console.log(cargoHold);


// EXERCISE PART 4

let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//console.log(holdCabinet1.concat(holdCabinet2));
//console.log(holdCabinet1);

holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log(holdCabinet2);

// EXERCISE PART 5

let str = 'In space, no one can hear you code.'

console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));




//let str1 = [water,space, suits, food , plasma , sword, batteries];

//console.log(str1.split(',').sort().join(','));



// EXERCISE PART 6


let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

let table = []
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table);

console.log(table[1], table[1][1]);