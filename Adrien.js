
//use non-ES6 standards for browser support
//Tests that have been labled as either pass or fail
var PARSED_TESTS = {};
var DUMP_OBJECT = false;

module.exports.setCategory = function (category_name){
   PARSED_TESTS[category_name] = category_name; 
}

module.exports.Test = function (test_text_identifier, test_function){
  //Add support for different return values (ex. Object, Boolean, Integer...)
  //NOTE: Test functions should not accept parameters
  var TEST_RETURN, RETURN_TYPE;

  try{
      TEST_RETURN = test_function();
  }catch(e){
      //You might need to test your test :P
      console.log("===There was a problem with the test===");
      console.log(e);
      return;
  }

  RETURN_TYPE = typeof(TEST_RETURN);

  //If the test fails
  if((RETURN_TYPE == "object" && !TEST_RETURN.success) || (RETURN_TYPE == "boolean" && !TEST_RETURN)){
      PARSED_TESTS[test_text_identifier] = false;
      if(DUMP_OBJECT){
        OnDump(TEST_RETURN);
      }
  }
  else if((RETURN_TYPE == "object" && TEST_RETURN.success) || (RETURN_TYPE == "boolean" && TEST_RETURN)){
      PARSED_TESTS[test_text_identifier] = true;
  }
}

//Dumps the prototype of an object when failed, probably should be logged to a file instead
function OnDump(object){
  //Implement obj dump to file
  console.log("== OBJECT DUMP ==");
  console.log(object.prototype);
}

//When all tests have finished running
module.exports.endTests = function (){
    console.log("==TESTING FINISHED==");
    for(var i in PARSED_TESTS){
        if(i == PARSED_TESTS[i]){
            console.log(i);
        }
        else{
            if(PARSED_TESTS[i]){
                console.log("\u2713 " + i);
            }
            else{
                console.log("\u2717 " + i);
            }
        }
    }
}
