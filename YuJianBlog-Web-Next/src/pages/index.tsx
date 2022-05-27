import { useArticleList } from "../hook/useArticle";
import { useCustom } from "../hook/useCustom";
import ArticleBox from "../components/ArticleBox";
import Loading from "../components/Loading";
import style from "./index.module.scss";

const Home = () => {
  const { data: articleList, isLoading: articleLoading } = useArticleList();
  const { data: customData, isLoading: customLoading } = useCustom();

  return articleLoading || customLoading ? (
    <Loading />
  ) : (
    <>
      <div className={style.home__slogan}>
        {customData?.[0].slogan || "无物为真，诸行皆允"}
      </div>
      <div className={style.home__content}>
        {articleList?.map((mapItem) => (
          <ArticleBox key={mapItem.id} articleData={mapItem} />
        ))}
      </div>
    </>
  );
};

export default Home;
