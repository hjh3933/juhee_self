const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const serverPrefix = "/api-server";
const http = require("http");
const socketIO = require("socket.io");
const server = http.createServer(app);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
