const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socketIO = require("socket.io");

const io = socketIO(server);
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

// 소켓서버측 on 안에 코드를 작성한다
io.on("connection", (socket) => {
  console.log("socket id:", socket.id);
  // 이벤트 받기 on(이벤트 이름, 데이터를받음)
});

// 서버 열기
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
