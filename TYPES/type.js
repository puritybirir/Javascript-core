var name = "Max";
console.log(name);

var secondName = name;
console.log(secondName);

name = "Chris";
console.log(secondName);


var person = {
  age:28,
  name:'Max',
  hobbies: ['Sports', 'Cooking']
}


console.log(person);

var secondPerson = person;

console.log(secondPerson);

person.name = 'Chris';

console.log(secondPerson)


person.name = "Sunshine";
person.hobbies.push('Reading')
var thirdPerson = Object.assign({}, person);
console.log(thirdPerson)
