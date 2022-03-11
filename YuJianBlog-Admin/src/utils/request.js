import axios from "axios";
import { message } from "antd";
import { baseURL } from "./config";
import CookieHelper from "./token";

const request = axios.create({ baseURL, timeout: 5000 });

request.interceptors.request.use(
  (config) => {
    if (CookieHelper.get()) config.headers[authorization] = CookieHelper.get();
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    const result = response.data;
    if (result.code !== 0) {
      message.error(msg || "请求错误");
      return Promise.reject(result.msg || "请求错误");
    } else return result;
  },
  (error) => {
    const { msg, data } = error.response.data || {};
    const status = error.response.status;
    data && console.log("请求URL", data?.path);

    // 401 Token 失效
    if (status === 401) message.error(msg || "登录信息失效");
    else message.error(msg || "未知错误");
    return Promise.reject(msg || "未知错误");
  }
);

export default request;
