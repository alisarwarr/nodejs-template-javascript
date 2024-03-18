const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.json({
        status: true,
        version: "v1.0",
        message: "Backend API"
    });
});


const itemRoutes = require("../routes/item.routes");
const productRoutes = require("../routes/product.routes");


router.use("/items", itemRoutes);
router.use("/products", productRoutes);


module.exports = router;