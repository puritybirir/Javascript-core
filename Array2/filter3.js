// remove duplicates from an array

const numbers = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];

const nums = numbers.filter((value, index, arr)=> {
  return arr.indexOf(value) === index;
})

console.log(nums);
