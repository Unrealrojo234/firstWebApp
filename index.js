const express = require('express');
const app = express();
const mongoose = require('mongoose');

//ADDING A MIDDLEWARE TO BE ABLE TO PASS JSON OBJECTS 
app.use(express.json())

//IMPORTING MODELS
const Info = require('./models/info.model');

//GETTING DATABASE CONNECTION STRING
require('dotenv').config();
const dataBase = process.env.MONGODB_API;


app.post('/api/infos',async(req,res)=>{{
    try {
        const info = await Info.create();
        res.status(200).json(info);
        res.send(
            console.log(info)
        )
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}})



//SERVING AN HTML FILE TO A SERVER: localhost3000/html
app.use('/html',(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
})


//CONNECTING TO PORT AND TO DATABASE
app.listen(3000,()=>{
    mongoose.connect(dataBase)
        .then(()=>{
            console.log("Successfully connected to the database")
        })
        .catch(()=>{
            console.log("Connection failed")
        })
    console.log("Server is running on port 3000");

})
