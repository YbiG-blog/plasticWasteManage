const express = require("express");
const router = express.Router();
const {  getSellDataByParams, getSellData, WasteTypeTotalData } = require("../controllers/getAll/getSellData");

router.get("/getSellDataByParams/:wasteType", getSellDataByParams);
router.get("/getSellData", getSellData);
router.get("/WasteTypeTotalData", WasteTypeTotalData);
module.exports = router;