import request from "../../../../utils/request";

/**
 * 修改文章
 * @param {*} params
 * @returns
 */
export const putArticle = (params: Article) => {
  return request<Article>("/api/article/update", {
    method: "PUT",
    data: params,
  });
};

/**
 * 创建文章
 * @param {*} params
 * @returns
 */
export const postArticle = (params: Article) => {
  return request<{}>("/api/article/add", { method: "POST", data: params });
};

/**
 * 文章详情
 * @param articleId
 * @returns
 */
export const getArticleInfo = (articleId: string) => {
  return request<Article>("/api/article/" + articleId);
};
