const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')
const Menu = require("./models/menuModel");
const Review = require("./models/reviews");

const app = express();

app.use(express.json())

const { model, Schema } = mongoose;

app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.DB_cred,{ useNewUrlParser: true });

app.get("/api/menu", (req,res)=>{
    try{
        console.log(Menu.find({},(err,result)=>{
            if(result.length){
            res.json(result)
        }
        else console.log("Error")
    }));
}
    catch(e){
        console.log(e.message);
    }
    });

    app.get("/api/reviews", (req,res)=>{
    try{
        Review.find({},(err,result)=>{
            if(result.length){
            res.json(result)
        }
        else console.log("Error")
    });
}
    catch(e){
        console.log(e.message);
    }
    });

app.get("/",(req,res)=>{
    res.send("Created DB!");
});

async function submit_review(obj){
    try{
       await obj.insertMany(newReviewo, (err)=>{
           if(err) console.log(err);
           else    console.log("Inserted Successfully");
       });
       console.log("Data Saved :",newReviewo);
    }
    catch(e){
       console.log(e.message);
    }

}

app.post("/submit_review",(req,res)=>{
    const {rev,name} = req.body;
    const newReviewo = new Review({
        R_Name : name,
        R_view : rev
    })
    submit_review(newReviewo);

})




app.listen(4000, ()=>{
    console.log("Server started at port 4000");
});