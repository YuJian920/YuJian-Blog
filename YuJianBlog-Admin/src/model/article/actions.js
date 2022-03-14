import * as service from "@service/user";

export const postArticle = (params) => async () => {
  return await service.postArticle(params);
};

export const deleteArticle = (params) => async () => {
  return await service.deleteArticle(params);
};

export const putArticle = (params) => async () => {
  return await service.putArticle(params);
};

export const getArticleList = (params) => async () => {
  return await service.getArticleList(params);
};

export const getArticleInfo = (params) => async () => {
  return await service.getArticleInfo(params);
};
