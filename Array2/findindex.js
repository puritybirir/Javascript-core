// Finds the element and returns its index

const numbers = [1, 2, 3, 4, 5]

const res = numbers.findIndex(findThree);

function findThree (value) {
  return value === 3;
}

console.log(res);
