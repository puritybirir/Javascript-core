// fetch using a request and headers object
// using jsonplaceholder for the data

const uri = 'https://jsonplaceholder.typicode.com/users';

let h = new Headers();
let req = new Request(uri, options);

fetch(req)
  .then((response) => {

  })
  .then((jsonData) => {

  })
  .catch((err) => {

  })
