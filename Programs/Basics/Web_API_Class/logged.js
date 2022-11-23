const { v4: uuid } = require("../Package_Class/node_modules/uuid")
const { format } = require("../Package_Class/node_modules/date-fns")
const fs = require('fs')
const path = require('path')

const log = (msg) => {
    const dateTime = `${format(new Date(), 'yyyy:MM:dd \tHH:mm:ss \n')}`
    const logItem = `${uuid()} \t ${dateTime}\t${msg}\n`

    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
        console.log('Check')
        fs.mkdir(path.join(__dirname, 'logs'), (err) => {
            if (err) console.log(err)
        })
    }
    fs.appendFile(path.join(__dirname, 'logs', 'logged_message.txt'), logItem, (err) => {
        if (err) throw err
        console.log('Saved')
    })
}

log("Hello");