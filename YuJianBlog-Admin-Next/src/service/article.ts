import request from "../utils/request";

export interface Article {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  content: string;
  author: string;
  createdAt?: string;
}

/**
 * 创建文章
 * @param {*} params
 * @returns
 */
export const postArticle = (params: Article) => {
  return request("/api/article/add", { method: "POST", data: params });
};

/**
 * 删除文章
 * @param id
 * @returns
 */
export const deleteArticle = (id: number) => {
  return request("/api/article/delete", { method: "POST", data: { id } });
};

/**
 * 修改文章
 * @param {*} params
 * @returns
 */
export const putArticle = (params: Article) => {
  return request("/api/article/update", { method: "PUT", data: params });
};

/**
 * 文章列表
 * @returns
 */
export const getArticleList = () => {
  return request("/api/article");
};

/**
 * 文章详情
 * @param articleId
 * @returns
 */
export const getArticleInfo = (articleId: string) => {
  return request("/api/article/" + articleId);
};
