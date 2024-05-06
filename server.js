const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const menuItem = require('./Controller/MenuItem')
const EmployeeC = require('./Controller/EmployeeC')
const dC = require('./dbConnection')
require('dotenv').config()
const PORT = process.env.PORT
app.use('/employee',EmployeeC);
app.use('/menuitem',menuItem);


app.listen(PORT,()=>{ console.log("SERVER HAS BEEN STARTED")})