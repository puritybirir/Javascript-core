var name = 'Aragorn';

function x() {
  var name = 'Gimli';
  console.log(name);
  other = "Legolas";
}

x();
console.log(name);
y();

function y() {
  console.log(name);
  console.log(other);
}
