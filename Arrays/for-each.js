// Array forEach loop

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

// Convert all names to lowercase except Thorin
// and console.log them
// anonymous function

dwarves.forEach(function(item, index, array){
  console.log(item);
  console.log(index);

  if(item === "Thorin"){
    item = item.toUpperCase();
  } else {
    item = item.toLocaleLowerCase();
  }
  console.log(item);
  console.log(index);

});

// function output(item, index, array){
//   console.log(item);
//   console.log(index);
// }
