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

export type ImageProduct = {
  id: number;
  url: string;
};

export type VariantProduct = {
  id: number;
  color: string;
  price: number;
  price_2: number;
  image: ImageProduct;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  slug: string;
  url: string;
  images: ImageProduct[];
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
  image: ImageProduct;
};

export type Blog = {
  id: string;
  title: string;
  description: string;
  slug: string;
};
