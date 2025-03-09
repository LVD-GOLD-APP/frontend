import { FooterData } from "./../services/types";

import { listBanner } from "@/lib/services/banner";
import { listBlogs } from "@/lib/services/blog";
import { listProductDetail, listProducts } from "@/lib/services/products";
import { listSearchTrending } from "@/lib/services/search_trending";
import { Blog, Product, SearchTrending } from "@/lib/services/types";
import { useEffect, useState } from "react";
import { listFooter } from "../services/footer";
import { listGiftCombo } from "../services/gift_combo";
import { Banner, GiftCombo } from "./../services/types";

export const useFetchData = (slug: string = "") => {
  const [searchTrending, setSearchTrending] = useState<SearchTrending[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [productDetail, setProductDetail] = useState<Product | null>(null);
  const [giftCombo, setGiftCombo] = useState<GiftCombo[]>([]);
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendingData, productData, blogData, bannerData, productDetailData, giftComboData, footer] =
          await Promise.all([
            listSearchTrending(),
            listProducts(),
            listBlogs(),
            listBanner(),
            listProductDetail(slug),
            listGiftCombo(),
            listFooter(),
          ]);

        setSearchTrending(trendingData);
        setBlogs(blogData);
        setBanners(bannerData);
        setProductDetail(productDetailData);
        setGiftCombo(giftComboData);
        setFooterData(footer);
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

  return { searchTrending, products, blogs, banners, productDetail, giftCombo, footerData };
};
