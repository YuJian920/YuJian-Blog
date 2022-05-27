import style from "./index.module.scss";

const Loading = () => (
  <div className={style.loading}>
    <div className={style.loading__box}>
      <div className={style["loading__box-trinity"]}>
        <div className={style.circle} />
        <div className={style.circle} />
        <div className={style.circle} />
      </div>
    </div>
  </div>
);

export default Loading;
