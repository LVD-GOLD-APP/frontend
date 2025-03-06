import { api } from "./config";
import { Product } from "./types";

export const listProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<{ data: Product[] }>("/products");
    return response.data.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách products:", error);
    return [];
  }
};
