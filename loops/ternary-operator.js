var first_name = "Ricky";
var last_name = "Bobby";
var age = 45;
var first = true;
var last = false;
var bob;

if( first == last ){
  console.log("This can never happen");
} else {
  console.log("You're only last if  you are not first");
  if(age){
    console.log(age);
  }
}


// Switch to ternary

first == last ? console.log("yep") : console.log("nope");
