/**
 * 手写 require 获取图片地址
 * @param {*} dist 路径
 * @param {*} name 文件名
 * @returns 图片路径
 */
export const getImageUrl = (dist: string, name: string) => {
  return new URL(`../assets/${dist}/${name}`, import.meta.url).href;
};

/**
 * 获取对象中的键值对
 * @param {*} obj
 * @param {*} keys
 * @returns
 */
export const subset = (obj: object, keys: string[]) => {
  const filteredEntries = Object.entries(obj).filter(([key]) =>
    keys.includes(key)
  );
  return Object.fromEntries(filteredEntries);
};

/**
 * 处理时间格式
 * @param time
 * @returns
 */
export const splitTime = (time: string) => {
  return time
    .substring(0, time.length - 5)
    .split("T")
    .join(" ");
};
