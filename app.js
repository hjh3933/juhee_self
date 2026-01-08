// express 사용해보기
import express from "express";
const app = express();
const PORT = 8080;

// ejs 설정

app.get("/", function (req, res) {
  res.send("hello express");
});
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
