import { api } from "./config";
import { Blog } from "./types";

export const listBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await api.get<{ data: Blog[] }>("/blogs");

    return response.data.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách blogs:", error);
    return [];
  }
};
