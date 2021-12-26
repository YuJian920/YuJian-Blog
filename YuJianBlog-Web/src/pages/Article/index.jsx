import React from "react";
import { getImageUrl } from "../../utils";

const Article = (props) => {
  return (
    <div className="container mx-auto w-5/12">
      <div className="flex flex-col justify-center items-center font-bold my-8">
        <span className="text-4xl mb-3 dark:text-white">Article Title</span>
        <span className="text-xs dark:text-white">Posted December 17.2021</span>
      </div>
      <div className="bg-slate-100 dark:bg-zinc-900 rounded-lg">
        <img
          className="rounded-t-lg"
          src={getImageUrl("images", "Wallhaven.jpg")}
          alt="Article Logo"
        />
        <div className="flex flex-col m-10 pb-10 dark:text-slate-200 break-words">
          <p>Article Title</p>
          <p>Article Content</p>
          <p>ArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContent</p>
          <p>ArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContent</p>
          <p>ArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContentArticleContent</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
