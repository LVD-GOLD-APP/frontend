export type Category = {
  id: number;
  slug: string;
  banner: string;
  title: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  slug: string;
  url: string;
  description: string;
  isDiscount: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};
