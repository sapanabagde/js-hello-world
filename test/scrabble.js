const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {

 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let candidateWord = "";   //declaring the Variable first

function initialPrompt() {
   console.log("Let's play some scrabble!\n");
   
   candidateWord = input.question("Enter a word to score: "); // previously defined function and the word provided by the user 
   
   //console.log(oldScrabbleScorer(candidateWord));  //        // This will score the 
   
   return candidateWord;
};

//let simpleScorer;


function simpleScorer(word) {    // Define function, A function with a parameter for user input that returns a score.
   let simpleScore = 0;
   for (let i = 0; i < word.length; i++) {
      simpleScore += 1;
   }
      return simpleScore;
}

//let vowelBonusScorer;

function vowelBonusScorer(word) {               // Define function
   
   let vowelBonusPoints = 0;                    //initializing variable vowelBonuspoints

  // let vowels = ["a","e","i","o","u"];           // create an  array with variable vowel
   let vowels = ['a','e','i','o','u'];  
   for (let i = 0; i < word.length; i++) {

      if (vowels.includes(word[i])) {            //.include method will check whatever item given in parantheses()true/false
         vowelBonusPoints +=3;                   // each vowel within word have point of 3
      }
       else {   
                                          // each consonant within word have 1 point
         vowelBonusPoints +=1;
       }

  }
  return vowelBonusPoints;
}

function scrabbleScorer(word, structure) {
   let totalScrabblerScore = 0;
   for (let i=0; i<word.length; i++) {
    totalScrabblerScore += structure[word[i].toLowerCase()];
    }
	return totalScrabblerScore;
 }
//let scrabbleScor


//const scoringAlgorithms = [];

const simpleScoreObj = {
  name : "Simple Score",
  description : "Each letter is worth 1 point.",
  scorerFunction : simpleScorer
  
};

const bonusVowelsObj = {
   name : "Bonus Vowels",
   description : "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction : vowelBonusScorer

 };
 
 const newScrabbleObj = {
   name : "Scrabble",
   description : "The traditional scoring algoritham.",
   scorerFunction: scrabbleScorer

 };

 let scoringAlgorithms = [ simpleScoreObj, bonusVowelsObj, newScrabbleObj ]; 

function scorerPrompt() {
console.log("Which scoring algorithm would you like to use?\n");
console.log("0 - Simple: One point per character");
console.log("1 - Vowel Bonus: Vowels are worth 3 points");
console.log("2 - Scrabble: Uses scrabble point system");
promptNumber = Number(input.question("Enter 0, 1, or 2: "));

  while (promptNumber < 0 || promptNumber > 2) {
    promptNumber = Number(input.question("Enter 0, 1, or 2: "));
  }
  return promptNumber;
};

function transform(oldPointObject) {
   let newPointStructure = {};
   for ( let key in oldPointObject) {
      let letters = oldPointObject[key];
      for (let i=0; i<letters.length; i++) {
         newPointStructure[letters[i].toLowerCase()] = Number(key);
      }
   }
   return newPointStructure;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
 
   initialPrompt();
   let inputWord = candidateWord;
   console.log(`score for '${inputWord}': ${ scoringAlgorithms[scorerPrompt()].scorerFunction(inputWord, newPointStructure)}`)
}

// Don't write any code below this line //

// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

runProgram();    //Providing the function-runProgram to run your programme 