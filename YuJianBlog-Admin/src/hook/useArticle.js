import { useQuery, useMutation, useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";
import {
  getArticleList,
  postArticle,
  putArticle,
  getArticleInfo,
  deleteArticle,
} from "../service/article";

/**
 * 获取 文章列表
 * @returns
 */
export const useArticleList = () => {
  return useQuery("articleList", () => getArticleList());
};

/**
 * 添加 文章
 * @returns
 */
export const useArticleAdd = () => {
  const queryClient = useQueryClient();
  return useMutation((params) => postArticle(params), {
    onSuccess: () => queryClient.invalidateQueries("articleList"),
  });
};

/**
 * 修改 文章
 * @returns
 */
export const useArticleEdit = () => {
  const queryClient = useQueryClient();
  return useMutation((params) => putArticle(params), {
    onSuccess: () => queryClient.invalidateQueries("articleList"),
  });
};

export const useArticleDelete = () => {
  const queryClient = useQueryClient();
  return useMutation((articleId) => deleteArticle({ articleId }), {
    onSuccess: () => queryClient.invalidateQueries("articleList"),
  });
};

/**
 * 获取 文章详情
 * @param {*} articleId
 * @returns
 */
export const useArticleInfo = (articleId = "") => {
  const [searchParams] = useSearchParams();
  if (!articleId) articleId = searchParams.get("articleId");

  return useQuery(
    ["articleInfo", { articleId }],
    () => getArticleInfo({ articleId }),
    { enabled: !!articleId }
  );
};
