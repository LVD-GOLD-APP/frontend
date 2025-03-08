export type Category = {
  id: number;
  slug: string;
  banner: string;
  title: string;
};

export type Material = {
  id: number;
  title: string;
  slug: string;
};

export type TargetCustomers = {
  id: number;
  title: string;
  slug: string;
};

export type Image = {
  id: number;
  url: string;
};

export type VariantProduct = {
  id: number;
  color: string;
  price: number;
  price_2: number;
  image: Image;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  slug: string;
  url: string;
  images: Image[];
  description: string;
  isDiscount: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  category: Category;
  material: Material;
  targetCustomers: TargetCustomers;
  variants: VariantProduct[];
};

export type SearchTrending = {
  id: number;
  slug: string;
  title: string;
  image: Image;
};

export type Blog = {
  id: string;
  title: string;
  description: string;
  slug: string;
};

export type Banner = {
  id: number;
  slug: string;
  image: Image;
  image_mobile: Image;
};
