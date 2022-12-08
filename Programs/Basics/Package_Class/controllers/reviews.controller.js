const Books = require("../models/Books")

const getAllReviews = (res, req, next) => {
    Books.findById(req.params.id)
        .then((book) => {
            res.json(book.reviews)
        })
        .catch(next)
}

const createReview = (req, res, next) => {
    Books.findById(req.params.id)
        .then(book => {
            if (!book) {
                return res.status(404).json({ message: 'Book not found' })
            }
            book.reviews.push(req.body)
            book.save().then(book => res.status(201).json(book.reviews))
        })
        .catch(next)
}

const deleteAllReviews = (res, req, next) => {

}

module.exports = { getAllReviews, createReview, deleteAllReviews }