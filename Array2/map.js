const numbers = [1, 2, 3, 4, 5];

const numbersDouble = numbers.map(double)

function double(value, index, arr){
  return value * 2;
}

console.log(numbersDouble);


const products = [
  {
    name:'laptop',
    price:1000,
    count:5
  },
  {
    name: 'desktop',
    price:1500,
    count:2,
  },{
    name:'phone',
    price:500,
    count:10
  }
]

const totalProductsValue = products.map(item => item.price * item.count);
console.log(totalProductsValue);

const stringNumbers = ['1', '2', '3', '4'];

const newNumbers = stringNumbers.map(Number);

console.log(newNumbers);


