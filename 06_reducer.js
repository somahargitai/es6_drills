/**
 * reduce() function
 * - is applicable on an array
 * - returns with a value (like an intiger)
 * - expects a function as a parameter
 * - the received function may have 4 parameters: accumulator, current value, currend index, source array
 * 

 */


// Exercise 1 
// typical example with two parameters: subtract array items from the first item
var numbers = [175, 50, 25];

const diminish_reducer = (total, num) => {
  return total - num;
}

const result_1 = numbers.reduce(diminish_reducer);
console.log('exercise 1, diminish reducer: ', result_1);

// Exercise 2 
// diminish reducer with explicit parameter list
const dr_explicit = (total, num, index, sourceArray) => {
  return total - num;
}

const result_2 = numbers.reduce(dr_explicit);
console.log('exercise 2, diminish reducer: ', result_2);

// 
const reducer = (...[, num]) => {
  console.log(num)
  return num*num;
}
const result_3 = [2,3,4].reduce(reducer);
console.log('exercise 3, ', result_3)
