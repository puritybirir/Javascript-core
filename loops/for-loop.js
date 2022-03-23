var names = [
  "Jeff Lobowski",
  "Donie Kerabatsos",
  "Walter Sobchak",
  "Bunny Lebowski",
  "Karl Hungus",
  "Brandt",
  "Maude Lebowski",
  "Jackie Treehorn",
];

var number_of_names = names.length;
number_of_names;

console.log(names[number_of_names-1]);

//initialize; test; incrementing
for(let i=0; i<number_of_names; i++) {
  console.log(names[i]);
}

//if we wanted to go backward through our array
//Decrementing
var more_names = [
  "Jeff Lobowski",
  "Donie Kerabatsos",
  "Walter Sobchak",
  "Bunny Lebowski",
  "Karl Hungus",
  "Brandt",
  "Maude Lebowski",
  "Jackie Treehorn",
];

var number_of_more_names = names.length;

for (let i=number_of_more_names-1; i >= 0; i--){
  console.log(more_names[i]);
}
