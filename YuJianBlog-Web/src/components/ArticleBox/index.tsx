import React from "react";
import { Link } from "react-router-dom";
import { ArticleData } from "../../type";
import "./index.less";

const ArticleBox = ({ articleData }: { articleData: ArticleData }) => {
  const { id, title, description, cover_url, createdAt } = articleData;
  const createTime = createdAt
    ?.substring(0, createdAt.length - 5)
    ?.split("T")
    ?.join(" ");

  return (
    <div className="articleBox">
      <Link to={`/Article/${id}`}>
        <div className="articleBox__img">
          <img src={cover_url || ""} alt="Article Logo" />
        </div>
        <div className="articleBox__box">
          <span className="articleBox__box-title">{title}</span>
          <span className="articleBox__box-dep">{description}</span>
          <span className="articleBox__box-info">Posted {createTime}</span>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(ArticleBox);
