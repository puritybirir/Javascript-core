// AJAX stands for asynchronous javascript and xml
// Google maps used to use AJAX
// Mapquest used to be the big mapping engine at the time

var uri = "http:jsonplaceholder.typicode.com/users/7";

// none of these examples handle http status codes

// *************************************************
// OLD version AJAX
// var xhr = new XMLHttpRequest();
// xhr.open ('GET', uri, true);
// xhr.addEventListener('load', function(response){
//   // handle the response from the server
//   var data = response.responseText; //or responseXML
//   var json = JSON.parse(data); //JSON object
//   console.log('XMLHttpRequest: ' , data);
// });
// xhr.addEventListener('error', function(err){
//   // error handling network request.
// });
// xhr.send(null);

// *************************************************

fetch(uri)
  .then(function (response) {
    return response.json;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    // error handling network request
  });


// Asynchronous: The user gets to keep doing what their doing on the page as the request is also being made.


