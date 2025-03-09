import { ImageType } from "../services/types";

export type IBanner = {
  id: number;
  slug: string;
  image: ImageType;
  image_mobile: ImageType;
};
