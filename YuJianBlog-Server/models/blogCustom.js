const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class BlogCustom extends Model {
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

module.exports = BlogCustom;
