import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeLight = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={xonokai}
      language={match[1]}
      PreTag="div"
      children={String(children).replace(/\n$/, "")}
      {...props}
    />
  ) : (
    <code className={className} {...props} />
  );
};

export default React.memo(CodeLight);
