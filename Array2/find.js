const names = ['Florin', 'Ivan', 'Liam'];

res = names.find(findIvan);

function findIvan(item){
  return item === 'Ivan'
}

console.log(res);

// Another example

const persons = [
  {
    name: 'Florin',
    age: 25,
  },
  {
    name: 'Ivan',
    age: 20,
  },
  {
    name: 'Liam',
    age: 18,
  }
]

const Florin = persons.find(findFlorin);

function findFlorin(person) {
  return person.name === 'Florin'
}

console.log(Florin);
