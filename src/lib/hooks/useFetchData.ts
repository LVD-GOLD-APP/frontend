import { useEffect, useState } from "react";
import { listSearchTrending } from "@/lib/services/search_trending";
import { listProducts } from "@/lib/services/products";
import { SearchTrending, Product } from "@/lib/services/types";

export const useFetchData = () => {
  const [searchTrending, setSearchTrending] = useState<SearchTrending[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [trendingData, productData] = await Promise.all([listSearchTrending(), listProducts()]);

      setSearchTrending(trendingData);
      setProducts(
        productData.map((product) => ({
          ...product,
          price: product.price ?? Math.floor(Math.random() * 100000) + 10,
        }))
      );
    };

    fetchData();
  }, []);

  return { searchTrending, products };
};
