import request from "@/utils/request";

export function getArticle() {
  return request({
    url: "/article/list",
    method: "get",
  });
}
