const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    options: {
        type: Number,
        required: true,
        enum: [1,2,3]
    }
});
module.exports = mongoose.model('db1', schema);

