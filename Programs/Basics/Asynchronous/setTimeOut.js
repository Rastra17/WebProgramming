//Synchronous

//Synchronous system runs the code from top to bottom, if a single line of code stops working then whole program will stop.
console.log("I");
console.log("eat");
console.log("ice cream");
console.log("with a");
console.log("spoon.");

console.log("\n");

//setTimeout function runs a function after a specified time.
setTimeout(myFunction, 3000);

function myFunction() {
    console.log("Go back home now");
}