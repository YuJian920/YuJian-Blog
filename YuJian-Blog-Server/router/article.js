const express = require("express");
const {
  GetArticleList,
  AddArticle,
  DeleteArticle,
  UpdataArticle,
} = require("../service/article");
const Result = require("../models/Result");

const router = express.Router();

router.get("/list", async (req, res) => {
  await GetArticleList().then((ArticleData) => {
    if (ArticleData) {
      new Result(ArticleData, "文章信息查询成功").success(res);
    } else {
      new Result("文章信息查询失败").fail(res);
    }
  });
});

router.post("/create", async (req, res) => {
  if (req.body.title === "" || req.body.content === "") {
    new Result("文章内容不能为空").fail(res);
  } else {
    await AddArticle(req.body.title, req.body.content).then((response) => {
      if (response) {
        new Result("文章插入成功").success(res);
      } else {
        new Result("文章插入失败").fail(res);
      }
    });
  }
});

router.delete("/list/:id", async (req, res) => {
  await DeleteArticle(req.params.id).then(() => {
    new Result("文章删除成功").success(res);
  });
});

router.put("/list/:id", async (req, res) => {
  await UpdataArticle(req.params.id, req.body.title, req.body.content).then(
    (response) => {
      if (!response.errno) {
        new Result("文章更新成功").success(res);
      } else {
        new Result("文章更新失败").fail(res);
      }
    }
  );
});

module.exports = router;
