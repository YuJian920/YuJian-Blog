import styled from "@emotion/styled";

export const Section = styled.section`
  color: rgb(75 85 99);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

export const Container = styled.div`
  width: 100%;
`;

export const ContainerBox = styled.div`
  @media (min-width: 1280px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 75%;
  }

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Svg = styled.svg`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  color: rgb(156 163 175);
  margin-bottom: 2rem;
`;

export const P = styled.p`
  line-height: 1.625;
  font-size: 1.75rem;
  line-height: 2rem;
`;

export const Content = styled.span`
  display: inline-block;
  height: 0.25rem;
  width: 2.5rem;
  border-radius: 0.25rem;
  background-color: rgb(99 102 241);
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;
