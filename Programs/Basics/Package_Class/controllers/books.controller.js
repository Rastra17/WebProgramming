// const books = require("../data/books")
const Book = require('../models/Books')

const getAllBooks = async (req, res, next) => {
    // try {
    //     let books = await Book.find()
    // }
    // catch (error) {
    //     console.log(error)
    // }
    Book.find()
        .then((books) => {
            res.json(books)
        })
        .catch(next)
}
const addBook = (req, res, next) => {
    let book = {
        'title': req.body.title,
        'author': req.body.author,
    }
    Book.create(req.body)
        .then((book) => {
            res.status(201).json(book)
        })
        .catch(next)
}
const updateBookbyId = (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((book) => {
            res.json(book)
        })
        .catch(next)
}

const deleteBook = (req, res, next) => {
    Book.findByIdAndDelete(req.params.id)
        .then((reply) => {
            res.json(reply)
        })
        .catch(next)
}

const deleteAllBooks = (req, res) => {
    Book.deleteMany()
        .then((reply) => {
            res.json(reply)
        })
        .catch((error) => {
            console.log(error)
        })
}

const getBookById = (req, res, next) => {
    Book.findById(req.params.id)
        .then((book) => {
            res.json(book)
        })
        .catch(next)
}

module.exports = {
    getAllBooks, addBook, updateBookbyId, deleteAllBooks,
    getBookById, deleteBook
}