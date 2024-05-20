const express = require('express')
const router = express.Router()
const UserM = require('../Model/User')


router.post('/',async (req,res)=>{
    try{
        const data = req.body
        const dataObj = new UserM(data)
        const saveDB =await dataObj.save()
        res.status(201).json(saveDB)
        console.log("Username and password save hogae")
    }
    catch(e){
        console.log(e);
    }
    
})

module.exports = router;