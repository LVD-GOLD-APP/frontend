import { IProduct } from "@/lib/types/IProduct";
import axios from "axios";
import { useEffect, useState } from "react";

export function useProductDetail(slug: string) {
  const [productDetail, setProductDetail] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProductBySlug = async () => {
      try {
        const response = await axios(`http://localhost:1337/api/products`, {
          params: {
            filters: { slug: { $eq: slug } },
            populate: "*",
          },
        });

        if (response.data?.data?.length > 0) {
          setProductDetail(response.data.data[0]);
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
