// Arrray some()
// Wider availability than includes()
// functional approach like map, filter, and forEach
// returns Boolean when first positive match is found

let movies = [
  "Layer Cake",
  "Star Wars",
  "Star Trek",
  "Jaws",
  "Jurassic Park",
  "Grosse Pointe Blank",
  "Eternal Sunshine of the Spotless Mind",
  "Memento",
  "Dog Soldiers",
  "The Host",
  "Gran Torino",
  "Close Encounters of the Third Kind",
  "Good Will Hunting",
  "Layer Cake",
  "Casino Royale",
  "Almost Famous"
];

let keyword1 = 'Star';
let keyword2 = 'Cake';
let keyword3 = 'Max';

let test1 = movies.some(function(title, index){
  return title.indexOf(keyword1) > -1;
})

let test2 = movies.some(function(title, index){
  return title.indexOf(keyword2) > -1;
})


