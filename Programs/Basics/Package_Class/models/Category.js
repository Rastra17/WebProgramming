const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is required']
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books'
    }]
})

module.exports = mongoose.model('Category', categorySchema)