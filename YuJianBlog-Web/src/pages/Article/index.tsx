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
    <div className="article">
      <div className="article__info">
        <span className="article__info-title">{data?.title}</span>
        <span className="article__info-lable">Posted {createTime}</span>
      </div>
      <div className="article__box">
        <img
          className="article__box-img"
          src={data?.cover_url || ""}
          alt="Article Logo"
        />
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
    </div>
  );
};

export default Article;
