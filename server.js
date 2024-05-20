const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const menuItem = require('./Controller/MenuItem')
const EmployeeC = require('./Controller/EmployeeC')
const UserC = require('./Controller/UserC')
const dC = require('./dbConnection')
const auth = require('./Auth')
require('dotenv').config()


const PORT = process.env.PORT

const logRequest = (req,res,next) =>{
    console.log(`[${new Date()}] Request made to: ${req.originalUrl}`);
    next()
}

app.use(auth.initialize())

const authVar = auth.authenticate('local',{session:false})

app.use(logRequest)

app.use('/employee',authVar,EmployeeC)
app.use('/menuitem',menuItem)
app.use('/user',UserC)
app.listen(PORT,()=>{ console.log("SERVER HAS BEEN STARTED")})