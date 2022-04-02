import styled from "@emotion/styled";

export const Header = styled.header`
  width: 100%;
  user-select: none;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const LeftBox = styled.span`
  display: flex;
  align-items: center;
  font-weight: 400;
  margin-left: 2rem;
`;

export const Img = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
`;

export const Span = styled.span`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  line-height: 1.5rem;
  margin-right: 2rem;
`;

export const Svgg = styled.svg`
  margin-left: 1.25rem;
  height: 2rem;
  width: 2rem;
`;
