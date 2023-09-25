//let returnVal = console.log("LaunchCode"); // returns Launchcode 

//console.log(returnVal);                    // return undefined


//console.log("Hello, World!");                  // Hello, World!



// let num = Number("42");
// console.log("The variable num is of type", typeof num, "and has value", num);
// out pu of above sentences is  The variable num is of type number and has value 42 

// let commaSeparatedValues = "Smith,Jane,100 Cherry Blossom Lane";
// let values = commaSeparatedValues.split(',');
// console.log(values);
//   console output  [ 'Smith', 'Jane', '100 Cherry Blossom Lane' ]




// let names = ["Lena", "James", "Julio"];

// for (let i = 0; i < names.length; i++) {   
    
//     console.log(names[i]);
// }

// function printNames(names) {
//     for (let i = 0; i < names.length; i++) {  //This PROGRAM Runs any arrays of names
//         console.log(names[i]);
//     }
// }

// function printArray(names) {
//     for (let i = 0; i < names.length; i++) {
//         console.log(names[i]);
//     }
// }
// printArray(["Lena", "James", "Julio"]);  // This program is example of ABSTRACTING
// console.log("---");
// printArray(["orange", "apple", "pear"]);



// function printHello() {
//     console.log("Hello, World!");
// }

// printHello()

//  FUNCTIONS Input AND Output

// function sumToN(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) { //This is the example of sum to number CONCEPT and it will return 6

//         sum += i;
//     }
//     return sum;
// }
// console.log(sumToN(3));


// function pastThePointOfReturn() {
//     return "I'm done!";         //statement in this function never executes, since the function returns before it is reached.
//     console.log("This line will not print");
// }
// console.log(pastThePointOfReturn());


// function countToN(n) {
//     let count = 1;
//     while (true) {
//         if (count > n) {    //This function prints out the integers 1…n using an infinit while loop which terminate Return statement
//             return;
//         }
//         console.log(count);
//         count++;
//     }
// }

// function isEven(n) {
//     if (n % 2 === 0) {
//         return true;          //  Boolean functions Returns True    FIRST WAY
//     } else {               
//         return false;          //  Boolean functions Returns false
//     }
// }

// console.log(isEven(4));
// console.log(isEven(7));


// function isEven(n) {
//     return n % 2 === 0;     // Another way of writing Bollean Return function
// }
// console.log(isEven(4));       //SECOND WAY
// console.log(isEven(7));


// function isEven(n) {
//     if (n % 2 === 0) {
//         return true;          //THIRD WAY
//     }
//     return false;
// }


// function age(number) {
//     return `My Age is, ${number}`;// output will PRINT  My age is,
// }

// console.log(age(" "));



// function hello(name) {
//     return `Hello, ${name}!`;  // output will PRINT  Hello, LAMAR!
// }

// console.log(hello("Lamar"));


// function hello(name = "World") {
//     return `Hello, ${name}!`;             Here it will pickup bydefault    
// }                                  
                                      
// console.log(hello());                  // output will PRINT   Hello, World!
// console.log(hello("Lamar"));            // output will PRINT  Hello, Lamar!


// function hello(name = "World") {

//     return `Hello, ${name}!`;
// }

// console.log(hello("Jim", "McKelvey"));     // 0utput will PRINT  Hello, Jim!


// function plusTwo(num) {
//     return num + 2;
// }

// let a = 2;

// for (let i=0; i < 4; i++) {
//     a = plusTwo(a);
// }

// console.log(a);                   // 0utput will PRINT 10.


//  function repeater(str) {
//   let repeated = str + str;
//     console.log(repeated);
//  }

//  repeater('Bob');                      // 0utput will RETURN BobBob



//  function repeater(str) {
//     let repeated = str + str;
//     console.log(repeated);
// }

// repeater('Bob');  // 0utput of the codw will be BobBob


// **********EXAMPLES OF  Function SCOPE ***********************

// function removeHyphens(str) {
//     let strWithoutHyphens = ''

//     for (let i = 0; i < str.length; i++) {
//     if (str[i] !== '-') {
//         strWithoutHyphens += str[i];
//     }
//     }

//     return strWithoutHyphens;
// }

// let launchCodePhone = "314-254-0107";
// console.log(removeHyphens(launchCodePhone));
// console.log(strWithoutHyphens());


//  **********EXAMPLES OF VARIABLE SHADOWING ***********************

// let message = "Hello, World!";

// function printMessage() {
//     console.log(message);
// }                            //  console output Hello, World!

// printMessage();            //variable defined outside of a function may be visible within the function.



// let message = "Hello, World!";

// function printMessage() {
//     console.log(message);
// }

// printMessage();
// message = "Goodbye";            //  console output Hello, World!
// printMessage();                  //  console output Goodbye


// let message = "Hello, World!";

// function printMessage(message) {
//     console.log(message);
// }

// printMessage("Goodbye");           //console output Goodbye


// let num = 42;

// function isEven (num) { 
//     return num % 2 === 0; 
// }

//console.log(isEven(43));   // console output is false

//**********EXAMPLES OF Reverse String  Function***********************

// function reverse(str) {
//     let reversed = '';

//     for (let i = 0; i < str.length; i++) {
//         reversed = str[i] + reversed;
//     }

//     return reversed('');
// }

//********** The isPalindrome Function ***********************

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// function isPalindrome(str) {
//     return reverse(str) === str;
// }




// function makeSandwich( /*parameters*/ ) {
//     // make the sandwich
// }

// function pourDrink( /*parameters*/ ) {
//     // pour the drink
// }

// function makeLunch( /*parameters*/ ) {
//     makeSandwich( /*parameters*/ );
//     pourDrink( /*parameters*/ );
// }

/** DEFINING YOUR OWN FUNCTIONS **/

/* Calling Vs Defining **/

function sayHello(firstName) {
   return `Hello, ${firstName}!`; 
    }
    console.log(sayHello("Joe"));

/* Parameters are Variables **/

// function formatSSN(ssN1, ssN2, ssN3) {
//     return `${ssN1}-${ssN2}-${ssN3}`; 
//     }
//     console.log(formatSSN(123, 12, 6789));


//     function formatDate(weekday, mm, yyyy) {
//         return `${weekday}, ${mm}, ${yyyy}`; 
//         }
//       let formattedDate = formatDate("Thursday", "06", "01");

//         console.log(formattedDate);

//         function addThreeNums(num1, num2, num3) {
//           return  num1 + num2 +num3
//           }
//         let sumOfThree = addThreeNums(2, 6, 1);
  
//           console.log(`the sum is ${sumOfThree}.`);

//           console.log(addThreeNums(5, 5, 5));
//           console.log( `the sum of 6, 6, and 6 is  ${addThreeNums(6, 6, 6)}.`);                  

function subtotal(arr) {
  let sum = 0;
  for (let i=0; i < arr.length; i++) {
  sum += arr[i];
  }
  return sum; 
}

function getTotals(month, arr1, arr2) {
  let div1 = subtotal(arr1);
  let div2 = subtotal(arr2);

  return `In the month of ${month} Division 1 had ${div1} in earnings, while Division
   2 had ${div2} in earnings. Total earnings was $${div1 + div2}.`;
}

let earnings1 = [13056, 29430, 10230, 57283];
let earnings2 = [20435, 62433, 19857];
