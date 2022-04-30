const numbers = [1, 2, 3, 4, 5];

const res = numbers.some(greaterThanFour);

function greaterThanFour (item) {
  return item > 4;
}


console.log (res);

// check for adult
const persons = [
  {
    name: 'Florin',
    age : 25
  },
  {
    name: 'Ivan',
    age : 20
  },
  {
    name: 'Liam',
    age : 16
  },
]

const res2 = persons.some(isAdult);


function isAdult(person){
  return person.age >= 18;
}


console.log(res2);
