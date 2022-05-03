// get the root details of a random user
const root = "http://jsonplaceholder.typicode.com";
let id = Math.floor(Math.random() * 2) + 1;
let uri = root + "/todos/" + id;

console.log("FETCH: ", uri);
// any user id higher than 10 will generate a 404 error

fetch(uri)
  .then( function (response) {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error('Invalid user ID');
    }
  })
  .then( (data) => {
    let jsonData = JSON.stringify(data);
    let output = document.getElementById('output');
    output.textContent = jsonData;
  })
  .catch((err) => {
    console.log("ERROR ", err.message);
  });
