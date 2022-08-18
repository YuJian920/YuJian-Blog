import { useMutation, useQueryClient } from "react-query";
import { postArticle } from "../api";

/**
 * 添加 文章
 * @returns Article
 */
const useArticleAddAsync = () => {
  const queryClient = useQueryClient();
  return useMutation((params: Article) => postArticle(params), {
    onSuccess: () => queryClient.invalidateQueries("articleList"),
  });
};

export default useArticleAddAsync;
