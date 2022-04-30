const names = ['Florin', 'Ivan', 'Liam'];

const idx = names.indexOf('Ivan');

names[idx] = 'Jay'

console.log(names);


if(idx > -1){
  console.log("Yaaay we have Jay")
} else {
  console.log("No Jay");
}

const names2 = ['Florin', 'Ivan', 'Liam', 'Ivan', 'Jay'];
const idx2 = names2.indexOf('Ivan');
const idx3 = names2.lastIndexOf('Ivan');

// indexof returns the first index of the element
// starts from the beginning of the array
console.log(idx2);

// lastindexof returns the last index of the element
// starts from the end of the array
console.log(idx3);
