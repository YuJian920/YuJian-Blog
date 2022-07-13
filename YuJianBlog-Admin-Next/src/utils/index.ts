/**
 * 快速生成填充数组
 * @param length 数组长度
 * @param data 填充内容
 * @returns Array
 */
export const newArray = (length: number, data = "1") => {
  return Array(length).fill(data);
};
