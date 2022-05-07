import "../../index.less";

const CustomLink = ({ children, ...props }: any) => (
  <a className="customLink" title={props.href}>
    {children}
  </a>
);

export default CustomLink;
