const express = require("express");
const router = express.Router();
const sellerControllers = require("../routes/seller");
const venderControllers = require("./vendor");
const getAllControllers = require("./getAll");
const { registerUser } = require("../controllers/register");
const { loginUser } = require("../controllers/login");
const { JWTMiddleware } = require("../helper/jwt");
const { getLocationResult } = require("../controllers/seller/location");
// const adminControllers = require("../routes/admin");
// const routeInfo = require("../helpers/routeInfo");

// router.use("admin", adminControllers);
router.use("/seller", JWTMiddleware, sellerControllers);
router.use("/vender", JWTMiddleware, venderControllers);
router.use("/data", getAllControllers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/getLocationResult", getLocationResult);

module.exports = router;
