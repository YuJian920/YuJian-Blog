const Sequelize = require("sequelize");
const {
  database: { dbName, host, port, user, password },
} = require("../utils/config");

const sequelize = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host,
  port,
  logging: true,
  timezone: "+08:00",
  define: {
    timestamps: true,
    paranoid: true,
    // underscored: true,
    freezeTableName: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    console.log("数据库连接错误", err);
  });

// 根据 model自动创建表
sequelize
  .sync()
  .then(() => {
    console.log("初始化数据库成功");
  })
  .catch((err) => {
    console.log("初始化数据库错误", err);
  });

// sequelize.sync({
//   force: true,
// });

module.exports = sequelize;
