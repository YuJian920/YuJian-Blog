import { useMutation, useQueryClient } from "react-query";
import { putArticle } from "../api";

/**
 * 修改 文章
 * @returns Article
 */
const useArticleEditAsync = () => {
  const queryClient = useQueryClient();
  return useMutation((params: Article) => putArticle(params), {
    onSuccess: () => queryClient.invalidateQueries("articleList"),
  });
};

export default useArticleEditAsync;
