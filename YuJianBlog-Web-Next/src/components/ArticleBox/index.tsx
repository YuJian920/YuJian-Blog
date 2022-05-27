import Link from "next/link";
import type { ArticleData } from "../../type";
import { splitTime } from "../../utils";
import style from "./index.module.scss";

const ArticleBox = ({ articleData }: { articleData: ArticleData }) => {
  const { id, title, description, cover_url, createdAt } = articleData;

  return (
    <Link href={`/Article/${id}`}>
      <div className={style.articleBox}>
        <div className={style.articleBox__img}>
          <img src={cover_url || ""} alt="Article Logo" />
        </div>
        <div className={style.articleBox__box}>
          <span className={style["articleBox__box-title"]}>{title}</span>
          <span className={style["articleBox__box-dep"]}>{description}</span>
          <span className={style["articleBox__box-info"]}>
            Posted {splitTime(createdAt)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleBox;
