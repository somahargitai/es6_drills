const fruits = ["Apple", "Banana", "Mango"];
const first = fruits[0];
// Apple
console.log('fruits:        ', fruits);
console.log('get the first: ', first);

const last = fruits[fruits.length - 1];
// Mango
console.log('fruits:        ', fruits);
console.log('get the last: ', last);

const newLength = fruits.push("Orange"); // add to the end
// ["Apple", "Banana", "Mango", "Orange"]
console.log('fruits:        ', fruits);
console.log('Length after push: ', newLength);

const popped = fruits.pop(); // remove from the end
// ["Apple", "Banana", "Mango"];
console.log('fruits:        ', fruits);
console.log('popped from the end: ', popped);

const firstShifted = fruits.shift(); // remove from the front
// ["Banana", "Mango"];
console.log('fruits:        ', fruits);
console.log('shifted element (remove from the front): ', firstShifted);

const firstUnshifted = fruits.unshift("Strawberry") // add to the front
// ["Strawberry", "Banana", "Mango"];
console.log('fruits:        ', fruits);
console.log('length fater unshift Strawberry (add to the front): ', firstUnshifted)

let position = fruits.indexOf("nonexisting"); // get index
// -1
console.log('fruits:        ', fruits);
console.log('get nonexisting position with indexOf: ', position);

position = fruits.indexOf("Banana"); // get index
// 1
console.log('fruits:        ', fruits);
console.log('get banana position with indexOf: ', position);

const removedItem = fruits.splice(position, 1); // Remove an item by Index Position
// ["Strawberry", "Mango"]
console.log('fruits:        ', fruits);
console.log('removed item after splice with params 1,1: ', removedItem);

const replaced = fruits.splice(position, 1, 'banana');
console.log('fruits:        ', fruits);
console.log('replaced item after splice: ', replaced);


const replaced2 = fruits.splice(0, 2, 'awful');
console.log('fruits:        ', fruits);
console.log('two replaced:  ', replaced2);

