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

const path = "./logFile.txt"

if(fs.existsSync(path)) {
    fs.appendFile(path, '\n' + logEvents("Just checking if it works!"), (err) => {
        if (err) {
            console.error(err)
        }
        console.log("Successfully added!")
    })
} else {
    fs.writeFile(path, logEvents("Just logging in!"), (err) => {
        if (err) {
            console.error(err)
        }
        console.log("Successfully created!")
    })
}
