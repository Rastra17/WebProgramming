const date_fns = require("date-fns")
const uuid = require("uuid")

console.log(new Date())
console.log(date_fns.format(new Date(), "yyyy/MM/dd\thh:mm:ss"))

console.log(uuid.v4())