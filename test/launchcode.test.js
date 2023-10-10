const launchcode = require('../index-studio.js');

describe("Testing launchcode", function(){
  
  test("check orginization" , function(){
    expect(launchcode.Orginization).toBe("nonprofit") 
  }); 
});