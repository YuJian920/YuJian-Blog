import { useMutation, useQueryClient } from "react-query";
import { deleteArticle } from "../api";

const useArticleDeleteAsync = () => {
  const queryClient = useQueryClient();
  return useMutation((id: number) => deleteArticle(id), {
    onSuccess: () => queryClient.invalidateQueries("articleList"),
  });
};

export default useArticleDeleteAsync;
