import { CodeProps } from "react-markdown/lib/ast-to-react";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import style from "./index.module.scss";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

const CodeRender = ({
  node,
  inline,
  className,
  children,
  ...props
}: CodeProps) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={oneDark}
      language={match[1]}
      PreTag="div"
      showLineNumbers={true}
      children={String(children).replace(/\n$/, "")}
      {...props}
    />
  ) : (
    <code className={style.customCode} {...props}>
      {children}
    </code>
  );
};

const BlockquoteRender = ({ children, ...props }: any) => (
  <blockquote className={style.customBlockquote}>{children}</blockquote>
);

const PtagRender = ({ children, ...props }: any) => (
  <p className={style.customFont}>{children}</p>
);

const H2Render = ({ children, ...props }: any) => (
  <h2 className={style.customH2}>
    <span>{children}</span>
  </h2>
);

const UlRender = ({ children, ...props }: any) => (
  <ul className={style.customUl}>{children}</ul>
);

const LiRender = ({ children, ...props }: any) => (
  <li className={style.customLi}>{children}</li>
);

const AtagRender = ({ children, ...props }: any) => (
  <a
    className={style.customLink}
    href={props.href}
    target="_blank"
    title={props.href}
  >
    {children}
  </a>
);

const CustomRender = {
  code: CodeRender,
  blockquote: BlockquoteRender,
  p: PtagRender,
  h2: H2Render,
  ul: UlRender,
  ol: UlRender,
  li: LiRender,
  a: AtagRender,
};

export default CustomRender;
