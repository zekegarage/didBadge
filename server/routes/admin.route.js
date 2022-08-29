const express = require("express");
const router = express.Router();

const controller = require("../controllers/admin.controller");

router.get("/", controller.admin_get);
router.get("/badge/:test_address", controller.admin_badge_get);
router.post("/badge/:test_address", controller.admin_badge_post);

module.exports = router;
