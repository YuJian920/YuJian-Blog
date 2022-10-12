import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CustomRender from "./components/CustomRender";

export default ({ content }: { content: string }) => (
  <ReactMarkdown
    components={CustomRender}
    rehypePlugins={[[rehypeRaw, { passThrough: ["element"] }]]}
  >
    {content}
  </ReactMarkdown>
);
