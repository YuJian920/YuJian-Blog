import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;
  width: 100rem;

  @media (max-width: 500px) {
    margin-top: 1rem;
    width: 30rem;
    margin-bottom: 1.5rem;
  }
`;

export const TitleSpan = styled.span`
  font-size: 3.6rem;
  line-height: 4rem;
  margin-bottom: 1.2rem;

  @media (max-width: 500px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const LableSpan = styled.span`
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

export const ContentBox = styled.div`
  background-color: rgb(241 245 249);
  border-radius: 0.8rem;
  width: 100rem;

  @media (max-width: 500px) {
    margin-top: 1rem;
    width: 35rem;
  }
`;

export const ContentImg = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Conten = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding-bottom: 4rem;
  overflow-wrap: break-word;
  font-size: 1.5rem;
  img {
    width: 100%;
  }
`;
