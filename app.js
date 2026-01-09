// express 사용해보기
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = 8080;
// path 따로 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ejs 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// 미들웨어설정(정적파일, 데이터 처리)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  // res.send("hello express");
  res.render("0109");
});
app.get("/test", function (req, res) {
  res.render("test");
});
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});

// 0109
app.get("/getForm", function (req, res) {
  console.log(req.query);
  // res.send("get 요청 성공!");
  res.render("result", {
    title: "GET 요청 결과 확인하기",
    userInfo: req.query,
  });
});
app.post("/postForm", function (req, res) {
  console.log(req.body);
  // res.send("post 요청 성공!");
  res.render("result", {
    title: "POST 요청 결과 확인하기",
    userInfo: req.body,
  });
});
