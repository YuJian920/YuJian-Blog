import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Container, Img, Span, LeftBox, Nav, Svgg } from "./style";
import { getImageUrl } from "../../utils";

const Routes = [
  { name: "首页", path: "/" },
  { name: "关于", path: "/About" },
];

const Navigation = () => {
  const linkMap = Routes;
  const [darkMode, setDarkMode] = useState(false); // 深色模式状态

  // 切换 深色模式
  const _onDarkMode = (value) => {
    value
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    setDarkMode(value);
  };

  return (
    <Header>
      <Container>
        <LeftBox>
          <Img src={getImageUrl("images", "YuJianLogo.png")} alt="YuJianLogo" />
          <Link style={{ marginLeft: "1rem" }} to="/">
            <Span style={{ fontSize: "1.7rem" }}>YuJian's Blog</Span>
          </Link>
        </LeftBox>
        <Nav>
          {linkMap.map((linkItem) => {
            return (
              <Link
                style={{ marginRight: "1.25rem", marginLeft: '1.25rem' }}
                to={linkItem.path}
                key={linkItem.name}
              >
                {linkItem.name}
              </Link>
            );
          })}
          {!darkMode ? (
            <Svgg
              onClick={() => _onDarkMode(true)}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </Svgg>
          ) : (
            <Svgg
              onClick={() => _onDarkMode(false)}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="4" />
              <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
            </Svgg>
          )}
        </Nav>
      </Container>
    </Header>
  );
};

export default React.memo(Navigation);
