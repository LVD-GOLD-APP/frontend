export interface ISearchTrend {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail: Thumbnail;
  slug: string;
}

export interface Thumbnail {
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
  thumbnail: Thumbnail2;
}

export interface Thumbnail2 {
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
