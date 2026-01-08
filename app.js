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
// 미들웨어(정적파일)설정
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("hello express");
});
app.get("/test", function (req, res) {
  res.render("test");
});
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
