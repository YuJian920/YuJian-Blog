import { useQuery } from "react-query";
import { getArticleList } from "../api";

/**
 * 获取 文章列表
 * @returns
 */
const useArticleListAsync = () => {
  return useQuery<Article[]>("articleList", () => getArticleList());
};

export default useArticleListAsync;
