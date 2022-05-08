const Router = require("koa-router");
const BlogCustom = require("../models/BlogCustom");
const { Success, Fail } = require("../utils/exception");
const jwtAuth = require("../middlewares/tokenAuth");

const router = new Router({ prefix: "/api/blogCustom" });

router.get("/", async () => {
  const customData = await BlogCustom.findCustom();
  throw new Success("获取成功", customData);
});

router.post("/", jwtAuth, async (ctx) => {
  const { body } = ctx.request;

  const updateData = { slogan: body.slogan, footer: body.footer };
  if (!body?.id) throw new Fail("ID无效");
  await BlogCustom.update(updateData, { where: { id: body.id } });
  throw new Success("修改成功");
});

module.exports = router;
