// Array map() method.

let dwarves = [
  "Bifur",
  "Bofur",
  "Bombur",
  "Fili",
  "Kili",
  "Oin",
  "Gloin",
  "Thorin",
  "Balin",
  "Dwalin",
  "Nori",
  "Dori",
];

// determine the length of each name and save it in an Array

let nameLengths = dwarves.map(function(item, index, array){
  return item.length;
});

console.log(nameLengths);
