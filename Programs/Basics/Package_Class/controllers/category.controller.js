const Category = require('../models/Category');

const getAllCategories = (req, res, next) => {
    Category.find()
        .then(categories => res.status(200).json(categories))
        .catch(next)
}

const createCategory = (req, res, next) => {
    Category.create(req.body)
        .then(category => res.status(201).json(category))
        .catch(next)
}

const deleteAllCategories = (req, res, next) => {
    Category.deleteMany()
        .then(categories => res.status(200).json(categories))
        .catch(next)
}


const getCategoryById = (req, res, next) => {
    Category.findById(req.params.id)
        .populate('books')
        .then(category => res.status(200).json(category))
        .catch(next)
}

const updateCategoryById = (req, res, next) => {
    Category.findByIdAndUpdate(req.params.id,
        {
            $set: req.body
        },
        {
            new: true
        }
    ).then(
        (category) => {
            res.status(200).json(category)
        }
    ).catch((err) => {
        next(err)
    })
}

const deleteCategoryById = (req, res, next) => {
    Category.findByIdAndDelete(req.params.id,
        {
            new: true
        }
    ).then(
        (category) => {
            res.status(200).json({
                message: `Category ${category.name} deleted successfully`,
            })
        }
    ).catch((err) => {
        next(err)
    })
}

module.exports = {
    getAllCategories,
    createCategory,
    deleteAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
}