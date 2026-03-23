//model
const { where } = require("sequelize");
const model = require("../models");

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
