import React from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils";

const ArticleBox = (props) => {
  const { articleId } = props;
  return (
    <div className="container mx-auto w-5/12 mb-14 bg-slate-100 dark:bg-zinc-900 rounded-lg">
      <Link to={`/Article/${articleId}`}>
        <img
          className="rounded-t-lg"
          src={getImageUrl("images", "Wallhaven.jpg")}
          alt="Article Logo"
        />
        <div className="flex flex-col py-6 ml-10">
          <span className="dark:text-white text-4xl font-bold">ArticleBox</span>
          <span className="dark:text-gray-300 mt-4">ArticleBox Info ...</span>
          <span className="dark:text-gray-300 text-sm mt-4">
            Posted December 17.2021
          </span>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(ArticleBox);
