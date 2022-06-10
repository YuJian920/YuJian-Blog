import { Model, DataTypes } from "sequelize";
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import bcrypt from "bcryptjs";
import sequelize from "../utils/sequelize";
import { Fail } from "../utils/exception";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare password: string;

  static async getUserData(
    username: User["username"],
    password: User["password"]
  ) {
    const userInfo = await User.findOne({ where: { username } });

    if (userInfo) {
      const correct = await bcrypt.compare(password, userInfo?.password || "");
      if (!correct) throw new Fail("密码错误");
      else return userInfo;
    } else throw new Fail("用户不存在");
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
      set(value: User["password"]) {
        this.setDataValue(
          "password",
          bcrypt.hashSync(value, bcrypt.genSaltSync(10))
        );
      },
    },
  },
  { sequelize, tableName: "user" }
);

export default User;
