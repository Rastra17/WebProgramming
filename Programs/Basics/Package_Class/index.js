// const date_fns = require("date-fns");
// const uuid = require("uuid");

// console.log(new Date());
// console.log(date_fns.format(new Date(), "yyyy/MM/dd\thh:mm:ss")); //date harulai format garne kaam garcha)

// console.log(uuid.v4())

const express = require('express')
const logger = require('./logger')
const app = express()
const path = require('path')

const port = 3000

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path}`)
    logger.log(`${req.method}\t${req.path}`)
    next()
})

app.get('^/$|/index(.html)?', (req,res) =>{
    res.sendFile(path.join(__dirname, "views", "index.html"))
})



app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})