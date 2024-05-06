const mongoose = require('mongoose');
require('dotenv').config()

const db = mongoose.connection;

const localDatabaseURL = process.env.dbURL_Local;
const dbURL = process.env.dbURL

db.on('connected',()=>{
    console.log("Connected to MongoDB");
})


module.exports = mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});