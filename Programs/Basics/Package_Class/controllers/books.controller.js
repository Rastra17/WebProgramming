const books = require("../data/books");

const getAllBooks = (req, res) => {
    res.staus(200).json(books)
}
const addBook = (req, res) => {
    let new_book = {
        "id": books[books.length - 1].id + 1,
        "title": req.body.title,
        "author": req.body.author,
        "category": req.body.category
    }
    books.push(new_book);
    res.json(books)
}
const updateBook = (req, res) => {
    res.status(501).json({
        error: 'Cannot update the read-only file.'
    })
}
const deleteAllBooks = (req, res) => {
    res.status(501).json({
        error: 'Cannot delete the read-only file.'
    })
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
    getAllBooks, addBook, updateBook, deleteAllBooks,
    getBookById,
}