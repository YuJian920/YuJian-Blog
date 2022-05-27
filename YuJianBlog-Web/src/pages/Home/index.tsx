import useDocumentTitle from "../../hook/useDocumentTitle";
import { useArticleList } from "../../hook/useArticle";
import { useCustom } from "../../hook/useCustom";
import ArticleBox from "../../components/ArticleBox";
import Loading from "../../components/Loading";
import "./index.less";

const Home = () => {
  useDocumentTitle("YuJian's Blog", true);
  const { data: articleList, isLoading: articleLoading } = useArticleList();
  const { data: customData, isLoading: customLoading } = useCustom();

  return articleLoading || customLoading ? (
    <Loading />
  ) : (
    <>
      <div className="home__slogan">
        {customData?.[0].slogan || "无物为真，诸行皆允"}
      </div>
      <div className="home__content">
        {articleList?.map((mapItem) => (
          <ArticleBox key={mapItem.id} articleData={mapItem} />
        ))}
      </div>
    </>
  );
};

export default Home;
