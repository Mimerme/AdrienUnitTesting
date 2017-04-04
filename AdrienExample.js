const Adrien = require("./Adrien.js");
const TestFunctions = require("./TestFunctions.js");
AdrienMain();
//The actual test runner
function AdrienMain(){
  console.log("Starting Test");
  Adrien.setCategory("Basic test");
  Adrien.Test("This test is a test of the test", function(){return true;});
  Adrien.Test("This test is a failed test of the test", function(){return false;});
  Adrien.endTests();


}
