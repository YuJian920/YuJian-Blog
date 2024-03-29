import Link from "next/link";
import type { ArticleData } from "../../type";
import BlogImage from "../BlogImage";
import style from "./index.module.scss";
import { qprogressStart } from "../../utils";

const ArticleBox = ({ articleData }: { articleData: ArticleData }) => {
  const { id, title, description, cover_url, createdAt } = articleData;

  return (
    <Link href={`/Article/${id}`}>
      <div className={style.articleBox} onClick={() => qprogressStart()}>
        <BlogImage imageUrl={cover_url || ""} imageAlt={title} radius={5} />
        <div className={style.articleBox__box}>
          <span className={style["articleBox__box-title"]}>{title}</span>
          <span className={style["articleBox__box-dep"]}>{description}</span>
          <span className={style["articleBox__box-info"]}>
            Posted {createdAt}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleBox;
