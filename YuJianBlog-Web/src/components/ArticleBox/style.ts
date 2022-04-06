import styled from "@emotion/styled";

export const Container = styled.div`
  width: 80rem;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 5rem;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.02),
    1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease-in-out,
    box-shadow 0.3s cubic-bezier(0.47, 0, 0.745, 0.715), border 0.3s linear 0.1s;
  &:hover {
    box-shadow: 0 10px 50px rgba(51, 51, 51, 0.25);
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  @media (max-width: 1280px) {
    width: 90%;
  }
`;

export const ArticleImgBox = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 50rem;

  @media (max-width: 1280px) {
    height: 40rem;
  }

  @media (max-width: 1024px) {
    height: 35rem;
  }

  @media (max-width: 500px) {
    height: 25rem;
  }
`;

export const ArticleImg = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-left: 2rem;

  @media (max-width: 500px) {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    margin-left: 1rem;
  }
`;

export const TitleSpan = styled.span`
  font-size: 3rem;
  line-height: 2.5rem;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const DepSpan = styled.span`
  font-size: 1.7rem;
  margin-top: 2.5rem;

  @media (max-width: 500px) {
    font-size: 1.3em;
    margin-top: 1.5rem;
  }
`;

export const InfoSpan = styled.span`
  font-size: 1.2rem;
  line-height: 2rem;
  margin-top: 1rem;

  @media (max-width: 500px) {
    font-size: 1rem;
    line-height: 2rem;
    margin-top: 0.5rem;
  }
`;