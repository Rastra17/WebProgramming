const { v4: uuid } = require('uuid')
const { format } = require('date-fns')
const fs = require('fs')
const path = require('path')

const createLogItem = (msg) => {
    const dateTime = `${format(new Date(), 'yyyy:MM:dd \tHH:mm:ss')}`
    return `${uuid()} \t ${dateTime} \t ${msg} \n`
}

const saveLogItem = (logItem) => {
    if(!fs.existsSync(path.join(__dirname, 'logs'))) {
        console.log('Folder created')
        fs.mkdir(path.join(__dirname, 'logs'), (err) => {
            if(err) console.log(err)
        })
    } 
    fs.appendFile(path.join(__dirname, 'logs', 'logged_message.txt'), logItem, (err) => {
        if(err) throw err;
        console.log('Saved')
    })
}

// saveLogItem(createLogItem('Atomic'));

const log = (msg) => {
    saveLogItem(createLogItem(msg))
}

module.exports = {
    log
}