import { api } from "./config";
import { SearchTrending } from "./types";
import qs from "qs";

export const listSearchTrending = async (): Promise<SearchTrending[]> => {
  try {
    const params = {
      populate: {
        image: {
          fields: ["url"],
        },
      },
    };

    const queryString = qs.stringify(params, { encode: false });

    const response = await api.get<{ data: SearchTrending[] }>(`/xu-huong-tim-kiems?${queryString}`);

    return response.data.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách xu-huong-tim-kiems:", error);
    return [];
  }
};
