//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {

    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
        
    }

    addScore(newScore) {           //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
    this.scores.push(newScore);
    }

    average() {
        let sum = 0;
        for(let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return (sum / this.scores.length).toFixed(1)
        
      }

      getStatus() {

        let average = this.average();
        if (average >= 90) {
            return `${this.name} earned an average test score of ${average}% and has a status of Accepted.` ;
        } else if (average >= 80) {
            return `${this.name} earned an average test score of ${average}% and has a status of Reserve.` ;
        } else if (average >= 70) {
            return `${this.name} earned an average test score of ${average}% and has a status of Probationary.` ; 
        } else {
            return `${this.name} earned an average test score of ${average}% and has a status of Rejected.` ;  
        }
    }
}     

    let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
    let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
    let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62])

//    console.log(bubbaBear);
//    console.log(merryMaltese);
//    console.log(gladGator);

//    bubbaBear.addScore(83);
//    console.log(bubbaBear.scores);
//    console.log(merryMaltese.average());
     console.log(bubbaBear.getStatus());
     console.log(merryMaltese.getStatus());
     console.log(gladGator.getStatus());
     
 
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.