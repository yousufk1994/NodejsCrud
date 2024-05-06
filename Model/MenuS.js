const mongoose = require('mongoose');

const schema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        required: true
    },
    order: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('menuItems', schema);