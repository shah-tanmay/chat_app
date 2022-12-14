const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const socketManage = require("./socketManage")(io);
const PORT = process.env.PORT || 80;
const path = require("path");
const axios = require("axios");
const { response } = require("express");

io.on("connection", socketManage);
// In dev mode just hide hide app.uss(... ) below
// app.use(express.static(path.join(__dirname, "../public/index.html")));
server.listen(PORT, () => console.log("App was start at port : " + PORT));
