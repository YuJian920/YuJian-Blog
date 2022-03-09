const Router = require("koa-router");
const User = require("../models/user");
const { Success } = require("../utils/exception");
const { generateToken } = require("../utils");

const router = new Router({ prefix: "/api/user" });

router.post("/register", async (ctx) => {
  const { body } = ctx.request;
  await User.create({ username: body.username, password: body.password });
  throw new Success("注册成功");
});

router.post("/login", async (ctx) => {
  const { body } = ctx.request;
  const userInfo = await User.getUserData(body.username, body.password);
  throw new Success("登录成功", { token: generateToken(userInfo.id) });
});

module.exports = router;
