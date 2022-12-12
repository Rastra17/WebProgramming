const express = require('express')
const { getAllCategories, createCategory, deleteAllCategories, getCategoryById, updateCategoryById, deleteCategoryById } = require('../controllers/category.controller')
const router = express.Router()

router.route('/')
    .get(getAllCategories)
    .post(createCategory)
    .put((req, res) => {
        res.status(501).send({ "Reply": "Not implemented" })
    })
    .delete(deleteAllCategories)

router.route('/:id')
    .get(getCategoryById)
    .post((req, res) => {
        res.status(501).send({ "Reply": "Not implemented" })
    })
    .put(updateCategoryById)
    .delete(deleteCategoryById)

module.exports = router