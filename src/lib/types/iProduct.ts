import { ImageType } from "./types";

export interface IProduct {
  [x: string]: any;
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  description: string;
  isDiscount: boolean;
  variants: VariantProduct[];
  images: Image[];
  thumbnail: Thumbnail2;
  related_products: IProduct[];
  price: number;
  sub_title: string;
}

export interface VariantProduct {
  id: number;
  color: string;
  title: string;
  price: number;
  price_2: number;
  discount: number;
  image: ImageType;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: unknown;
  caption: unknown;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: unknown;
  provider: string;
  provider_metadata: unknown;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: unknown;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Thumbnail2 {
  id: number;
  documentId: string;
  name: string;
  alternativeText: unknown;
  caption: unknown;
  width: number;
  height: number;
  formats: Formats2;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: unknown;
  provider: string;
  provider_metadata: unknown;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Formats2 {
  thumbnail: Thumbnail3;
}

export interface Thumbnail3 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: unknown;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}
