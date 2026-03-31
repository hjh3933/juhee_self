const express = require("express");
const router = express.Router();
//multer
const dotenv = require("dotenv");
const multer = require("multer");
dotenv.config();

// controller
const Cquiz = require("../controller/Cquiz");
const Cuser = require("../controller/Cuser");

// route
router.get("/category", Cquiz.getCategory);
router.get("/quizzes/:category", Cquiz.getQuizzes);
router.get("/randomQuizzes/:n", Cquiz.randomQuizzes);
router.post("/join", Cuser.joinUser);
router.post("/login", Cuser.loginUser);

module.exports = router;
