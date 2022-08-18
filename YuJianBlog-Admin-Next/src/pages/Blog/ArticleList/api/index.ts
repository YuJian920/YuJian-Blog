import request from "../../../../utils/request";

/**
 * 文章列表
 * @returns
 */
export const getArticleList = () => {
  return request<Article[]>("/api/article");
};

/**
 * 删除文章
 * @param id
 * @returns
 */
export const deleteArticle = (id: number) => {
  return request<{}>("/api/article/delete", { method: "POST", data: { id } });
};
