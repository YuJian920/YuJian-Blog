import request from "../utils/request";

export interface BlogCustom {
  id: number;
  slogan: string;
  footer: string;
}

export const getCustomData = () => {
  return request("/api/blogCustom");
};

export const postCustomData = (params: BlogCustom) => {
  return request("/api/blogCustom", { method: "POST", data: params });
};
