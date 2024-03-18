const mongoose = require("mongoose");
const { MODEL_NAMES } = require("../constants");


const schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});


const ItemModel = mongoose.model(MODEL_NAMES.ITEMS, schema);
module.exports = ItemModel;