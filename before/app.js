// express 사용해보기
import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = 8080;
// path 따로 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// multer(파일설정)
// const upload = multer({
//   dest: "uploads/",
// });
// multer 상세설정(destination경로filename이름limits제한)
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// ejs 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// 미들웨어설정(정적파일)
app.use(express.static(path.join(__dirname, "public")));
// 미들웨어설정(body-parser)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// router 설정
const indexRouter = require("./routes");
app.use("/", indexRouter);

app.get("/", function (req, res) {
  // res.send("hello express");
  res.render("0110");
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
app.post("/post_axios", function (req, res) {
  console.log(req.body);
  res.send({ result: "success" });
});

// 0110 파일 업로드
app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.send("Upload!!");
});
app.post("/upload/array", uploadDetail.array("userfiles"), function (req, res) {
  // [{}{}] 배열안에 객체 있는 형태로 전달됨
  console.log(req.files);
  console.log(req.body);
  res.send("Upload Multiple Files!!");
});
// fields(): 여러파일을 업로드 할 때 하나의 요청이 아닌 여러개의 요청이 들어올때 사용
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  function (req, res) {
    console.log(req.file);
    console.log(req.body);
    res.send(req.file);
  }
);
