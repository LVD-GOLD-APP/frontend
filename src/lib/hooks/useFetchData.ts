 // 👈 Thêm dòng này vào đầu file

import { Banner } from "./../services/types";
import { useEffect, useState } from "react";
import { listSearchTrending } from "@/lib/services/search_trending";
import { listProductDetail, listProducts } from "@/lib/services/products";
import { SearchTrending, Product, Blog } from "@/lib/services/types";
import { listBlogs } from "@/lib/services/blog";
import { listBanner } from "@/lib/services/banner";

export const useFetchData = (slug: string) => {
  const [searchTrending, setSearchTrending] = useState<SearchTrending[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [productDetail, setProductDetail] = useState<Product | null>(null); // 👈 Khởi tạo mặc định là null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendingData, productData, blogData, bannerData, productDetailData] = await Promise.all([
          listSearchTrending(),
          listProducts(),
          listBlogs(),
          listBanner(),
          listProductDetail(slug),
        ]);

        setSearchTrending(trendingData);
        setBlogs(blogData);
        setBanners(bannerData);
        setProductDetail(productDetailData);
        setProducts(
          productData.map((product) => ({
            ...product,
            price: product.price ?? Math.floor(Math.random() * 100000) + 10,
          }))
        );
      } catch (error) {
        console.error("Lỗi khi fetch data:", error);
      }
    };

    fetchData();
  }, [slug]); // 👈 Thêm slug vào dependency array để chạy lại khi slug thay đổi

  return { searchTrending, products, blogs, banners, productDetail };
};
