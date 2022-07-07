import qs from "qs";
import TokenHelper from "./tokenHelper";

interface RequestOptions extends RequestInit {
  data?: object | string;
}

const baseURL = "https://api.yujian.icu";

const request = async (
  path: string,
  { data, headers, ...customConfig }: RequestOptions = {}
) => {
  const token = TokenHelper.get();
  const defaultOptions: RequestOptions = {
    method: customConfig.method ? customConfig.method : "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type":
        customConfig.method === "GET"
          ? "application/json"
          : "application/x-www-form-urlencoded",
    },
    ...customConfig,
  };

  if (defaultOptions.method!.toUpperCase() === "GET") {
    path += `?${qs.stringify(data)}`;
  } else defaultOptions.body = qs.stringify(data || {});

  return fetch(baseURL + path, defaultOptions)
    .then(async (res) => {
      if (res.status === 401) {
        window.location.reload();
        TokenHelper.clean();
        return Promise.reject({ message: "请重新登录" });
      }

      const result = await res.json();
      if (result.code !== 0) {
        // showNotification({
        //   title: "请求异常",
        //   message: "请求出现未知异常，请稍后再试",
        //   style: { backgroundColor: "red" },
        // });
        return Promise.reject(result);
      }

      if (res.ok) return result?.data;
      else return Promise.reject(result);
    })
    .catch((error) => {
      // showNotification({
      //   title: "请求异常",
      //   message: "请求出现未知异常，请稍后再试",
      //   style: { backgroundColor: "red" },
      // });
      return Promise.reject(error);
    });
};

export default request;
