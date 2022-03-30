import request from "../utils/request";

export const postUserRegister = (username, password) => {
  return request.post("/api/user/register", { username, password });
};

export const postUserLogin = ({ username, password }) => {
  return request.post("/api/user/login", { username, password });
};

export const verifyLogin = () => {
  return request.post("/api/user/verify");
};

export const getUserList = () => {
  return request.get("/api/user/list");
};