// All about strings

// First one: Instantiating a string object and passing it the content "Toy Story"
var str1 = new String ("Toy Story");
// Second one: Taking the value Wall-e and converting it into a string"
var str2 = String ("Wall-e");
// Third way: Using a string literal
var str3 = "Cars";

var result = str1.toLocaleUpperCase();
console.log(result);
var result2 = "Mosters Inc".toLocaleLowerCase();
console.log(result2);

var r = str2.substring(4,5);
r;

var n = str2.substr(4,1);
console.log(r);

var l = str2.indexOf("-");
l;

var n = str1.lastIndexOf('o');
n;

// concatenatin strings
var newString = "".concat(str1, ", ",str2,", ", str3);
newString



