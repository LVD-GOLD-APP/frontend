// lib/api/menu.ts

import instance from "../axios-interceptor";

interface LinkItem {
  name: string;
  url: string;
}

export interface MenuItem {
  id: string;
  name: string;
  items: LinkItem[];
}

export interface Category {
  id: string;
  code: string;
  creationTime: string;
  creatorId: string;
  description: string;
  images: string;
  items: MenuItem[];
  lastModificationTime: string | null;
  lastModifierId: string | null;
  meta: string;
  name: string;
  order: number;
  parentCode: string | null;
  showFooter: boolean;
  showHomePage: boolean;
  tags: string;
  url: string;
}

export const getMenuCategories = async (): Promise<Category[]> => {
  try {
    const response = await instance<Category[]>("/app/menu/categories");

    return response.data;
  } catch (error) {
    console.error("Lỗi gọi API getMenuCategories:", error);
    throw error;
  }
};
