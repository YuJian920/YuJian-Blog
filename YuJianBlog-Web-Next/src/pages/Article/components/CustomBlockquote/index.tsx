import style from "../../index.module.scss";

const CustomBlockquote = ({ children, ...props }: any) => (
  <blockquote className={style.customBlockquote}>{children}</blockquote>
);

export default CustomBlockquote;
