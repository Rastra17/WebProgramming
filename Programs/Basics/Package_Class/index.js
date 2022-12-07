const express = require('express')
const logger = require('./logger')
const path = require('path')
const mongoose = require('mongoose')

const book_route = require('./routes/books.route')

const app = express()

const port = 5000

mongoose.connect("mongodb://127.0.0.1:27017/books-29b")
    .then(() => {
        console.log("Connected to the MongoDB Server")
    })
    .catch((err) => {
        console.log(err)
    })

// Express defined middleware
app.use(express.json())

// Logger
// Application level middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    logger.log(`info \t ${req.method} \t ${req.path}`)
    next()
})


// Route
app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// Router level middleware
app.use('/books', book_route)

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ "err": err.message })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
