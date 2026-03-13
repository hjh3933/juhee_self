const express = require("express");
const router = express.Router();
//multer
const dotenv = require("dotenv");
const multer = require("multer");
dotenv.config();

// controller
const Cquiz = require("../controller/Cquiz");

// route
router.get("/category", Cquiz.getCategory);
router.get("/quizzes/:category", Cquiz.getQuizzes);

module.exports = router;
