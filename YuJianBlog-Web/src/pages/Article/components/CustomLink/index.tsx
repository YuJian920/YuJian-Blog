import "../../index.less";

const CustomLink = ({ children, ...props }: any) => (
  <a
    className="customLink"
    href={props.href}
    target="_blank"
    title={props.href}
  >
    {children}
  </a>
);

export default CustomLink;
