
  
  // const eqObjects = function(object1, object2) {
  //   let objectListOne = Object.keys(object1);
  //   let objectListTwo = Object.keys(object2);
  //   if (objectListOne.length !== objectListTwo.length) {
  //     return false;
  //   } else {
  //     for (let key of objectListOne) {
  //       if (object1[key] === object2[key]) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }
  // };
  const eqObjects = require('../eqObjests');
  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual,expected)){
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    }
    else{
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
    }
  };
  
  
  
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  console.log(assertObjectsEqual(ab, ba)); // => true
  
  const abc = { a: "1", b: "2", c: "3" };
  console.log(assertObjectsEqual(ab, abc)); // => false
  
  assertObjectsEqual(eqObjects(ab, ba), true);
  assertObjectsEqual(eqObjects(ab, abc), false);

  module.export = eqObjectsEquals;