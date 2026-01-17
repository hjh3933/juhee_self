const express = require("express");
const controller = require("../controller/Cmain");

const router = express.Router();

router.get("/", controller.main);
router.get("/loginpage", controller.loginpage);
router.get("/joinpage", controller.joinpage);
router.post("/login", controller.login);

module.exports = router;
