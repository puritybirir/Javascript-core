let firstName = "Max";
let age = 29;
let hasHobbies = true;

function summarizeUser(userName, userAge, userHobby) {
  return (
    "Name is " +
    userName +
    " age is " +
    userAge +
    " and the user has hobbies" +
    userHobby
  );
}

console.log(summarizeUser(firstName, age, hasHobbies))
