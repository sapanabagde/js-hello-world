	
let numbers = [ 20, 44, 45 ];
let searchVal = 42;
let i = 0;

while (i < numbers.length) {
   console.log(i);
   if (numbers[i] === searchVal) {
      break;
   }
   i++;
}
