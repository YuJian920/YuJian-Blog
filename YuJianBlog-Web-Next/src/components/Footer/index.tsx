import type { GetStaticProps } from "next/types";
import { AppProps, BlogCustom } from "../../type";
import request from "../../utils/request";
import style from "./index.module.scss";

interface FooterAppProps extends AppProps {
  customData?: BlogCustom[];
}

const Footer = ({ customData }: FooterAppProps) => (
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

export const getStaticProps: GetStaticProps = async () => {
  const customData = await request<BlogCustom>("/api/blogCustom");

  return { props: { customData }, revalidate: 3600 };
};

export default Footer;
