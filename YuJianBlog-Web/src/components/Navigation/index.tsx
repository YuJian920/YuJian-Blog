import React, { useState } from "react";
import { Link } from "react-router-dom";
import YuJianLogo from "../../assets/images/YuJianLogo.webp";
import "./index.less";

const Routes = [
  { name: "首页", path: "/" },
  { name: "关于", path: "/About" },
];

const Navigation = () => {
  const linkMap = Routes;
  const [darkMode, setDarkMode] = useState(false); // 深色模式状态

  // 切换 深色模式
  const _onDarkMode = (value: boolean) => {
    value
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    setDarkMode(value);
  };

  return (
    <header className="pageHeader">
      <div className="pageHeader__container">
        <span className="pageHeader__container-left">
          <img className="leftImg" src={YuJianLogo} alt="YuJianLogo" />
          <Link style={{ marginLeft: "1rem" }} to="/">
            <span className="leftSpan">YuJian's Blog</span>
          </Link>
        </span>
        <nav className="pageHeader__nav">
          {linkMap.map((linkItem) => {
            return (
              <Link
                style={{ marginRight: "1.25rem", marginLeft: "1.25rem" }}
                to={linkItem.path}
                key={linkItem.name}
              >
                {linkItem.name}
              </Link>
            );
          })}
          {!darkMode ? (
            <svg
              className="svg"
              onClick={() => _onDarkMode(true)}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg
              className="svg"
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
            </svg>
          )}
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Navigation);
