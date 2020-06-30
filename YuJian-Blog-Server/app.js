const express = require("express");
// 路由模块化
const router = require("./router");
// 解析POST请求
const bodyParser = require("body-parser");
// 跨域请求
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);

const server = app.listen(5000, () => {
  const { address, port } = server.address();
  console.log("Http Server is running on http://%s:%s", address, port);
});
