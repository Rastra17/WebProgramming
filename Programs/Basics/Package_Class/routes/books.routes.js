const express = require('express')
const { addBook, getAllBooks, updateBookbyId, deleteAllBooks, getBookById, deleteBook } = require('../controllers/books.controller')
const router = express.Router()
const { getAllReviews, createReview, deleteAllReviews, getReviewbyId, deleteReviewbyId, updateReviewbyId } = require('../controllers/reviews.controller')

router.route('/')
    .get(getAllBooks)
    .post(addBook)
    .delete(deleteAllBooks)

router.route('/:id')
    .get(getBookById)
    .post((req, res) => {
        res.status(501).send({ "Reply": "Not implemented" })
    })
    .put(updateBookbyId)
    .delete(deleteBook)

router.route('/:id/reviews')
    .get(getAllReviews)
    .post(createReview)
    .put((req, res) => res.status(405).json({ message: "Method not implemented" }))
    .delete(deleteAllReviews)

router.route('/:id/reviews/:review_id')
    .get(getReviewbyId)
    .post((req, res) => res.status(405).json({ message: "Method not implemented" }))
    .put(updateReviewbyId)
    .delete(deleteReviewbyId)

module.exports = router