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

const newMenu = new Menu({
    menuName: "Special",
    dishes: {
        dishName: "Roasted veggies",
        description: "Serves 8-10",
        calories: 400,
        dishImage: "https://i1.wp.com/www.nourishedtheblog.com/wp-content/uploads/2016/03/Balsamic-Honey-Roasted-Vegetables-1.jpg?resize=1543,2160&ssl=1"
    }
});

const newReview = new Review({
    R_Name : "Hemant",
    R_view : "Very Delicious"
});


app.get("/", (req,res)=>{
    Menu.find({},(err,result)=>{
        if(result.length === 0){
            Menu.insertMany(newMenu, (err)=>{
                if(err) console.log(err);
                else    console.log("Inserted Successfully");
            });
        }
        else if(result.length){
            console.log(result)
        }
    });
    Review.find({},(err,result)=>{
        if(result.length === 0){
            Review.insertMany(newReview,(err)=>{
        if(err) console.log(err);
        else console.log("Review Submitted");
    });
}
else if(result.length){
    console.log(result)
}
});
    res.send("Created DB!");

});

async function submit_review(obj){

}

app.post("/submit_review",(req,res)=>{
    const {rev,name} = req.body;
    const newReviewo = new Review({
        R_Name : name,
        R_view : rev
    })

try{
    Review.insertMany(newReviewo, (err)=>{
       if(err) console.log(err);
       else    console.log("Inserted Successfully");
   });
   console.log("Data Saved :",newReviewo);
   res.json(newReviewo)
}
catch(e){
   console.log(e.message);
}


})

app.listen(4000, ()=>{
    console.log("Server started at port 4000");
});