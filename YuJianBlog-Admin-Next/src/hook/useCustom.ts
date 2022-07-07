import { useMutation, useQuery, useQueryClient } from "react-query";
import type { BlogCustom } from "../service/custom";
import { getCustomData, postCustomData } from "../service/custom";

/**
 * 获取 样式
 * @returns
 */
export const useBlogCustom = () => {
  return useQuery("blogCustomData", getCustomData);
};

/**
 * 修改 样式
 * @returns
 */
export const useBlogCustomMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((params: BlogCustom) => postCustomData(params), {
    onSuccess: () => queryClient.invalidateQueries("blogCustomData"),
  });
};
