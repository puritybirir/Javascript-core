// Promises
// They are wrappers for anything async
/*** You can use promises when:
 * making ajax calls, reading files,
 * timeouts, geolocation, talking to a database,
 * or anything that would use a callback funtion
 * ***/
// You can also use callbacks to get id of callback hell
// fetch returns a promise

const rand = () => Math.floor(Math.random() * 10) + 1;

// declaring the promise
let p1 = new Promise((resolve, reject) => {
  let x = 5;
  // resolve(x); // calling this will call then
  // reject(x);
  let num = rand();
  setTimeout(resolve, 1500, num)
})


// calling the promise
p1.then((ex) => {
  console.log(ex);
  return ex;
}).then((x) => {
  console.log(x);
}).catch( (exx) => {
  console.log('caught', exx)
})
