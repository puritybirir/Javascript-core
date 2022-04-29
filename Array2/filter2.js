const people = [
  {
    name: 'Florin',
    age: 26
  },
  {
    name: 'Ivan',
    age: 18
  },
  {
    name: 'Jai',
    age: 15
  }
];

const adults = people.filter(person => person.age >= 18);
console.log(adults);



