const Comment = require("../model/Comment.js");
const dp = require("../models");
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

exports.comments = (req, res) => {
  // const list = Comment.commentInfos();
  // res.render("comments", { commentInfos: list });
  Comment.getCommentInfos((result) => {
    // console.log("Cmain.js: ", result);
    res.render("comments", { commentInfos: result });
  });
};

exports.comment = (req, res) => {
  // const commentId = Number(req.params.id);
  // const comments = Comment.commentInfos();

  // if (isNaN(commentId) || commentId < 1 || commentId > comments.length) {
  //   return res.render("404");
  // }

  // res.render("comment", { commentInfo: comments[commentId - 1] });
  const id = req.params.id;
  Comment.getCommentInfo(id, (commentInfo) => {
    // 날짜 포맷 변환
    const date = new Date(commentInfo.date);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    commentInfo.date = `${yyyy}-${mm}-${dd}`;

    res.render("comment", { commentInfo });
  });
};

exports.insertcomment = (req, res) => {
  const { userid, comment } = req.body;

  Comment.insertComment(userid, comment, () => {
    res.send({ result: true });
  });
};

exports.deletecomment = (req, res) => {
  const id = req.body.id;

  Comment.deleteComment(id, () => {
    res.send({ result: true });
  });
};
