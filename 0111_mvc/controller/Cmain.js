const Comment = require("../model/Comment");

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  const list = Comment.commentInfos();
  res.render("comments", { commentInfos: list });
};

exports.comment = (req, res) => {
  const commentId = Number(req.params.id);
  const comments = Comment.commentInfos();

  if (isNaN(commentId) || commentId < 1 || commentId > comments.length) {
    return res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
