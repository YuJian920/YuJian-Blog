import { useMutation, useQueryClient } from "react-query";
import { postCustomData } from "../api";
import type { BlogCustom } from "../type";

/**
 * 修改 样式
 * @returns
 */
export const useCustomEditAsync = () => {
  const queryClient = useQueryClient();
  return useMutation((params: BlogCustom) => postCustomData(params), {
    onSuccess: () => queryClient.invalidateQueries("blogCustomData"),
  });
};

export default useCustomEditAsync;
