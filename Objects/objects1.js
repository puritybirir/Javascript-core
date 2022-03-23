var dog = {
  "name" : "Woody",
  "type" : "Dog"
};
var cat = {
  "name" : "Bob",
  "type" : "Cat"
};

console.log(dog);
console.log(cat);

var petNames = ["Woody", "Bob"];
console.log(petNames);

var pets = [dog, cat];
console.log(pets);

//Adding an object literal to the pets array.
pets.push({"name":"Roxy", "type":"dog"});
pets[2];

// Adding to an individual object
cat.age = 2;
cat;

// or

dog["age"] = 14;
dog;

// Adding to an object inside of an array.
 pets[0].vaccinated = "Yes";
 pets;

 //or

 pets[1]["vaccinated"] = "No";
 pets;



