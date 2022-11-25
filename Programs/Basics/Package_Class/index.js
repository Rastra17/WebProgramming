const express = require('express')
const logger = require('./logger')
const path = require('path')

const book_route = require('./routes/books.route')

const app = express()

const port = 5000

app.use(express.json())

// logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    logger.log(`info \t ${req.method} \t ${req.path}`)
    next()
})


// Route
app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.use('/books', book_route)


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
