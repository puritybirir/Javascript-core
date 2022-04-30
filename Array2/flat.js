const arr = [1, [2, [3, [4]]]];

// We want to extract an array that looks like this [1, 2, 3, 4] from this

const result = arr.flat(Infinity);

console.log(result);


