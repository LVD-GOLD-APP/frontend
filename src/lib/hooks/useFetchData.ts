import { useEffect, useState } from "react";
import { listSearchTrending } from "@/lib/services/search_trending";
import { listProducts } from "@/lib/services/products";
import { SearchTrending, Product, Blog } from "@/lib/services/types";
import { listBlogs } from "@/lib/services/blog";

export const useFetchData = () => {
  const [searchTrending, setSearchTrending] = useState<SearchTrending[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [trendingData, productData, blogData] = await Promise.all([
        listSearchTrending(),
        listProducts(),
        listBlogs(),
      ]);

      setSearchTrending(trendingData);
      setBlogs(blogData);
      setProducts(
        productData.map((product) => ({
          ...product,
          price: product.price ?? Math.floor(Math.random() * 100000) + 10,
        }))
      );
    };

    fetchData();
  }, []);

  return { searchTrending, products, blogs };
};
