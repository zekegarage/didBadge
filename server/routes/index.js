const express = require("express");
const router = express.Router();

const main = require("./main.route");
const user = require("./user.route");
const admin = require("./admin.route");

router.use("/", main);
router.use("/user",user);
router.use("/admin", admin);

module.exports = router;