import { baseURL } from "./config";

const request = async (endpoint: string) => {
  return window
    .fetch(`${baseURL}${endpoint}`)
    .then(async (response) => {
      const result = await response.json();
      if (response.ok) return result.data;
      else return Promise.reject(result);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export default request;
