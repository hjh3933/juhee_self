const express = require("express");
const indexRouter = require("./routes");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8080;

// multer 설정
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

app.set("view engine", "ejs");

// static 경로 설정
app.use("/views", express.static(path.join(__dirname, "views")));
app.use("/static", express.static(path.join(__dirname, "static")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);

// 404
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
