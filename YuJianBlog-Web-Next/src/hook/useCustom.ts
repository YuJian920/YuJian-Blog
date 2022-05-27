import { useQuery } from "react-query";
import { BlogCustom } from "../type";
import request from "../utils/request";

export const useCustom = () => {
  return useQuery<BlogCustom[], Error>("blogCustom", () =>
    request("/api/blogCustom")
  );
};
