const express = require("express");
const boom = require("boom");
const jwtAuth = require("./jwt");

const Result = require("../models/Result");
const userRouter = require("./user");

const router = express.Router();

router.use(jwtAuth);

router.get("/", (req, res) => {
  res.send("Welcome Server");
});

router.use("/user", userRouter);

router.use((req, res, next) => {
  next(boom.notFound("API不存在"));
});

// 自定义错误
router.use((err, req, res, next) => {
  console.log(err);
  // UnauthorizedError错误，Token验证失败
  if (err && err.name === "UnauthorizedError") {
    const { status = 401, message } = err;
    new Result(null, "Token验证失败", {
      error: status,
      errorMsg: message,
      // 修改状态码
    }).jwtError(res.status(status));
  } else {
    const msg = (err && err.message) || "系统错误";
    const statusCode = (err.output && err.output.statusCode) || 500;
    const errorMsg =
      (err.output && err.output.payload && err.output.payload.error) ||
      err.message;
    new Result(null, msg, {
      error: statusCode,
      errorMsg,
    }).fail(res.status(statusCode));
  }
});

module.exports = router;
