const jwt = require("jsonwebtoken");
const JWT_SECRET = "my-secret-key"; // 임시 추후 .env
const bcrypt = require("bcrypt");
const dp = require("../models");
const { where } = require("sequelize");
const Users = dp.Users;

exports.main = async (req, res) => {
  // 회원목록 sequelize
  try {
    const users = await Users.findAll();
    res.render("index", { users });
  } catch (error) {
    console.error(error);
    res.status(500).send("DB error");
  }
};

exports.loginpage = (req, res) => {
  res.render("login");
};
exports.joinpage = (req, res) => {
  res.render("join");
};

exports.login = async (req, res) => {
  const { userid, password } = req.body;
  try {
    // userid에 해당하는 user 튜플한개를 가져옴
    const user = await Users.findOne({
      where: { userid },
    });

    if (!user) {
      return res.status(401).send("존재하지 않는 아이디");
    }

    // if (user.password !== password) {
    //   return res.status(401).send("비밀번호 틀림");
    // }

    // bcrypt비교
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ ok: false, message: "비밀번호가 틀렸습니다" });
    }
    // jwt 생성
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET || "secretKey",
      { expiresIn: "1h" },
    );
    res.json({
      message: "로그인 성공",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("서버 에러");
  }
};

exports.join = async (req, res) => {
  const { userid, password, username } = req.body;
  try {
    // 암호화
    const hashedPw = await bcrypt.hash(password, 10);

    await Users.create({
      userid,
      // 암호화된 비밀번호 저장
      password: hashedPw,
      username,
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, message: "회원가입 실패" });
  }
};
