// Array includes() method
// check to see if something is inside an arrya
// method returns a Boolean answer

let dwarves = [
  "Grumpy",
  "Sneezy",
  "Happy",
  "Bashful",
  "Doc",
  "Dopey",
  "Sleepy",
];

let name1 = 'Peter Dinklage';
let name2 = 'Kenny Baker';
let name3 = 'Happy';

let hasPeter = dwarves.includes(name1);
let hasKenny = dwarves.includes(name2);
let hasHappy = dwarves.includes(name3);
let hasHappy2 = dwarves.includes(name3, 3);



console.log("contains Peter", hasPeter);
console.log("contains Kenny", hasKenny);
console.log("contains Happy", hasHappy);
console.log("contains Happy", hasHappy2);


