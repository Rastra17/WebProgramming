// logEvents(msg)
// Create a text file and keep updating the log with Unique ID, date, time and message
// Unique ID , Date, Time, Message format

const date_fns = require("date-fns")
const uuid = require("uuid")
const fs = require("fs")

let logEvents = function(msg) {
    let logs = uuid.v4() + ', ' + date_fns.format(new Date(), "yyyy/MM/dd, hh:mm:ss") + ', ' + msg
    return logs
}

let checkFile = new File("./logFile.txt")

if(checkFile.exists()) {
    fs.writeFile("./reply.txt", logEvents("Just logging in!"), (err) => {
        if (err) {
            console.error(err)
        }
        console.log("Successfully created!")
    })
} else {
    fs.appendFile("./reply.txt", "\nGood to see you", (err) => {
        if (err) {
            console.error(err)
        }
        console.log("Successfully added!")
    })
}
