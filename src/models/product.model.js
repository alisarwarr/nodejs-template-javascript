const mongoose = require("mongoose");
const { MODEL_NAMES } = require("../constants");


const schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});


const ProductModel = mongoose.model(MODEL_NAMES.PRODUCTS, schema);
module.exports = ProductModel;