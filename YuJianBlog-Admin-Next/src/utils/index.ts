/**
 * 处理时间格式
 * @param time
 * @returns
 */
export const splitTime = (time: string) => {
  return time
    ?.substring(0, time.length - 5)
    .split("T")
    .join(" ");
};

/**
 * 快速生成填充数组
 * @param length 数组长度
 * @param data 填充内容
 * @returns Array
 */
export const newArray = (length: number, data = "1") => {
  Array(length).fill(data);
};
