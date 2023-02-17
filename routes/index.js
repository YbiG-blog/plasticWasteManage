const express = require("express");
const router = express.Router();
// const sellerControllers = require("../routes/seller");
// const venderControllers = require("../routes/vender");
const { registerUser } = require("../controllers/register");
const { login } = require("../controllers/login");
// const adminControllers = require("../routes/admin");
// const routeInfo = require("../helpers/routeInfo");

// router.use("admin", adminControllers);
// router.use("/seller", sellerControllers);
router.post("/register", registerUser);
router.post("/login", login);

module.exports = router;
