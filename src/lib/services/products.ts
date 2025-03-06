import { api } from "./config";
import { Product } from "./types";
import qs from "qs";

export const listProducts = async (): Promise<Product[]> => {
  try {
    const params = {
      populate: {
        variants: {
          fields: ["id", "color", "price", "price_2"],
          populate: {
            image: {
              fields: ["url"],
            },
          },
        },
        images: {
          fields: ["url"],
        },
      },
    };

    const queryString = qs.stringify(params, { encode: false });

    const response = await api.get<{ data: Product[] }>(`/products?${queryString}`);

    return response.data.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    return [];
  }
};
