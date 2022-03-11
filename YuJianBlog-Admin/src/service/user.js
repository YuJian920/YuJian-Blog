import request from "../utils/request";

export const postUserRegister = (username, password) => {
  return request.post("/api/user/register", { username, password });
};

export const postUserLogin = ({ username, password }) => {
  return request.post("/api/user/login", { username, password });
};
