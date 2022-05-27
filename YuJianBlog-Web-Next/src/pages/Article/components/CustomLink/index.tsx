import style from "../../index.module.scss";

const CustomLink = ({ children, ...props }: any) => (
  <a
    className={style.customLink}
    href={props.href}
    target="_blank"
    title={props.href}
  >
    {children}
  </a>
);

export default CustomLink;
