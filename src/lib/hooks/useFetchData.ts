// 👈 Thêm dòng này vào đầu file

import { Banner, GiftCombo } from "./../services/types";
import { useEffect, useState } from "react";
import { listSearchTrending } from "@/lib/services/search_trending";
import { listProductDetail, listProducts } from "@/lib/services/products";
import { SearchTrending, Product, Blog } from "@/lib/services/types";
import { listBlogs } from "@/lib/services/blog";
import { listBanner } from "@/lib/services/banner";
import { listGiftCombo } from "../services/gift_combo";

export const useFetchData = (slug: string = "") => {
  const [searchTrending, setSearchTrending] = useState<SearchTrending[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [productDetail, setProductDetail] = useState<Product | null>(null);
  const [giftCombo, setGiftCombo] = useState<GiftCombo[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendingData, productData, blogData, bannerData, productDetailData, giftComboData] = await Promise.all([
          listSearchTrending(),
          listProducts(),
          listBlogs(),
          listBanner(),
          listProductDetail(slug),
          listGiftCombo(),
        ]);

        setSearchTrending(trendingData);
        setBlogs(blogData);
        setBanners(bannerData);
        setProductDetail(productDetailData);
        setGiftCombo(giftComboData);
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
  }, [slug]);

  return { searchTrending, products, blogs, banners, productDetail, giftCombo };
};
