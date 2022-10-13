import Image from "next/image";
import { imagesLoader } from "../../utils";
import type { BlogImageType } from "./type";

export default ({ imageUrl, imageAlt, radius }: BlogImageType) => (
  <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
    <Image
      style={{ borderTopLeftRadius: radius, borderTopRightRadius: radius }}
      loader={imagesLoader}
      src={imageUrl || ""}
      layout="fill"
      alt={imageAlt || "Article Images"}
    />
  </div>
);
