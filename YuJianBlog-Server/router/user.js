const Router = require("koa-router");
const User = require("../models/user");
const { Success, Fail } = require("../utils/exception");
const { generateToken } = require("../utils");
const jwtAuth = require("../middlewares/tokenAuth");

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

router.get("/list", jwtAuth, async () => {
  const userList = await User.getUserList();
  throw new Success("获取成功", userList);
});

router.post("/verify", jwtAuth, async (ctx) => {
  throw new Fail("验证成功");
});

module.exports = router;
