const Won = require('./rps.js');

describe("whoWon", function () {

    test("returns 'Player 2 wins!' if P1 = rock && P2 = paper", function () {
        let output = Won.whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = Won.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });
 
});


















