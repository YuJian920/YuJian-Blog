import Head from "next/head";
import Image from "next/image";
import type { GetStaticProps } from "next/types";
import ReactMarkdown from "react-markdown";
import type { ArticleData } from "../../type";
import { imagesLoader } from "../../utils";
import request from "../../utils/request";
import CustomCode from "./components/CustomCode";
import CustomFont from "./components/CustomFont";
import CustomH2 from "./components/CustomH2";
import CustomLink from "./components/CustomLink";
import CustomLi from "./components/CustomLi";
import CustomUl from "./components/CustomUl";
import CustomBlockquote from "./components/CustomBlockquote";
import style from "./index.module.scss";

const Article = ({ data }: { data: ArticleData }) => (
  <article className={style.article}>
    <Head>
      <title>{data?.title}</title>
    </Head>
    <div className={style.article__info}>
      <span className={style["article__info-title"]}>{data?.title}</span>
      <time className={style["article__info-lable"]}>
        Posted {data?.createdAt || ""}
      </time>
    </div>
    <div className={style.article__box}>
      <Image
        style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        loader={imagesLoader}
        src={data?.cover_url || ""}
        height={480}
        width={800}
        layout="responsive"
        alt={data?.title || "Article Logo"}
      />
      {data?.tips && (
        <div className={style["article__box-tips"]}>{data.tips}</div>
      )}
      <div className={style["article__box-content"]}>
        <ReactMarkdown
          components={{
            code: CustomCode,
            a: CustomLink,
            h2: CustomH2,
            p: CustomFont,
            li: CustomLi,
            ul: CustomUl,
            ol: CustomUl,
            blockquote: CustomBlockquote,
          }}
        >
          {data?.content || ""}
        </ReactMarkdown>
      </div>
    </div>
  </article>
);

export const getStaticPaths = async () => {
  const articleList: ArticleData[] = await request("/api/article");
  const paths = articleList.map((mapItem) => ({
    params: { id: mapItem.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articleInfo = await request<ArticleData>(`/api/article/${params?.id}`);

  return { props: { data: articleInfo }, revalidate: 3600 };
};

export default Article;
