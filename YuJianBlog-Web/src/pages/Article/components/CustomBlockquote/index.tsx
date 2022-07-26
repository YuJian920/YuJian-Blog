import "../../index.less";

const CustomBlockquote = ({ children, ...props }: any) => (
  <blockquote className="customBlockquote">{children}</blockquote>
);

export default CustomBlockquote;
