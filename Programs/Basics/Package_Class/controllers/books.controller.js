const books = require("../data/books");

const getAllBooks = (req, res) => {
    res.status(200).json(books)
}
const addBook = (req, res) => {
    let new_book = {
        "id": books[books.length - 1].id + 1,
        "title": req.body.title,
        "author": req.body.author,
        "category": req.body.category
    }
    books.push(new_book)
    res.json(books)
}
const updateBook = (req, res) => {
    let updatedBooks = books.map((item) => {
        if(item.id == req.params.id) {
            item.title = req.body.title
            item.author = req.body.author
        }
        return item
    })
    res.json(updatedBooks)
}
const deleteBook = (req, res) => {
    let newList = books.filter((item) => {
        return item.id != req.params.id
    })
    res.json(newList)
}

const getBookById = (req, res) => {
    let book = books.find(item => item.id == req.params.id)
    if(book === undefined) {
        res.status(404).json({
            message: "Requested book not found"
        })
    }
    else {
        res.status(200).json(book)
    }
}

module.exports = {
    getAllBooks, addBook, updateBook, deleteBook,
    getBookById, updateBook, deleteBook
}