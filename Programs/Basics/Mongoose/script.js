const mongoose = require('mongoose')
const saveUser = require('./Controllers/user')

mongoose.connect("mongodb://127.0.0.1:27017/mongoose")
    .then(() => {
        console.log("Connected to the MongoDB Server")
    })
    .then(() => {
        saveUser()
    })
    .catch((err) => {
        console.log(err)
    })