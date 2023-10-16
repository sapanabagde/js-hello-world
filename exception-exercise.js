

// Zero Divison Example

function divide(numerator, denominator) {
	if (denominator === 0) {
	   throw Error('You cannot divide by zero!');
	}
	return numerator/denominator;
 }
 console.log(divide(1,0));


//Test student labs Example


function gradeLabs(labs) {
   
    try{
        for (let i=0; i < labs.length; i++) {
            let lab = labs[i];
            let result = lab.runLab(3);
        }   
        console.log(`${lab.student} code worked: ${result === 27}`);

    } catch(err) {
        console.log("We caught a TypeError, Undefined");
     
    }
  }
  
let studentLabs2 = [
    {
        student: 'Blake',
        myCode: function (num) {
          return Math.pow(num, num);
        }
    },
    {
        student: 'Jessica',
        runLab: function (num) {
          return Math.pow(num, num);
        }
    },
    {
        student: 'Mya',
        runLab: function (num) {
          return num * num;
        }
    }
  ];
  
  console.log(gradeLabs(studentLabs2)); 