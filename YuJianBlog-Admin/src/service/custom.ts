import { BlogCustom } from "../type";
import request from "../utils/request";

export const getCustomData = () => {
  return request.get("/api/blogCustom");
};

export const postCustomData = (params: BlogCustom) => {
  return request.post("/api/blogCustom", params);
};
