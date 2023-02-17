const express = require("express");
const router = express.Router();
const { addPurchase } = require("../controllers/vender/purchase");

router.post("purchase", addPurchase);

module.exports = router;