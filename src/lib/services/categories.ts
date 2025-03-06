import { api } from "./config";
import { Category } from "./types";

export const listCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get<{ data: Category[] }>("/categories");
    return response.data.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách categories:", error);
    return [];
  }
};
