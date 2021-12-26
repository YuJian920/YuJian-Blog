import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils";

const Navigation = (props) => {
  const { linkMap } = props;
  const [darkMode, setDarkMode] = useState(false); // 深色模式状态

  // 切换 深色模式
  const _onDarkMode = (value) => {
    value
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    setDarkMode(value);
  };

  return (
    <header className="body-font font-custom">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="dark:text-white flex title-font font-medium items-center mb-4 md:mb-0">
          <img
            className="w-14 h-14 p-2 rounded-full"
            src={getImageUrl("images", "YuJianLogo.png")}
            alt="YuJianLogo"
          />
          <Link to="/">
            <span className="text-xl">YuJian's Blog</span>
          </Link>
        </a>
        <nav className="dark:text-white md:ml-auto flex flex-wrap items-center text-base justify-center">
          {linkMap.map((linkItem) => {
            return (
              <Link className="mr-5" to={linkItem.path} key={linkItem.name}>
                {linkItem.name}
              </Link>
            );
          })}
          {!darkMode ? (
            <svg
              onClick={() => _onDarkMode(true)}
              className="h-8 w-8"
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
              onClick={() => _onDarkMode(false)}
              className="h-8 w-8"
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
