const mongoose = require('mongoose');

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to MongoDB");
})


module.exports = mongoose.connect('mongodb://localhost:27017/mern');