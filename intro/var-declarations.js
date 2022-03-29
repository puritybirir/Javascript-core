// Varaible scope
// Create some global variables

var ranger = 'Aragorn';
let elf = 'Legolas';
const Dwarf = 'Gimli';
let hobbit = 'Sam';

function goToMountDoom(){
  for(var i=0; i<100; i++){
    // i is a local scope variable
  }

  for(let c=0; c<100; c++){
    // c is a block scope variable
  }

  console.log('i', i);
  console.log('c', c);
  let hobbit = 'Frodo';
}

function visitLothLorien(){
  elf = 'Galadriel';
  ranger = 'Strider';
  DWARF = 'Gloin';
  let hobbit = 'Bilbo';
}

goToMountDoom();
visitLothLorien();

