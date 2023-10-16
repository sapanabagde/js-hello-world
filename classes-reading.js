
// let str = "Sapana Bagde";
// let repeatCount = str.repeat(2);
// console.log(repeatCount);
 
// let str = "Geeks";
// let repeatCount = 3;
// let repeatedStr = "Sapana";

// for (let i = 0; i < repeatCount; i++) {
// 	repeatedStr += str;
// }

// console.log(repeatedStr);


// let fox = {
//     name: 'Fox',
//     age: 7,
//     mass: 12,
//     catchPhrase: function(repeats) {
//        let phrase = 'LaunchCode';
//        for (let i = 0; i < repeats; i++) {
//           phrase += ' Rocks';
//        }
//        return phrase;
//     }
//  }
 
//  console.log(`${fox.name} says, "${fox.catchPhrase(3)}."`);

//  class Astronaut {
//     constructor(name, age, mass){
//        this.name = name;
//        this.age = age;
//        this.mass = mass;
//     }
//  }
//  let fox = new Astronaut('Fox', 7, 12);                  //we call the Astronaut, and pass in different sets of arguments
//  let hippo = new Astronaut('Hippo', 25, 1500);           //we call the Astronaut, and pass in different sets of arguments
//  let tortoise = new Astronaut('Tortoise', 30, 400);
 

//  console.log(typeof hippo, typeof fox, typeof tortoise);
//  console.log(hippo, fox, tortoise);


//******************************************************************************************** */
// Example prepared/created by me


// class Mechanical {
//     constructor(name, age, weight){
//        this.name = name;
//        this.age = age;
//        this.weight = weight;
//     }
//  }
 
//  let general = new Mechanical('Ramesh', 20, 140);                  //we call the Astronaut, and pass in different sets of arguments
//  let quota = new Mechanical('Suresh', 25, 150);                    //we call the Astronaut, and pass in different sets of arguments
//  let scholarship = new Mechanical('Ganesh', 30, 130);
 
//  console.log(general, quota, scholarship);
//******************************************************

// Modifyin and adding new key/value pair

// class Astronaut {
//         constructor(name, age, mass){
//            this.name = name;
//            this.age = age;
//            this.mass = mass;
//         }
//      }

//      let fox = new Astronaut('Fox', 7, 12);    
                   
//      fox.age = 19;
//      fox.color = 'red';

//      console.log(fox);
//      console.log(fox.age, fox.color);

//********************************************************* 
	//setting default value example

// class Astronaut {
//     constructor(name, age = 120, mass = 54){
//        this.name = name;
//        this.age = age;
//        this.mass = mass;
//     }
//  }
 
//  let tortoise = new Astronaut('Speedy' );
 
//  console.log(tortoise.name, tortoise.age, tortoise.mass);
 //******************************************************

//  class Car {
//     constructor(make, model, year, color, mpg){
//        this.make = make;
//        this.model = model;
//        this.year = year;
//        this.color = color;
//        this.mpg = mpg;
//     }
//  }

//  let myCar = new Car('Tesla', 'Model S', 2019);
//  console.log(myCar);
//******************************************************************* */

// Assigning Methods----OUTSIDE--- constructor

	
// class Astronaut {
//     constructor(name, age, mass){
//        this.name = name;
//        this.age = age;
//        this.mass = mass;
//     }
 
//     reportStats() {
//        let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
//        return stats;
//     }
//  }
 
//  let fox = new Astronaut('Fox', 7, 12);
//  console.log(fox.reportStats());

 //*********************************************************************
 // Assigning Methods------INSIDE----constructor

//  class Astronaut {
//     constructor(name, age, mass){
//        this.name = name;
//        this.age = age;
//        this.mass = mass;
//        this.reportStats = function() {
//           let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
//           return stats;
//        }
//     }
//  }
 
// let fox = new Astronaut('Fox', 7, 12);
// let hippo = new Astronaut('Hippo', 25, 1000);
// console.log(fox.reportStats());
// console.log(hippo.reportStats());

//*********************************************************************
    //    class Astronaut {
    //     constructor(name, age, mass){
    //        this.name = name;
    //        this.age = age;
    //        this.mass = mass;
    //     }
    //  }
    //  let fox = new Astronaut('Fox', 7, 12);                  
    //  let hippo = new Astronaut('Hippo', 25, 1500);           
    //  let tortoise = new Astronaut('Tortoise', 30, 400);
     
    
    //  console.log(typeof hippo, typeof fox, typeof tortoise);
    //  console.log(hippo, fox, tortoise);

//*****************************************************************************************

    // class Felidae {
    //     constructor() {
    //        this.claws = "retractable";
    //     }
    //  }
     
    //  class Panthera extends Felidae {
    //     constructor() {
    //        super();
    //        this.roar = "loud";
    //     }
    //  }
     
    //  class Tiger extends Panthera {
    //     constructor() {
    //        super();
    //        this.hasStripes = "true";
    //     }
    //  }
     
    //  let tigger = new Tiger();
     
    //  console.log(tigger);
   
    //*********************************************************************** */

    