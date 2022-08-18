import request from "../../../../utils/request";
import type { BlogCustom } from "../type";

export const getCustomData = () => {
  return request<BlogCustom[]>("/api/blogCustom");
};

export const postCustomData = (params: BlogCustom) => {
  return request<{}>("/api/blogCustom", { method: "POST", data: params });
};
