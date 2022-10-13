import Head from "next/head";
import type { GetStaticProps } from "next/types";
import { useEffect } from "react";
import BlogImage from "../../components/BlogImage";
import MarkdownRender from "../../components/MarkdownRender";
import type { ArticleData } from "../../type";
import { qprogress } from "../../utils";
import request from "../../utils/request";
import style from "./index.module.scss";

const Article = ({ data }: { data: ArticleData }) => {
  useEffect(() => {
    qprogress.finish();
  }, []);

  return (
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
          imageUrl={data?.cover_url || ""}
          imageAlt={data?.title}
          radius={8}
        />
        {data?.tips && (
          <div className={style["article__box-tips"]}>{data.tips}</div>
        )}
        <div className={style["article__box-content"]}>
          <MarkdownRender content={data?.content || ""} />
        </div>
      </div>
    </article>
  );
};

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
