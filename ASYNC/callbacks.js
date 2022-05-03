function one (call_two) {
  call_two();
  console.log("step 1 complete. please call step two");
}

function two () {
  console.log("step two");
}



one(two);
