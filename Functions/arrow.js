// Arrow functions in Javascript
let numbers = [123, 234, 345, 456, 567];
let names = ['Alex', 'Bree', 'Cara', 'Cole', 'Devon', 'Riley'];

//simple function syntax
//create a new array of the values from the arrray greater than 300
let big = numbers.filter(function(item){
  return item > 300;
});

//arrow function version
let bigA = numbers.filter(item => item > 300);

console.log(big);
console.log(bigA);

names.forEach(function(name, index){
  console.log(index, name)
})

names.forEach((name, index) => { console.log(name, index)});
