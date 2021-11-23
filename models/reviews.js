const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const ReviewSchema = Schema({
    R_Name : {
        type : String,
        required : true
    },
    R_view : {
        type : String,
        required : true
    },
    R_date : {
        type : Date,
        default : Date.now
    }
});

// const Dish = model("Menu", dishSchema);
const Review = model("Reviews",ReviewSchema);

module.exports = Review;