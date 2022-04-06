// String split and Array join methods
// Converting Strings to Arrays and Arrays to Strings
// String to array str.split();
// Array to String arr.join();

let sentence = "Hello my name is Inigo Montoya";

let words = sentence.split(' ').sort();
console.log(words);

let chars = sentence.split("name");
console.log(chars);

let charachters = sentence.split('');
// console.log(charachters);

let hyphenated = words.join("-");
console.log(hyphenated);

let oneWord = words.join("");
console.log(oneWord);

let x = sentence.split(' ').sort().join(' ');
x;
