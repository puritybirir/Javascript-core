// Executes a given function on every item of an array
// returns true if this function returns a truthy value
// if not it returns false immmediately

const numbers = [-1, 1, 2, 3, 4, 5];

const result = numbers.every(isPositive);

function isPositive(item) {
  return item > 0;
}

console.log(result);


// example with objects

const persons = [
  {
    name: 'Florin'
  },
  {
    name: 'Ivan'
  },
  {
    name: 'Liam'
  },
  {
    name: 'Jai'
  }
]

const results = persons.every(person => person.name !== undefined);

console.log(results)


// check if all arrays are arrays

const Arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const isItAnArray = Arrays.every(arr => Array.isArray(arr));

console.log(isItAnArray);
