import axios from "axios";
import { getToken } from "@/utils/auth";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    if (this.$store.state.Token) {
      config.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;

    // 如果返回的状态码不为0
    if (res.code !== 0) {
      console.log("请求异常：未知错误", res.code);

      // 如果返回的状态码为-2，则Token失效
      if (res.code === -2) {
        console.log("请求异常：Token失效");
      }
      return Promise.reject(new Error(res.msg || "请求异常"));
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
