import { Model, DataTypes } from "sequelize";
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import sequelize from "../utils/sequelize";
import { Fail } from "../utils/exception";

class Article extends Model<
  InferAttributes<Article>,
  InferCreationAttributes<Article>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare cover_url: string;
  declare content: string;
  declare author: number;
  declare tips: string;

  static async findArticleById(id: string) {
    const articleData = await Article.findOne({ where: { id } });
    if (!articleData) throw new Fail("文章不存在");
    else return articleData;
  }

  static async findArticle() {
    return await Article.findAll({ order: [["id", "DESC"]] });
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
    tips: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, tableName: "article" }
);

export default Article;
