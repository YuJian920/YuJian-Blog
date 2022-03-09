const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Fail } = require("../utils/exception");

class Article extends Model {
  static async findArticleById(id) {
    const articleData = await Article.findOne({ where: { id } });
    if (!articleData) throw new Fail("文章不存在");
    else return articleData;
  }

  static async findArticle() {
    return await Article.findAll();
  }
}

Article.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cover_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, tableName: "article" }
);

module.exports = Article;
