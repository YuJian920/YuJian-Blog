import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import ReactMarkdown from "react-markdown";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import type {
  MarkDownEditorForwardRefType,
  MarkDownEditorPropsType,
} from "../type";

const MarkDownEditor = forwardRef<
  MarkDownEditorForwardRefType,
  MarkDownEditorPropsType
>(({ defaultText }, markDownRef) => {
  const [text, changeText] = useState("");

  useEffect(() => {
    changeText(defaultText || "");
  }, [defaultText]);

  useImperativeHandle(markDownRef, () => {
    return {
      markDownText() {
        return text;
      },
    };
  });

  return (
    <MdEditor
      style={{ height: "500px" }}
      value={text}
      renderHTML={(text) => <ReactMarkdown children={text} />}
      onChange={({ text }) => changeText(text)}
    />
  );
});

export default MarkDownEditor;
