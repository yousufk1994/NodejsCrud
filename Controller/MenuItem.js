const express = require('express');
const router = express.Router();
const MenuSchema = require('../Model/MenuS');
const MenuS = require('../Model/MenuS');

router.get('/',async (req,res)=>{
    const retrieve = await MenuSchema.find();
    res.send(retrieve);
    console.log("Get hogaya...!");
})

router.get('/:taste',async (req,res)=>{
    try{
        const paramD = req.params.taste;
        const findDb = await MenuSchema.find({taste:paramD});
        res.send(findDb)
        console.log("ID se Search hogaya");
    }
    catch(e){
        console.log(e);
    }
   

})

router.post('/',async (req,res)=>{
    const data = req.body
    const dataObj = new MenuSchema(data)
    const retrieve = await dataObj.save()
    res.send(retrieve);
    console.log("POST hogaya...!");
})

router.put('/:id',async (req,res)=>{
    const searchByID = req.params.id
    const ClientData = req.body
    try{
        const response = await MenuSchema.findByIdAndUpdate(searchByID,ClientData,{
            new: true,
            runValidators: true
        })
        if(!response) res.status(404).json({error: 'Data not found....!!!'})
        res.send(response);
        console.log('Let see');
    }catch(e){
        console.error('Error occurred:', e.message);
        res.status(500).json({ error: 'Internal server error' });
    }

})

router.delete('/:id',async (req,res)=>{
    const getId = req.params.id
    try{
        const response = await MenuS.findByIdAndDelete(getId)
        res.send(response)
        console.log('DELETE hogaya')
    if(!response) res.status(404).json({error: 'Data not found....!!!'})    
    }catch(e){
        console.error('Error occurred:', e.message);
        res.status(500).json({ error: 'Internal server error' });
    }

})

module.exports = router;
