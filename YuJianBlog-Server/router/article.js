const Router = require("koa-router");
const Article = require("../models/article");
const { Success, Fail } = require("../utils/exception");
const jwtAuth = require("../middlewares/tokenAuth");

const router = new Router({ prefix: "/api/article" });

router.post("/add", jwtAuth, async (ctx) => {
  const { body } = ctx.request;
  const createData = {
    title: body.title,
    description: body.description,
    cover_url: body.cover_url,
    content: body.content,
    author: body.author,
  };
  await Article.create(createData);
  throw new Success("创建成功");
});

router.delete("/delete", jwtAuth, async (ctx) => {
  const { body } = ctx.request;
  await Article.destroy({ where: { id: body.articleId } });
  throw new Success("删除成功");
});

router.put("/update", jwtAuth, async (ctx) => {
  const { body } = ctx.request;
  const updateData = {
    title: body.title,
    description: body.description,
    cover_url: body.cover_url,
    content: body.content,
    author: body.author,
  };
  if (!body?.articleId) throw new Fail("文章ID无效");
  await Article.update(updateData, { where: { id: body.articleId } });
  throw new Success("修改成功");
});

router.get("/", async (ctx) => {
  const articleList = await Article.findArticle();
  throw new Success("文章获取成功", articleList);
});

router.get("/:id", async (ctx) => {
  const articleId = ctx.path.split("/")[3];
  const articleData = await Article.findArticleById(articleId);
  throw new Success("文章获取成功", articleData);
});

module.exports = router;