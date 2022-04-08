import React from "react";
import useDocumentTitle from "../../hook/useDocumentTitle";
import { useArticleList } from "../../hook/useArticle";
import ArticleBox from "../../components/ArticleBox";
import Loading from "../../components/Loading";
import "./index.less";

const Home = () => {
  useDocumentTitle("YuJian's Blog", true);
  const { data: articleList, isLoading: articleLoading } = useArticleList();

  return (
    <>
      <div className="home__slogan">无物为真，诸行皆允</div>
      {articleLoading ? (
        <Loading />
      ) : (
        <div className="home__content">
          {articleList?.map((mapItem) => {
            return <ArticleBox key={mapItem.id} articleData={mapItem} />;
          })}
        </div>
      )}
    </>
  );
};

export default React.memo(Home);
