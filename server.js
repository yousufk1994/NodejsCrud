const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const menuItem = require('./Controller/MenuItem')
const EmployeeC = require('./Controller/EmployeeC')
const dC = require('./dbConnection')

app.use('/employee',EmployeeC);
app.use('/menuitem',menuItem);

app.listen(4000,()=>{ console.log("SERVER HAS BEEN STARTED")})