import instance from "@/lib/axios-interceptor";
import { favoriteProducts } from "@/lib/services/mock-data";
import { IMeta } from "@/lib/types/IPagination";
import { IProduct } from "@/lib/types/IProduct";
import qs from "qs";
import { useEffect, useState } from "react";

interface IProducts {
  data: IProduct[];
  meta: IMeta;
}

export function useProductDetail(slug: string) {
  const [productDetail, setProductDetail] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProductBySlug = async () => {
      const queryParams = qs.stringify(
        {
          filters: { slug: { $eq: slug } },
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
        },
        {
          encodeValuesOnly: true,
        }
      );

      try {
        // const response: IProducts = await instance(`/api/products?${queryParams}`);
        const response = favoriteProducts;

        if (response.data.length > 0) {
          setProductDetail(response.data[0]);
        } else {
          throw new Error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        return null;
      }
    };

    fetchProductBySlug();
  }, [slug]);

  return { productDetail };
}
