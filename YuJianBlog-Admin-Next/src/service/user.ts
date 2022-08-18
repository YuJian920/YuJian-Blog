import request from "../utils/request";

export const postUserRegister = (params: User) => {
  return request<{}>("/api/user/register", { method: "POST", data: params });
};

export const postUserLogin = (params: User) => {
  return request<UserResponse>("/api/user/login", {
    method: "POST",
    data: params,
  });
};

export const verifyLogin = () => {
  return request<{}>("/api/user/verify", { method: "POST" });
};

export const getUserList = () => {
  return request<User[]>("/api/user/list");
};
