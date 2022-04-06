import request from "../utils/request";
import { User } from "../type";

export const postUserRegister = ({ username, password }: User) => {
  return request.post("/api/user/register", { username, password });
};

export const postUserLogin = ({ username, password }: User) => {
  return request.post("/api/user/login", { username, password });
};

export const verifyLogin = () => {
  return request.post("/api/user/verify");
};

export const getUserList = () => {
  return request.get("/api/user/list");
};
