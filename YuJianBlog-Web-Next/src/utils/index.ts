import { ImageLoaderProps } from "next/image";

/**
 * next/image 图片 loader 适配 腾讯云 COS
 * @returns 
 */
export const imagesLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps): string => {
  return `${src}?imageMogr2/thumbnail/${width}x/rquality/${quality || 80}`;
};
