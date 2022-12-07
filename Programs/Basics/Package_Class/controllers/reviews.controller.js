const Books = require("../models/Books")

const getAllReviews = (res, req, next) => {
    Books.findById(req.params.id)
        .then((book) => {
            res.json(book.reviews)
        })
        .catch(next)
}

const createReview = (res, req, next) => {
    console.log(req.params)
    Books.findById(req.params.id)
        .then((book) => {
            book.reviews.push(req.body)
            book.save()
                .then((book) => res.status(201).json(book.reviews))
        })
        .catch(next)
}

const deleteAllReviews = (res, req, next) => {

}

module.exports = { getAllReviews, createReview, deleteAllReviews }