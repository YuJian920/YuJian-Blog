import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import request from "../utils/request";

export const useArticleList = () => {
  return useQuery("article", () => request("/api/article"));
};

export const useArticleDetail = (id = "") => {
  const { pathname } = useLocation();
  const articleId = pathname.split("/")[2];
  if (!id) id = articleId;

  return useQuery(["article", { id }], () => request(`/api/article/${id}`), {
    enabled: !!id,
  });
};
