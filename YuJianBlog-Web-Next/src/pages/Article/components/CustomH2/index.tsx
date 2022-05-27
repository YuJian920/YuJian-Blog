import style from "../../index.module.scss";

const CustomH2 = ({ children, ...props }: any) => (
  <h2 className={style.customH2}>
    <span>{children}</span>
  </h2>
);

export default CustomH2;
