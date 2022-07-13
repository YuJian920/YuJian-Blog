import { Sequelize } from "sequelize";
import { database } from "./config";

const sequelize = new Sequelize(
  database.dbName,
  database.user,
  database.password,
  {
    dialect: "mysql",
    host: database.host,
    port: database.port,
    logging: true,
    timezone: "+08:00",
    define: {
      timestamps: true,
      paranoid: true,
      // underscored: true,
      freezeTableName: true,
    },
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    }
  }
);

sequelize
  .authenticate()
  .then(() => console.log("数据库连接成功"))
  .catch((err) => console.log("数据库连接错误", err));

// 根据 model自动创建表
sequelize
  .sync()
  // .sync({ force: true })
  .then(() => console.log("初始化数据库成功"))
  .catch((err) => console.log("初始化数据库错误", err));

export default sequelize;
