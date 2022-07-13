import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ArticleData } from "../../type";
import { splitTime, imagesLoader } from "../../utils";
import request from "../../utils/request";
import CustomCode from "./components/CustomCode";
import CustomFont from "./components/CustomFont";
import CustomH2 from "./components/CustomH2";
import CustomLink from "./components/CustomLink";
import style from "./index.module.scss";

const Article = ({ data }: { data: ArticleData }) => (
  <article className={style.article}>
    <Head>
      <title>{data?.title}</title>
    </Head>
    <div className={style.article__info}>
      <span className={style["article__info-title"]}>{data?.title}</span>
      <time className={style["article__info-lable"]}>
        Posted {splitTime(data?.createdAt || "")}
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

type ParamsType = { id: string };
export const getStaticProps = async ({ params }: { params: ParamsType }) => {
  const articleInfo = await request<ArticleData>(`/api/article/${params.id}`);

  return { props: { data: articleInfo } };
};

export default Article;
