const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const total = numbers.reduce(sum, 0);

function sum(accumulator, value) {
  return accumulator + value;
}

console.log(total);

// get the maximum from an array.

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];

const maximum = numbers2.reduce(max, -Infinity);

function max(accumulator, value) {
  if (accumulator > value) {
    return accumulator;
  } else {
    return value;
  }
}

console.log(maximum);

// Reduce with an array of object

const store = [
  {
    product: "laptop",
    value: 1000,
    count: 3,
  },
  {
    product: "desktop",
    value: 1500,
    count: 4,
  },
  {
    product: "mobile",
    value: 500,
    count: 10,
  },
];

const totalValueStore = store.reduce(
  (accumulator, item) => accumulator + item.value * item.count,
  0
);

console.log(totalValueStore);
