const Router = require("koa-router");

const router = new Router({ prefix: "/api/article" });

router.get("/list", async (ctx, next) => {
  ctx.body = {
    code: 0,
    msg: "获取成功",
    data: {},
  };
});

module.exports = router;
