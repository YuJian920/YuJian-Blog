import { Artcile } from "../type";
import request from "../utils/request";

/**
 * 创建文章
 * @param {*} params
 * @returns
 */
export const postArticle = (params: Artcile) => {
  return request.post("/api/article/add", params);
};

/**
 * 删除文章
 * @param {*} params
 * @returns
 */
export const deleteArticle = (id: number) => {
  return request.post("/api/article/delete", id);
};

/**
 * 修改文章
 * @param {*} params
 * @returns
 */
export const putArticle = (params: Artcile) => {
  return request.put("/api/article/update", params);
};

/**
 * 文章列表
 * @returns
 */
export const getArticleList = () => {
  return request.get("/api/article");
};

/**
 * 文章详情
 * @param {*} param
 * @returns
 */
export const getArticleInfo = ({ articleId }: { articleId: string }) => {
  return request.get(`/api/article/${articleId}`);
};
