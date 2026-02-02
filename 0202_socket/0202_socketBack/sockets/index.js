const ws = require("ws");
const PORT = 8080;

const wss = new ws.Server({ port: PORT });

wss.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다");
  socket.on("message", (message) => {
    console.log(`클라이언트로부터 받은 메시지: ${message}`);
    socket.send(`서버에서 받은 메시지: ${message}`);
  });
  socket.on("error", (error) => {
    console.error("오류가 발생했습니다:", error);
  });
  socket.on("close", () => {
    console.log("클라이언트와 연결이 종료됐습니다");
  });
});
