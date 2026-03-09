require("dotenv").config();
const express = require("express");
const session = require("express-session");
const { sequelize } = require("./models");
const cors = require("cors");
const app = express();
const indexRouter = require("./routes");

const PORT = process.env.PORT;
const serverPrefix = "/api-server";
const http = require("http");
const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 36000000,
      secure: false,
    },
  }),
);
app.use(serverPrefix, indexRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
