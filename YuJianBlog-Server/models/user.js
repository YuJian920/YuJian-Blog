const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const sequelize = require("../db");
const { Fail } = require("../utils/exception");

class User extends Model {
  static async getUserData(username, password) {
    const userInfo = await User.findOne({ where: { username } });
    const correct = await bcrypt.compare(password, userInfo?.password || "");
    if (!correct) throw new Fail("密码错误");
    else return userInfo;
  }
  static async getUserList() {
    return await User.findAll();
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: { type: DataTypes.STRING, unique: true },
    password: {
      type: DataTypes.STRING,
      set(val) {
        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(val, salt);
        this.setDataValue("password", password);
      },
    },
  },
  {
    sequelize,
    tableName: "user",
  }
);

module.exports = User;
