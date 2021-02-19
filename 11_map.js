/**
 * .map() receives an array and returns with an array
 * It is good for:
 * - getting properties from a huge array of objects
 * - 
 */

var testDataOne_persons  = [
  { id: 1, name: "John", tags: "javascript" },
  { id: 2, name: "Alice", tags: "javascript" },
  { id: 3, name: "Roger", tags: "java" },
  { id: 4, name: "Adam", tags: "javascript" },
  { id: 5, name: "Alex", tags: "java" }
];

// get list of tags from this array of objects


console.log('tags filtered:', 
  testDataOne_persons.map((item) =>
    item.tags
  )
);

console.log('if tags are equal to "javascript":', 
  testDataOne_persons.map((item) =>
    item.tags.indexOf("javascript")
  )
);