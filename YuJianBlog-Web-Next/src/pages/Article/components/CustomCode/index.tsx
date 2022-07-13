// @ts-nocheck
import { CodeProps } from "react-markdown/lib/ast-to-react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import style from "../../index.less";

const CustomCode = ({
  node,
  inline,
  className,
  children,
  ...props
}: CodeProps) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={vscDarkPlus}
      language={match[1]}
      PreTag="div"
      children={String(children).replace(/\n$/, "")}
      {...props}
    />
  ) : (
    <code className={style.customCode} {...props}>{children}</code>
  );
};

export default CustomCode;
