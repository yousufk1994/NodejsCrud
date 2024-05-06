const mongoose = require('mongoose')

const schema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true,
        enum: ['chef','cook','waiter']
    },
    point: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('employee',schema)