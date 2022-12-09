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

const deleteAllReviews = (req, res, next) => {
    Books.findById(req.params.id)
        .then(book => {
            if (!book) {
                return res.status(404).json({ message: 'Book not found' })
            }
            book.reviews = []
            book.save().then(book => res.status(200).json(book.reviews))
        })
        .catch(next)
}

const getReviewbyId = (req, res, next) => {
    Books.findById(req.params.id)
        .then(book => {
            let review = book.reviews.find((item) => item._id == req.params.review_id)
            res.json(review)
        })
        .catch(next)
}

const updateReviewbyId = (req, res, next) => {
    Books.findById(req.params.id)
        .then(book => {
            let updatedReviews = book.reviews.map((item) => {
                if (item._id == req.params.review_id) {
                    item.body = req.body.body
                }
                return item
            })
            book.reviews = updatedReviews
            book.save()
                .then(b => res.json(b.reviews))
        })
        .catch(next)
}

const deleteReviewbyId = (req, res, next) => {
    Books.findById(req.params.id)
        .then(book => {
            let deleteReviews = book.reviews.filter((item) => {
                return item._id != req.params.reviews_id
            })
            book.reviews = deleteReviews
            book.save()
                .then(b => res.json(b.reviews))
        })
        .catch(next)
}

module.exports = { getAllReviews, createReview, deleteAllReviews, getReviewbyId, updateReviewbyId, deleteReviewbyId }