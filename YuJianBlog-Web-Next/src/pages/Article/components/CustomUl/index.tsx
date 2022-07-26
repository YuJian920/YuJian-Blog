import style from "../../index.module.scss";

const CustomUl = ({ children, ...props }: any) => (
  <ul className={style.customUl}>{children}</ul>
);

export default CustomUl;
