import { api } from "./config";
import { FooterData } from "./types";

export const listFooter = async (): Promise<FooterData | null> => {
  try {
    const response = await api.get<{ data: FooterData }>("/footers?populate=*");
    return Array.isArray(response.data.data) ? response.data.data[0]?.footer_data || null : null;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách footer:", error);
    return null;
  }
};
