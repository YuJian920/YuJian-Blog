import { useRef, useEffect } from "react";

const useDocumentTitle = (title, keepOnUnmount) => {
  const oldTitle = useRef(document.title).current;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) document.title = oldTitle;
    };
  }, [oldTitle, keepOnUnmount]);
};

export default useDocumentTitle;
