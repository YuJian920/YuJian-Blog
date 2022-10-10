import Head from "next/head";
import type { GetServerSideProps } from "next/types";
import ReactMarkdown from "react-markdown";
import BlogImage from "../../components/BlogImage";
import type { ArticleData } from "../../type";
import request from "../../utils/request";
import CustomBlockquote from "./components/CustomBlockquote";
import CustomCode from "./components/CustomCode";
import CustomFont from "./components/CustomFont";
import CustomH2 from "./components/CustomH2";
import CustomLi from "./components/CustomLi";
import CustomLink from "./components/CustomLink";
import CustomUl from "./components/CustomUl";
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
      <BlogImage
        height={550}
        imageUrl={data?.cover_url || ""}
        imageAlt={data?.title}
        radius={8}
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const articleInfo = await request<ArticleData>(`/api/article/${params?.id}`);

  if (!articleInfo.id) return { notFound: true };

  return {
    props: { data: articleInfo },
  };
};

export default Article;
