import Router from "koa-router";
import BlogCustom from "../models/blogCustom";
import { Success, Fail } from "../utils/exception";
import jwtAuth from "../middlewares/tokenAuth";

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

export default router;
