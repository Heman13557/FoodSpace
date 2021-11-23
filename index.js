const express = require('express');
const mongoose = require('mongoose');

require("dotenv/config")

mongoose.connect(process.env.DB_cred,{ useNewUrlParser : true},()=>{
    console.log("connected")
})

const app = express();


app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Server Working!");

});

app.listen(4000, ()=>{
    console.log("Server started at port 4000");
});