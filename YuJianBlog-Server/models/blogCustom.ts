import { Model, DataTypes } from "sequelize";
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import sequelize from "../utils/sequelize";

class BlogCustom extends Model<
  InferAttributes<BlogCustom>,
  InferCreationAttributes<BlogCustom>
> {
  declare id: CreationOptional<number>;
  declare slogan: string;
  declare footer: string;

  static async findCustom() {
    return await BlogCustom.findAll();
  }
}

BlogCustom.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    slogan: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    footer: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
  },
  { sequelize, tableName: "blogCustom" }
);

export default BlogCustom;
