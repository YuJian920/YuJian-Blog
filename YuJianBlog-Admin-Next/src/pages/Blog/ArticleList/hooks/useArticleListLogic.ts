import useArticleDeleteAsync from "./useArticleDeleteAsync";
import useArticleListAsync from "./useArticleListAsync";

const useArticleListLogic = () => {
  const { data: articleList, isLoading } = useArticleListAsync();
  const { mutateAsync } = useArticleDeleteAsync();

  return { articleList, isLoading, deleteMutate: mutateAsync };
};

export default useArticleListLogic;
