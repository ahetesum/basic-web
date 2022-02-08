function greet(name, callback) {
  // function
  console.log("Hi" + " " + name);
  callback();
}
function callMe() {
  // callback function
  console.log("I am callback function");
}
greet("Peter", callMe); // passing function as an argument
