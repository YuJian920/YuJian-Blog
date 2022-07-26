import style from "../../index.module.scss";

const CustomLi = ({ children, ...props }: any) => (
  <li className={style.customLi}>{children}</li>
);

export default CustomLi;
