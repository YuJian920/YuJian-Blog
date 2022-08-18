import qs from "qs";
import TokenHelper from "./tokenHelper";

interface RequestOptions extends RequestInit {
  data?: object | string;
}

const baseURL = "https://api.yujian.icu";

/**
 * fetch
 * @param path API Path
 * @param param request params
 * @returns
 */
const request = async <T>(
  path: string,
  { data, headers, ...customConfig }: RequestOptions = {}
): Promise<T> => {
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
      // 无权访问，可能 token 过期
      if (res.status === 401) {
        window.location.reload();
        TokenHelper.clean();
        return Promise.reject({ message: "请重新登录" });
      }

      const result: BaseResponse<T> = await res.json();
      if (result.code !== 0) return Promise.reject(result);

      if (res.ok) return result?.data;
      else return Promise.reject(result);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export default request;
