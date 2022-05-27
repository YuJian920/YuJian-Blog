import { useQuery } from "react-query";
import { useRouter } from 'next/router'
import { ArticleData } from "../type";
import request from "../utils/request";

export const useArticleList = () => {
  return useQuery<ArticleData[], Error>("article", () =>
    request("/api/article")
  );
};

export const useArticleDetail = (id = "") => {
  const router = useRouter();
  if (!id) id = router.query.id as string;

  return useQuery<ArticleData>(["article", { id }], () => request(`/api/article/${id}`), {
    enabled: !!id,
  });
};
