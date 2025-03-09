import { api } from "./config";
import { Banner } from "./types";
import qs from "qs";

export const listBanner = async (): Promise<Banner[]> => {
  try {
    const params = {
      populate: {
        image: {
          fields: ["url"],
        },
        image_mobile: {
          fields: ["url"],
        },
      },
    };

    const queryString = qs.stringify(params, { encode: false });

    const response = await api.get<{ data: Banner[] }>(`/banners?${queryString}`);

    return response.data.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách banners:", error);
    return [];
  }
};
