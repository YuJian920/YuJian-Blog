import { ImageLoaderProps } from "next/image";

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

/**
 * next/image 图片 loader 适配 腾讯云 COS
 * @returns 
 */
export const imagesLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps): string => {
  return `${src}?imageMogr2/cut/${width}/rquality/${quality || 80}`;
};
