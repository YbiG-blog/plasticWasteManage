const express = require("express");
const router = express.Router();
const { addSell } = require("../controllers/seller/sell");
const { addLocation } = require("../controllers/seller/location");
router.post("/sell", addSell);
router.post("/location", addLocation);

module.exports = router;