/*
 * Spread Operator / Rest Operator
 * constructing or destructuring arrays or objects
 */

/**
 * Exercise 1
 * we paste arrays to a parameter list
 */
function myFunction(v, w, x, y, z) {
  console.log('Exercise 1, result: ', v, w, x, y, z);
}

var args = [0, 1];
const result_01 = myFunction(-1, ...args, 2, ...[3]);

// same result as:
const result_02 = myFunction(-1, 0, 1, 2, 3);

/**
 * Exercise 2
 * merging objects with spread syntax
 */

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
var mergedObj = { ...obj1, ...obj2 };

// merged object will contain x, y and foo with the last value given
console.log('Exercise 2, result: ', mergedObj);

/**
 * Exercise 3
 * unknows number of parameters
 */

let howMany = (...args) => "You have passed " + args.length + " arguments.";
console.log('Exercise 3:', howMany(0, 1, 2, 23)); 
console.log('Exercise 3:', howMany(0, 1, 2, 23, 23, 1, 4)); 