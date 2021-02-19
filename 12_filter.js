// Filter even numbers
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers2 = numberArray.filter(number => number % 2 === 0);
console.log(evenNumbers2);

// Example 2:- Filter objects with tags javascript
var testDataOne_persons = [
  { id: 1, name: "John", tags: "javascript" },
  { id: 2, name: "Alice", tags: "javascript" },
  { id: 3, name: "Roger", tags: "java" },
  { id: 4, name: "Adam", tags: "javascript" },
  { id: 5, name: "Alex", tags: "java" }
];

console.log('tags ', 
  testDataOne_persons.map((item) =>
    item.tags.indexOf("javascript")
  )
);

var javscriptPersons = testDataOne_persons.filter(
  person => person.tags.indexOf("javascript") > -1
);

console.log(javscriptPersons);
