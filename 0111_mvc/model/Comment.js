const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "juhee",
  password: "1234",
  database: "juhee_self",
});

// 실제 DB 연결
exports.getCommentInfos = (cb) => {
  conn.query(`select * from commentInfos`, (err, rows) => {
    if (err) {
      throw err;
    }
    // rows: 튜플 목록, cb: 콜백함수
    // console.log("Comment.js: ", rows);
    cb(rows);
  });
};

exports.getCommentInfo = (id, cb) => {
  const sql = `SELECT * FROM commentInfos WHERE id = ?`;
  conn.query(sql, [id], (err, result) => {
    if (err) {
      throw err;
    }
    cb(result[0]);
  });
};

exports.insertComment = (userid, comment, cb) => {
  const sql = `
    INSERT INTO commentInfos (userid, date, comment)
    VALUES (?, NOW(), ?)
  `;

  conn.query(sql, [userid, comment], (err, result) => {
    if (err) {
      throw err;
    }
    cb(result);
  });
};

exports.deleteComment = (id, cb) => {
  const sql = `DELETE FROM commentInfos WHERE id = ?`;
  conn.query(sql, [id], (err, result) => {
    if (err) {
      throw err;
    }
    cb(result);
  });
};

// 임시 DB 목록
// exports.commentInfos = () => {
//   return [
//     {
//       id: 1,
//       userid: "helloworld",
//       date: "2022-10-31",
//       comment: "안녕하세요~~",
//     },
//     {
//       id: 2,
//       userid: "happy",
//       date: "2022-11-01",
//       comment: "너무 행복해ㅎㅎ",
//     },
//     {
//       id: 3,
//       userid: "lucky",
//       date: "2023-01-27",
//       comment: "운이 좋았죠",
//     },
//     {
//       id: 4,
//       userid: "bestfriends",
//       date: "2023-01-07",
//       comment: "제 친구입니다",
//     },
//   ];
// };
