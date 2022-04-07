// Array reduce method
// Reduce all the values in an array into a single result
// Uses a callback function just like map foreach, filter etc
// Aray.reduce(callback, initialValue)
// Also has a second parameter which is an initial Value

let numbers = [12, 34, 56, 78, 91];
// find the sum of all the numbers

let movies = [
  "Layer Cake",
  "Star Wars",
  "Star Trek",
  "Jaws",
  "Jurassic Park",
  "Grosse Pointe Blank",
  "Eternal Sunshine of the Spotless Mind",
  "Memento",
  "Dog Soldiers",
  "The Host",
  "Gran Torino",
  "Close Encounters of the Third Kind",
  "Good Will Hunting",
  "Layer Cake",
  "Casino Royale",
  "Almost Famous"
];

// find the movie alphabetically.

let sum = numbers.reduce(function(passedIn, item){
  return passedIn + item;
}, 0);

console.log('Total is', sum, '\n');

let first = movies.reduce(function(currentValue, item){
  console.log("Comparing", currentValue, 'to', item);
  return (currentValue<item) ? currentValue : item
}, "\u0434")
console.log('First Movie is', first);


