import { useQuery } from "react-query";
import { getUserList } from "../service/user";

/**
 * 获取 用户列表
 * @returns
 */
export const useUser = () => {
  return useQuery("userList", getUserList);
};
