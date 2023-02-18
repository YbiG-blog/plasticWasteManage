const express = require("express");
const router = express.Router();
const {  getSellDataByParams, getSellData } = require("../controllers/getAll/getSellData");
router.get("/getSellDataByParams/:wasteType", getSellDataByParams);
router.get("/getSellData", getSellData);
module.exports = router;