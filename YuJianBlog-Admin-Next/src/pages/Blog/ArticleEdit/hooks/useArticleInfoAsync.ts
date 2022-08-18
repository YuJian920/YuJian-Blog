import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getArticleInfo } from "../api";

/**
 * 获取 文章详情
 * @param {*} articleId
 * @returns
 */
export const useArticleInfoAsync = (articleId = "") => {
  const [searchParams] = useSearchParams();
  if (!articleId) articleId = searchParams.get("articleId") || "";

  return useQuery(
    ["articleInfo", { articleId }],
    () => getArticleInfo(articleId),
    { enabled: !!articleId }
  );
};

export default useArticleInfoAsync;
