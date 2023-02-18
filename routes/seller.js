const express = require("express");
const router = express.Router();
const { addSell } = require("../controllers/seller/sell");
router.post("/sell", addSell);

module.exports = router;