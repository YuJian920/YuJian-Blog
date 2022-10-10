import Image from "next/image";
import { imagesLoader } from "../../utils";
import type { BlogImageType } from "./type";

export default ({ height, imageUrl, imageAlt, radius }: BlogImageType) => (
  <div style={{ position: "relative", height, width: "100%" }}>
    <Image
      style={{ borderTopLeftRadius: radius, borderTopRightRadius: radius }}
      loader={imagesLoader}
      src={imageUrl || ""}
      layout="fill"
      alt={imageAlt || "Article Images"}
    />
  </div>
);
