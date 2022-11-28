const express = require('express')
const { addBook, getAllBooks, updateBook, deleteBook, getBookById } = require('../controllers/books.controller')
const router = express.Router()

router.route('/')
    .get(getAllBooks)
    .post(addBook)

router.route('/:id')
    .get(getBookById)
    .post((req, res) => {
        res.status(501).send({"Reply": "Not implemented"})
    })
    .put(updateBook)
    .delete(deleteBook)

module.exports = router