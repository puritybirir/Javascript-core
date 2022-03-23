let ingridients = ["lettuce", "cheddar", 'ham'];

let sandwichHas = function (ingridient) {
  for (let i of ingridients) {
    if ( i == ingridient) {
      return true;
    }
  }
  return false;
  //if this line is omitted it returns undefined which is also a falsey value
}

console.log(sandwichHas("cheddar"))

if(sandwichHas("ham") || sandwichHas("chicken") || sandwichHas("chicken")){
  console.log('Sandwich has meat')
} else {
  console.log('No meat')
}

if(sandwichHas('lettuce') && sandwichHas('tomato')){
  console.log("It has both")
} else {
  console.log('It does not have both but it might have one of them')
}

if((sandwichHas('cheddar') && sandwichHas('lettuce')) || sandwichHas('onion')){
  console.log('cheese and lettuce.......OR onion')
} else {
  console.log('failed');
}
