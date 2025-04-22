// lib/api/new.ts

import instance from "../axios-interceptor";

export interface NewItem {
  menuCode: string;
  code: string;
  nameSearch: string;
  name: string;
  image: string | null;
  detail: string;
  description: string;
  seoMeta: string;
  seoDescription: string;
  seoTags: string;
  order: number;
  showFooter: boolean;
  lastModificationTime: string | null;
  lastModifierId: string | null;
  creationTime: string;
  creatorId: string;
  id: string;
}

export interface New {
  totalCount: number;
  items: NewItem[];
}

export const getNew = async (): Promise<New[]> => {
  try {
    const response = await instance<New[]>("/app/new");

    return response.data;
  } catch (error) {
    console.error("Lỗi gọi API getNew:", error);
    throw error;
  }
};
