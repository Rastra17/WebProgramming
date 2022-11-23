// User  defined libraries/ modules

const math = require('./math')

console.log(math.add(2,3))
console.log(math.subtract(2,3))
console.log(math.divide(2,3))
console.log(math.multiply(2,3))

// We can import directly also by using the code given below
// const {add, subtract, divide, multiply} = require('./math')