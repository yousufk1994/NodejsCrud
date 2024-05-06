const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const employee = require('./Model/Employee');
const menuItem = require('./Controller/MenuItem')
const dbC = require('./dbConnection');

app.get('/emp',async (req,res)=>{
    try{
        const data = await employee.find();
        res.send(data);
        console.log('Get is working');
    }
    catch(e){
        console.log(e);
    }
});

app.get('/empid/:designation',async (req,res)=>{
    try{
        const desig = req.params.designation;
        if(desig == 'chef'){
            const send = await employee.find({designation: desig});
            res.send(send);    
        }
        else{
            res.status(404).json({error: "Data not found"})
        }
        }
    catch(e){
        console.log(e);
    }
})

app.post('/emp',async (req,res)=>{
    try{
        const data = req.body;
        const emp = new employee(data);
        const oo =await emp.save();
        res.send(oo);
        console.log("POST hogaaya");
    }
    catch(e){
        console.log(e);
    }
})

app.use('/menuitem',menuItem);

app.listen(4000,()=>{console.log('4000 listening');})