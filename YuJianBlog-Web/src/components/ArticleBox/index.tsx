import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ArticleImgBox,
  ArticleImg,
  Box,
  TitleSpan,
  DepSpan,
  InfoSpan,
} from "./style";
import Wallhaven from "../../assets/images/Wallhaven.jpg";
import { ArticleData } from "../../type";

const ArticleBox = ({ articleData }: { articleData: ArticleData }) => {
  const { id, title, description, cover_url, createdAt } = articleData;
  const createTime = createdAt
    ?.substring(0, createdAt.length - 5)
    ?.split("T")
    ?.join(" ");

  return (
    <Container>
      <Link to={`/Article/${id}`}>
        <ArticleImgBox>
          <ArticleImg src={cover_url || Wallhaven} alt="Article Logo" />
        </ArticleImgBox>
        <Box>
          <TitleSpan>{title}</TitleSpan>
          <DepSpan>{description}</DepSpan>
          <InfoSpan>Posted {createTime}</InfoSpan>
        </Box>
      </Link>
    </Container>
  );
};

export default React.memo(ArticleBox);
