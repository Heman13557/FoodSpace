const mongoose = require('mongoose');
const dishSchema = require('./dishModel');
const { model, Schema } = mongoose;

const menuSchema = Schema({
    menuName: String,
    dishes: [dishSchema]
});

const Menu = model("Menu", menuSchema);

module.exports = Menu;