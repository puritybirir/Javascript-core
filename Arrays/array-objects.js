// Arrays of objects
// Efficiently combining and chaining Array methods and Arrow functions

let people = [
  { id: 123, name: "Rick Deckard", email: "rick@bladerunner.org" },
  { id: 456, name: "Roy Batty", email: "roy@replicant.io" },
  { id: 789, name: "J.F.Sebastian", email: "j.f@tyler.com" },
  { id: 258, name: "Pris", email: "pris@replicant.io" },
];

// Two step version
let replicants = people.filter(function (person) {
  return person.email.indexOf("@replicant.io") > -1;
});

let names = replicants.map(function (person) {
  return person.name;
});
console.log("List of replicant names:", names);

// Chain the two steps
let replicantNames = people
  .filter(function (person) {
    return person.email.indexOf("@replicant.io") > -1;
  })
  .map(function (person) {
    return person.name;
  });
console.log("List of replicant names:", replicantNames);

// arrow function names
let rn = people
  .filter((person) => person.email.indexOf("@replicannt.io"))
  .map((person) => person.name);
console.log("List of replicant names:", rn);
