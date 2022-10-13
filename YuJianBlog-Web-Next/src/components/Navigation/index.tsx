import React, { SVGProps, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import YuJianLogo from "../../assets/images/YuJianLogo.webp";
import style from "./index.module.scss";

const linkMap = [
  { name: "首页", path: "/" },
  { name: "关于", path: "/About" },
];

const Navigation = () => (
  <div className={style.pageHeader}>
    <div className={style.pageHeader__container}>
      <span className={style["pageHeader__container-left"]}>
        <div className={style.leftImg}>
          <Image
            src={YuJianLogo}
            alt="YuJianLogo"
            draggable={false}
            layout="responsive"
            priority
          />
        </div>
        <span className={style.leftSpan}>
          <Link href="/">YuJian's Blog</Link>
        </span>
      </span>
      <nav className={style.pageHeader__nav}>
        {linkMap.map((linkItem) => (
          <Link href={linkItem.path} key={linkItem.name}>
            {linkItem.name}
          </Link>
        ))}
        <DarkModeButton />
      </nav>
    </div>
  </div>
);

/**
 * svg 图标的配置字典
 */
const svgConfigDict: SVGProps<SVGSVGElement>[] = [
  {
    className: style.svg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  {
    className: style.svg,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
];

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false); // 深色模式状态

  // 切换 深色模式
  const onDarkMode = (value: boolean) => {
    if (value) {
      document.documentElement.style.setProperty("--theme-bg-color", "#0f0f0f");
      document.documentElement.style.setProperty(
        "--theme-font-color",
        "#ced8de"
      );
      document.documentElement.style.setProperty(
        "--theme-box-color",
        "#2d3235"
      );
      document.documentElement.style.setProperty(
        "--theme-slogan-color",
        "linear-gradient(45deg,rgba(147, 181, 207, 1) 0%,rgba(147, 181, 207, 0.4) 100%)"
      );
    } else {
      document.documentElement.style.setProperty("--theme-bg-color", "#fafafa");
      document.documentElement.style.setProperty(
        "--theme-font-color",
        "#000000"
      );
      document.documentElement.style.setProperty(
        "--theme-box-color",
        "#ffffff"
      );
      document.documentElement.style.setProperty(
        "--theme-slogan-color",
        "linear-gradient(45deg,rgba(43, 115, 175, 1) 0%,rgba(43, 115, 175, 0.4) 100%)"
      );
    }

    setDarkMode(value);
  };

  const svgConfig = darkMode ? svgConfigDict[0] : svgConfigDict[1];

  return !darkMode ? (
    <svg onClick={() => onDarkMode(true)} {...svgConfig}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ) : (
    <svg onClick={() => onDarkMode(false)} {...svgConfig}>
      <path stroke="none" d="M0 0h24v24H0z" />
      <circle cx="12" cy="12" r="4" />
      <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
    </svg>
  );
};

export default Navigation;
