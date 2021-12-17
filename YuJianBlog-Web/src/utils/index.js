/**
 * 手写 require 获取图片地址
 * @param {*} dist 路径
 * @param {*} name 文件名
 * @returns 图片路径
 */
export const getImageUrl = (dist, name) => {
  return new URL(`../assets/${dist}/${name}`, import.meta.url).href;
};
