import { useCustom } from "../../hook/useCustom";
import "./index.less";

const Footer = () => {
  const { data: customData } = useCustom();

  return (
    <footer className="footer">
      <span>
        {customData?.[0].footer ||
          "Copyright © 2016-2022 YuJian All Rights Reserved"}
      </span>
      <a className="footer__bn" href="https://beian.miit.gov.cn">
        粤ICP备2022028534号
      </a>
    </footer>
  );
};

export default Footer;
