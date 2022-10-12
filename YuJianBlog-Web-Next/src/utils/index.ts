import { ImageLoaderProps } from "next/image";
import QProgress from "qier-progress";

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

export const qprogress = new QProgress({
  colorful: false,
  color: "#7FABCF",
});

export const qprogressStart = () => {
  qprogress.finish();
  qprogress.start();
  qprogress.inc(0.2);
};
