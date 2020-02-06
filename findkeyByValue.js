const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅  Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
    }
  };


  const findKeyByValue = function(object,value){
    const element = Object.keys(object);
      for (let key of element ){
          if (object[key] === value){
              return key;
          }
        

          }
      }
  
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


    
