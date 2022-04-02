import React from "react";
import ReactMarkdown from "react-markdown";
import useDocumentTitle from "../../hook/useDocumentTitle";
import {
  Container,
  ArticleInfo,
  TitleSpan,
  LableSpan,
  ContentBox,
  ContentImg,
  Conten,
} from "./style";
import CodeLight from "./components/CodeLight";
import Loading from "../../components/Loading";
import { useArticleDetail } from "../../hook/useArticle";
import Wallhaven from "../../assets/images/Wallhaven.jpg";

const Article = () => {
  const { data, isLoading } = useArticleDetail();
  useDocumentTitle(data?.title || "YuJian's Blog", false);

  const createTime = data?.createdAt
    ?.substring(0, data?.createdAt.length - 5)
    ?.split("T")
    ?.join(" ");

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <ArticleInfo>
        <TitleSpan>{data.title}</TitleSpan>
        <LableSpan>Posted {createTime}</LableSpan>
      </ArticleInfo>
      <ContentBox>
        <ContentImg src={cover_url || Wallhaven} alt="Article Logo" />
        <Conten>
          <ReactMarkdown components={{ code: CodeLight }}>
            {data?.content}
          </ReactMarkdown>
        </Conten>
      </ContentBox>
    </Container>
  );
};

export default Article;
