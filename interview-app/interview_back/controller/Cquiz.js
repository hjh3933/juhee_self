//model
const { where } = require("sequelize");
const model = require("../models");
const jwt = require("jsonwebtoken");

exports.getCategory = async (req, res) => {
  try {
    const result = await model.Quizzes.findAll({
      attributes: [
        "category",
        "type",
        [model.Sequelize.fn("COUNT", model.Sequelize.col("id")), "count"],
      ],
      group: ["category", "type"],
    });
    res.status(200).send({ categories: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    // 🔥 토큰 없을 때
    if (!authHeader) {
      return res.status(401).send("토큰 없음");
    }

    const token = authHeader.split(" ")[1];

    // 토큰 검증
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).send("토큰 만료 또는 유효하지 않음");
    }

    // 인증 통과
    const { category } = req.params;

    const result = await model.Quizzes.findAll({
      where: { category },
    });

    res.status(200).send({ quizzes: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};
exports.randomQuizzes = async (req, res) => {
  try {
    const { n } = req.params;
    const result = await model.Quizzes.findAll({
      order: [[model.Sequelize.fn("RAND")]],
      limit: parseInt(n),
    });
    res.status(200).send({ quizzes: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};
