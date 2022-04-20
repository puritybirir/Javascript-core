// Array everyy()
// Checks every element to see if it returns true

let numbers = [40, 16, 67, 345, 22, 23, 142, 63, 59, 283];

let greaterThan20 = numbers.every(function(num){
  return num > 20
});

console.log(greaterThan20);

let greaterThan10 = numbers.every(function(num){
  return num > 10;
});

console.log(greaterThan10);
