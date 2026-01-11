const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "juhee_self",
});

// 임시 DB 목록
exports.commentInfos = () => {
  return [
    {
      id: 1,
      userid: "helloworld",
      date: "2022-10-31",
      comment: "안녕하세요~~",
    },
    {
      id: 2,
      userid: "happy",
      date: "2022-11-01",
      comment: "너무 행복해ㅎㅎ",
    },
    {
      id: 3,
      userid: "lucky",
      date: "2023-01-27",
      comment: "운이 좋았죠",
    },
    {
      id: 4,
      userid: "bestfriends",
      date: "2023-01-7",
      comment: "제 친구입니다",
    },
  ];
};
