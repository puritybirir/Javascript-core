var name = 'Aragorn';

function x() {
  var name = 'Gimli';
  console.log(name);
}

x();
console.log(name);
y();

function y() {
  console.log(name);
}
