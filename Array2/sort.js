const names = ['FLorin', 'Liam', 'Jai', 'Ivan'];

// default sort order is ascending.

names.sort();

console.log(names);

const numbers = [74, 18, 10, 5, 84, 24, 105];

numbers.sort(compareFunction);

console.log(numbers);

function compareFunction(a, b) {
  return a-b;
}

const products = [
  {
    product: "laptop",
    value: 1000,
  },
  {
    product: "desktop",
    value: 1500,
  },
  {
    product: "mobile",
    value: 500,
  },
];

products.sort((a, b) => b.value - a.value);

console.log(products);
