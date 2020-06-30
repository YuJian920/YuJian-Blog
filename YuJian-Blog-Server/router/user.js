const express = require("express");
const Result = require("../models/Result");
const { login } = require("../service/user");

const router = express.Router();

router.post("/login", (req, res, next) => {
  console.log("Body", req.body);
  const username = req.body.username;
  const password = req.body.password;

  login(username, password).then((user) => {
    if (!user || user.length === 0) {
      new Result("登录失败").fail(res);
    } else {
      new Result("登录成功").success(res);
    }
  });
  // res.json({
  //   code: 0,
  //   msg: "登录成功"
  // })
});

module.exports = router;
