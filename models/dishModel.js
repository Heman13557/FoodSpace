const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const dishSchema = Schema({
    dishName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    calories: Number,
    dishImage: {
        type: String,
        required: true
    }
});

// const Dish = model("Menu", dishSchema);

module.exports = dishSchema;