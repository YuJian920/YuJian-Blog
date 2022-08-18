import { useForm } from "@mantine/form";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { MarkDownEditorForwardRefType } from "../type";
import useArticleAddAsync from "./useArticleAddAsync";
import useArticleEditAsync from "./useArticleEditAsync";
import useArticleInfoAsync from "./useArticleInfoAsync";

const initialValues: Article = {
  content: "",
  cover_url: "",
  description: "",
  id: 0,
  tips: "",
  title: "",
  author: "",
};

const useArticleLogic = () => {
  const { data: articleInfo, isLoading: pullLoading } = useArticleInfoAsync();
  const articleId = useSearchParams()[0].get("articleId");
  const { mutateAsync, isLoading: mutateLoading } = (articleId ? useArticleEditAsync : useArticleAddAsync)();
  const form = useForm({ initialValues });
  const markDownRef = useRef<MarkDownEditorForwardRefType>(null);

  useEffect(() => {
    if (articleInfo) form.setValues({ ...articleInfo, tips: articleInfo.tips || ""  })
  }, [articleInfo])

  useEffect(() => {
    return () => form.reset();
  }, []);

  return { mutateAsync, form, isLoading: pullLoading || mutateLoading, markDownRef }
};

export default useArticleLogic;
