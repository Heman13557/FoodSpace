const express = require('express');
const mongoose  = require('mongoose');
const { model, Schema } = mongoose;
const Menu = require("./models/menuModel");
const Review = require("./models/reviews")
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/RestaurantDB`,{ useNewUrlParser: true });

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

app.listen(4000, ()=>{
    console.log("Server started at port 4000");
});