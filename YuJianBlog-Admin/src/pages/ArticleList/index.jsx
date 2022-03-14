import React, { useState, useEffect } from "react";
import "./index.less";
import * as actions from "@model/article/actions";

const ArticleList = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleList();
  }, []);

  const getArticleList = async () => {
    const result = await actions.getArticleList();
    console.log(result);
    setArticle(result.data);
  };
  return <div className="articleList">articleList</div>;
};

export default ArticleList;
