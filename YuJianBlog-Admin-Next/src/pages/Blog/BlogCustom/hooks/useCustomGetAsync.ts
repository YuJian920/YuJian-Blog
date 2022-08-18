import { useQuery } from "react-query";
import { getCustomData } from "../api";

/**
 * 获取 样式
 * @returns
 */
const useCustomGetAsync = () => {
  return useQuery("blogCustomData", getCustomData);
};

export default useCustomGetAsync;
