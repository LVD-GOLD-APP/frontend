// lib/api/menu.ts

import instance from "../axios-interceptor";

export interface Category {
  id: number;
  name: string;
  // Bạn có thể thêm các field khác tùy theo dữ liệu thực tế
}

export const getMenuCategories = async (): Promise<Category[]> => {
  try {
    const response = await instance<Category[]>("/api/app/menu/categories");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Lỗi gọi API getMenuCategories:", error);
    throw error;
  }
};
