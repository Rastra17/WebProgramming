const express = require('express')
const { addBook, getAllBooks, updateBook, deleteAllBooks, getBookById } = require('../controllers/books.controller')
const router = express.Router()

router.route('/')
    .get(getAllBooks)
    .post(addBook)
    .put(updateBook)
    .delete(deleteAllBooks)

router.route('/:id')
    .get(getBookById)

module.exports = router