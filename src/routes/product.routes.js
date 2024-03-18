const express = require("express");
const router = express.Router();


const { createProduct, deleteProduct, updateProduct, getProduct, getAllProducts } = require("../controllers/product.controller");


router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.get("/:id", getProduct);
router.get("/", getAllProducts);


module.exports = router;