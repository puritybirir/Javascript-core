// Array to be used for this
let people = ["Greg", "Mary", "Devon", "James"];

// Using a loop, iterate through this array and console.log all of the people.
for (let index = 0; index < people.length; index++) {
  console.log(people[index]);
}

// Write the command to remove "Greg" from the Array
people.shift();

// Write the command to remove James from the Array
people.pop();

// Write the command to add "Matt" to the front of the Array
people.unshift("Matt");

// Write the command to add your name to the End of the array
people.push("Badgirlriri");

// Using a loop, iterate through the array and after console.logging Mary, exit
for (let index = 0; index < people.length; index++) {
  if (index > 1) {
    break;
  }
  console.log(people[index]);
}

// Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let slicedPeople = people.slice(2);
slicedPeople;

// Write the command that gives the indexOf where "Mary" is located.
people.indexOf("Mary");

// Write the command that gives the indexOf where "Foo" is located (this should return -1).
people.indexOf("Foo");

/**
 * Redefine the people variable with the value you started with.
 * Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie".
 * Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"]
 **/

 let people2 = ["Greg", "Mary", "Devon", "James"];
 people2.splice(2, 1, "Elizabeth", "Artie");

 // Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
 let withBob = people2.concat("Bob");
 withBob;
