const express = require('express')
const router = express.Router()
const Employee = require('../Model/Employee')

router.get('/',async (req,res)=>{
    try{
        const data = await Employee.find();
        res.send(data);
        console.log('Get is working');
    }
    catch(e){
        console.log(e);
    }
});

router.get('/:designation',async (req,res)=>{
    try{
        const desig = req.params.designation;
        if(desig == 'chef'){
            const send = await Employee.find({designation: desig});
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

router.post('/',async (req,res)=>{
    try{
        const data = req.body;
        const emp = new Employee(data);
        const oo =await emp.save();
        res.send(oo);
        console.log("POST hogaaya");
    }
    catch(e){
        console.log(e);
    }
})

module.exports = router;