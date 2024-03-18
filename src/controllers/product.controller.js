const { apiResponse } = require("../utils/apiResponse");
const ProductModel = require("../models/product.model");


const createProduct = async (req, res) => {
    const product = await ProductModel.create(req.body);

    return apiResponse({
        res,
        data: product,
        message: "Product add successfull"
    });
}


const deleteProduct = async (req, res) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id);

    if (!product) {
        return apiResponse({
            res,
            data: product,
            message: "No product found for the given (id)",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: product
    });
}


const updateProduct = async (req, res) => {
    const product = await ProductModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!product) {
        return apiResponse({
            res,
            data: product,
            message: "No product found for the given (id)",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: product
    });
}


const getProduct = async (req, res) => {
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
        return apiResponse({
            res,
            data: product,
            message: "No product found for the given (id)",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: product,
        message: "OK"
    });
}


const getAllProducts = async (req, res) => {
    const products = await ProductModel.find();

    if (!products || products.length === 0) {
        return apiResponse({
            res,
            data: products,
            message: "No products found",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: products,
        message: "OK"
    });
}


module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    getProduct,
    getAllProducts
};