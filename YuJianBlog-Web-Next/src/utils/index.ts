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
