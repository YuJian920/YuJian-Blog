import style from "../../index.module.scss";

const CustomFont = ({ children, ...props }: any) => (
  <p className={style.customFont}>{children}</p>
);

export default CustomFont;
