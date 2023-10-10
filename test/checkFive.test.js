	
   const checkFive = require('./checkFive.js');

   describe("checkFive", function() {

      test("test for number five check", function() {
        let result = checkFive(3);
        expect(result).toBe("3 is less than 5.");
      });

      test("test for number five check", function() {
        let result = checkFive(5);
        expect(result).toBe("5 is equal to 5.");
      });

      test("test for number five check", function() {
        let result = checkFive(7);
        expect(result).toBe("7 is greater than 5.");
      });

   });

 