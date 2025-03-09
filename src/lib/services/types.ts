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

export type ImageType = {
  id: number;
  url: string;
};

export type VariantProduct = {
  id: number;
  color: string;
  title: string;
  price: number;
  price_2: number;
  image: ImageType;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  slug: string;
  url: string;
  images: ImageType[];
  description: string;
  sub_title: string;
  isDiscount: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  category: Category;
  material: Material;
  targetCustomers: TargetCustomers;
  variants: VariantProduct[];
  related_products: Product[];
};

export type SearchTrending = {
  id: number;
  slug: string;
  title: string;
  image: ImageType;
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
  image: ImageType;
  image_mobile: ImageType;
};

export type GiftCombo = {
  id: number;
  title: string;
  image: ImageType;
};

export type FooterLink = {
  url: string;
  label: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type ContactInfo = {
  logo: string;
  phones: { number: string; note: string }[];
  email: string;
  address: string;
  note: string;
  working_hours: string;
  social_links: { platform: string; icon: string; url: string }[];
};

export type FeedbackSection = {
  title: string;
  button_url: string;
  button_text: string;
  description: string;
};

export type FooterData = {
  guides: FooterSection;
  contact_info: FooterSection;
  general_info: FooterSection;
  feedback_section: FeedbackSection;
};
