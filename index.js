const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Server Working!");

});

app.listen(4000, ()=>{
    console.log("Server started at port 4000");
});