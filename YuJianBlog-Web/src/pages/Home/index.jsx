import React from "react";
import { useArticleList } from "../../hook/useArticle";
import ArticleBox from "../../components/ArticleBox";
import Loading from "../../components/Loading";
import { Container, Slogan } from "./style";

const Home = () => {
  const { data: articleList, isLoading: articleLoading } = useArticleList();

  return (
    <>
      <Slogan>无物为真，诸行皆允</Slogan>
      {articleLoading ? (
        <Loading />
      ) : (
        <Container>
          {articleList?.map((mapItem) => {
            return <ArticleBox key={mapItem.id} articleData={mapItem} />;
          })}
        </Container>
      )}
    </>
  );
};

export default Home;
