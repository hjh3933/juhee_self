const model = require("../models");

exports.joinUser = async (req, res) => {
  try {
    const { userid, userpw, name } = req.body;
    const result = await model.Users.create({
      userid,
      userpw,
      name,
    });
    res.status(200).send({ result });
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};
