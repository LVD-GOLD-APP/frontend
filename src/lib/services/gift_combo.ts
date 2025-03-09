import qs from "qs";
import { api } from "./config";
import { GiftCombo } from "./types";

export const listGiftCombo = async (): Promise<GiftCombo[]> => {
  try {
    const params = {
      populate: {
        image: {
          fields: ["url"],
        },
      },
    };

    const queryString = qs.stringify(params, { encode: false });

    const response = await api.get<{ data: GiftCombo[] }>(`/gift-combos?${queryString}`);

    return response.data.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách banners:", error);
    return [];
  }
};
