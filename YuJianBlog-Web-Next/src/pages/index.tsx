import ArticleBox from "../components/ArticleBox";
import { AppProps, ArticleData, BlogCustom } from "../type";
import request from "../utils/request";
import style from "./index.module.scss";

interface HomeAppProps extends AppProps {
  articleList: ArticleData[];
  customData: BlogCustom[];
}

const Home = ({ articleList, customData }: HomeAppProps) => (
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

export const getStaticProps = async () => {
  const articleList = await request<ArticleData[]>("/api/article");
  const customData = await request<BlogCustom[]>("/api/blogCustom");

  return { props: { articleList, customData } };
};

export default Home;
