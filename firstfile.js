const input = require('readline-sync');

let str = "";

function splitString() {
    str = input.question("Please enter string: ");
    console.log(str.slice(3,10)+str.slice(0,3));
    console.log();
  }

function runProgram() {
    splitString();
}

  module.exports = {
     runProgram: runProgram
  };
  runProgram();
//str = "LaunchCode";
//console.log(str.slice(3,10)+str.slice(0,3));