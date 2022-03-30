import { useQuery } from "react-query";
import { getArticleList } from "../service/article";

/**
 * 获取 文章列表
 * @returns
 */
export const useArticleList = () => {
  return useQuery("articleList", getArticleList);
};
