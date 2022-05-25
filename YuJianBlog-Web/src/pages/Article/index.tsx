import ReactMarkdown from "react-markdown";
import Loading from "../../components/Loading";
import { useArticleDetail } from "../../hook/useArticle";
import useDocumentTitle from "../../hook/useDocumentTitle";
import CustomCode from "./components/CustomCode";
import CustomLink from "./components/CustomLink";
import CustomH2 from "./components/CustomH2";
import CustomFont from "./components/CustomFont";
import "./index.less";

const Article = () => {
  const { data, isLoading } = useArticleDetail();
  useDocumentTitle(data?.title || "YuJian's Blog", false);

  const createTime = data?.createdAt
    ?.substring(0, data?.createdAt.length - 5)
    ?.split("T")
    ?.join(" ");

  return isLoading ? (
    <Loading />
  ) : (
    <article className="article">
      {data?.title ? (
        <>
          <div className="article__info">
            <span className="article__info-title">{data?.title}</span>
            <time className="article__info-lable">Posted {createTime}</time>
          </div>
          <div className="article__box">
            <img
              className="article__box-img"
              src={data?.cover_url || ""}
              alt="Article Logo"
            />
            {data?.tips && <div className="article__box-tips">{data.tips}</div>}
            <div className="article__box-content">
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
        <h1>哦豁，文章不见了，可能已经被删除啦</h1>
      )}
    </article>
  );
};

export default Article;
