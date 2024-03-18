const { apiResponse } = require("../utils/apiResponse");
const ItemModel = require("../models/item.model");


const createItem = async (req, res) => {
    const item = await ItemModel.create(req.body);

    return apiResponse({
        res,
        data: item,
        message: "Item add successfull"
    });
}


const deleteItem = async (req, res) => {
    const item = await ItemModel.findByIdAndDelete(req.params.id);

    if (!item) {
        return apiResponse({
            res,
            data: item,
            message: "No item found for the given (id)",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: item
    });
}


const updateItem = async (req, res) => {
    const item = await ItemModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!item) {
        return apiResponse({
            res,
            data: item,
            message: "No item found for the given (id)",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: item
    });
}


const getItem = async (req, res) => {
    const item = await ItemModel.findById(req.params.id);

    if (!item) {
        return apiResponse({
            res,
            data: item,
            message: "No item found for the given (id)",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: item,
        message: "OK"
    });
}


const getAllItems = async (req, res) => {
    const items = await ItemModel.find();

    if (!items || items.length === 0) {
        return apiResponse({
            res,
            data: items,
            message: "No items found",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: items,
        message: "OK"
    });
}


module.exports = {
    createItem,
    deleteItem,
    updateItem,
    getItem,
    getAllItems
};