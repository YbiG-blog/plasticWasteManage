const express = require("express");
const router = express.Router();
const sellerControllers = require("../routes/seller");
const venderControllers = require("../routes/vender");
const { registerUser } = require("../controllers/register");
const { loginUser } = require("../controllers/login");
const { JWTMiddleware } = require("../helper/jwt");
// const adminControllers = require("../routes/admin");
// const routeInfo = require("../helpers/routeInfo");

// router.use("admin", adminControllers);
router.use("/seller", JWTMiddleware, sellerControllers);
router.use("/vender", JWTMiddleware, venderControllers);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
