import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Loading from "../../components/Loading";
import { useArticleDetail } from "../../hook/useArticle";
import { splitTime } from "../../utils";
import CustomCode from "./components/CustomCode";
import CustomFont from "./components/CustomFont";
import CustomH2 from "./components/CustomH2";
import CustomLink from "./components/CustomLink";
import style from "./index.module.scss";

const Article = () => {
  const { data, isLoading } = useArticleDetail();

  return isLoading ? (
    <Loading />
  ) : (
    <article className={style.article}>
      {data?.title ? (
        <>
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
              src={data?.cover_url || ""}
              height={450}
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
        </>
      ) : (
        <>
          <Head>
            <title>文章不见了</title>
          </Head>
          <h1>哦豁，文章不见了，可能已经被删除啦</h1>
        </>
      )}
    </article>
  );
};

export default Article;
