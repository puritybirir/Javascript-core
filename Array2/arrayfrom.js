const str = '1234567';

// we want to extract the numbers [1, 2, 3,4, 5, 6, 7] from this string

const res = Array.from(str, x => Number(x));


console.log(res);

// Another usecase is to remove all the duplicates in an array

const numbers = [1, 2, 3, 3, 2, 1, 4, 4, 3, 2, 1, 5];

const res2 = Array.from(new Set(numbers));

console.log(res2);


// With strings

const friends = ["Florin", "Ivan", "Liam", "Florin", "Ivan", "Jai"];

const nonDuplicateFriends = Array.from(new Set(friends));

console.log(nonDuplicateFriends);





