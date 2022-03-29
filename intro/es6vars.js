// Variable scope
// Create some global variables

var ranger = "Aragorn";
let Elf = 'Legolas';
const DWARF = 'Gimli'; // Cannot be re-assigned
let hobbit = 'Sam';

// function declaration
function goToMountDoom(){
  for ( var i = 0; i<100; i++){
    // i is a local scope variable
  }
  for ( let c=0; c<100; c++){
    // c is a block scope variable
  }
  console.log('i', i);
  console.log('c', c);
  let hobbit = 'Frodo';
}

//Another function declaration
function visitLothLorien(){
  elf = 'Galdriel';
  ranger = 'Strider';
  DWARF = 'Gloin';
  let hobbit = 'Bilbo'
}

goToMountDoom();
visitLothLorien();
