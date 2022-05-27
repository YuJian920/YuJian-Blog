import { useCustom } from "../../hook/useCustom";
import style from "./index.module.scss";

const Footer = () => {
  const { data: customData } = useCustom();

  return (
    <footer className={style.footer}>
      <span>
        {customData?.[0].footer ||
          "Copyright © 2016-2022 YuJian All Rights Reserved"}
      </span>
      <a className={style.footer__bn} href="https://beian.miit.gov.cn">
        粤ICP备2022028534号
      </a>
    </footer>
  );
};

export default Footer;
