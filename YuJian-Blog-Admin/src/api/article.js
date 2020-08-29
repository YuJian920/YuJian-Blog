import request from "@/utils/request";

export function getArticle() {
  return request({
    url: "/article/list",
    method: "get"
  });
}

export function AddArticle(data) {
  return request({
    url: "/article/create",
    method: "post",
    data
  });
}
