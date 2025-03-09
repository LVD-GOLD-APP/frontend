import { api } from "./config";
import { Product } from "./types";
import qs from "qs";

export const listProducts = async (): Promise<Product[]> => {
  try {
    const params = {
      populate: {
        variants: {
          fields: ["id", "color", "price", "price_2", "title"],
          populate: {
            image: {
              fields: ["url"],
            },
          },
        },
        images: {
          fields: ["url"],
        },
        related_products: {
          populate: {
            variants: {
              fields: ["id", "color", "price", "price_2", "title"],
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

export const listProductDetail = async (slug: string): Promise<Product | null> => {
  try {
    const products = await listProducts();

    const product = products.find((item) => item.slug === slug);

    return product || null;
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
    return null;
  }
};
