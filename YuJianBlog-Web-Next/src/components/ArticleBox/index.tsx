import Image from "next/image";
import Link from "next/link";
import type { ArticleData } from "../../type";
import { imagesLoader } from "../../utils";
import style from "./index.module.scss";

const ArticleBox = ({ articleData }: { articleData: ArticleData }) => {
  const { id, title, description, cover_url, createdAt } = articleData;

  return (
    <Link href={`/Article/${id}`}>
      <div className={style.articleBox}>
        <Image
          loader={imagesLoader}
          src={cover_url || ""}
          height={460}
          width={800}
          layout="responsive"
          alt="Article Logo"
          style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
        />
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
