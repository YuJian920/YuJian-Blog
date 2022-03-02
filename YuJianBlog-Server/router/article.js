const Router = require("koa-router");
const Sequelize = require("sequelize");
const sequelize = require('../db/index')

const router = new Router({ prefix: "/api/article" });

router.get("/list", async (ctx, next) => {
  ctx.body = {
    code: 0,
    msg: "获取成功",
    data: {},
  };
  const UserModel = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true, // 主键
        autoIncrement: true, // 自动递增
      },
      username: Sequelize.STRING(100),
      password: Sequelize.STRING(100),
      createdAt: Sequelize.BIGINT,
      updatedAt: Sequelize.BIGINT,
    },
    {
      timestamps: false,
    }
  );

  const now = Date.now();
  const user = await UserModel.create({
    username: "小张",
    password: "root",
    createAt: now,
    updateAt: now,
  });
  console.log("创建：" + JSON.stringify(user));
});

module.exports = router;
