const { where } = require("sequelize");
const model = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.joinUser = async (req, res) => {
  try {
    const { userid, userpw, name } = req.body;
    // 암호화
    const hashedPw = await bcrypt.hash(userpw, 10);
    const result = await model.Users.create({
      userid,
      userpw: hashedPw,
      name,
    });
    res.status(200).send({ result });
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};
exports.loginUser = async (req, res) => {
  try {
    const { userid, userpw } = req.body;
    const user = await model.Users.findOne({
      where: { userid },
    });

    if (!user) return res.send("아이디 없음");

    // 비밀번호 확인
    const isMatch = await bcrypt.compare(userpw, user.userpw);
    if (!isMatch) return res.send("비밀번호 틀림");
    // 로그인 성공 시

    const token = jwt.sign({ userid: user.userid }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).send({ token });
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};
