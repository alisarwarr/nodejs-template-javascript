const express = require("express");
const router = express.Router();


const { createItem, deleteItem, updateItem, getItem, getAllitems } = require("../controllers/item.controller");


router.post("/", createItem);
router.delete("/:id", deleteItem);
router.put("/:id", updateItem);
router.get("/:id", getItem);
router.get("/", getAllitems);


module.exports = router;