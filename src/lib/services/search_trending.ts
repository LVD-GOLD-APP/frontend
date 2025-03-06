import { api } from "./config";
import { SearchTrending } from "./types";

export const listSearchTrending = async (): Promise<SearchTrending[]> => {
  try {
    const response = await api.get<{ data: SearchTrending[] }>("/xu-huong-tim-kiems");
    return response.data.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách xu-huong-tim-kiems:", error);
    return [];
  }
};
