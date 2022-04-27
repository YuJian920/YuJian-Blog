import React from "react";
import "./index.less";

const Footer = () => {
  return (
    <footer className="footer">
      <span>Copyright © 2016-2022 YuJian All Rights Reserved</span>
      <a className="footer__bn" href="https://beian.miit.gov.cn">
        粤ICP备2022028534号
      </a>
    </footer>
  );
};

export default React.memo(Footer);
