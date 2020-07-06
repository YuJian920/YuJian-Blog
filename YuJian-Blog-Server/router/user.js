const express = require("express");
const Result = require("../models/Result");
const boom = require("boom");
const { login, findUser } = require("../service/user");
const { md5, decoded } = require("../utils");
const { PWD_SALT, PRIVATE_KEY, JWT_EXPIRED } = require("../utils/constant");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post(
  "/login",
  // validationResult表单验证
  [
    body("username").isString().withMessage("用户名必须为字符"),
    body("password").isString().withMessage("密码必须为字符"),
  ],
  (req, res, next) => {
    // 提取validationResult验证内容
    const err = validationResult(req);
    if (!err.isEmpty()) {
      // 存在验证异常
      const [{ msg }] = err.errors;
      // console.log("validationResult", msg)
      next(boom.badRequest(msg));
    } else {
      // 验证通过
      console.log("Body", req.body);
      let { username, password } = req.body;
      // MD5+SALT加密
      password = md5(`${password}${PWD_SALT}`);

      // 调用login函数执行登录操作
      login(username, password).then((user) => {
        if (!user || user.length === 0) {
          new Result("登录失败").fail(res);
        } else {
          // 生成Token
          const token = jwt.sign({ username }, PRIVATE_KEY, {
            expiresIn: JWT_EXPIRED,
          });
          // 这里的token是一个对象，需要解构成字符串
          new Result({ token }, "登录成功").success(res);
        }
      });
      // res.json({
      //   code: 0,
      //   msg: "登录成功"
      // })
    }
  }
);

router.get("/info", (req, res) => {
  let decode = decoded(req);
  console.log(decode);
  findUser("admin").then((info) => {
    console.log("admin", info);
    if (info) {
      info.roles = [info.role];
      new Result(info, "用户信息查询成功").success(res);
    } else {
      new Result("用户信息查询失败").fail(res);
    }
  });
});

module.exports = router;
