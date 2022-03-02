const Sequelize = require("sequelize");
const {
  database: { dbName, host, port, user, password },
} = require("../utils/config");

const sequelize = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host,
  port,
  define: {
    timestamps: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database", err);
  });

// 根据 model自动创建表
sequelize
  .sync()
  .then(() => {
    console.log("init db ok");
  })
  .catch((err) => {
    console.log("init db error", err);
  });

module.exports = sequelize
