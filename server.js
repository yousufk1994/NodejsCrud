const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
const dumb = require('./dumb');
const dC = require('./dbConnection');


app.get('/',async (req,res)=>{
    try{
        const da = await dumb.find();
        res.send(da);
    }
    catch(er){
        console.log(er);
    }
    
});

app.post('/',async (req,res)=>{
    try{
        const da = req.body;
        const obj = new dumb(da);
        const sD =await obj.save();
        res.send(sD);
       
    }
    catch(er){
        console.log(er);
    }
    
});

app.listen(4000,()=>{ console.log("SERVER HAS BEEN STARTED")})