"use client";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { SliderBanner } from "@/components/layout/SliderBanner";
import { Button } from "@/components/ui/button";
import { Divider } from "@heroui/divider";
import MembershipBenefits from "./san-pham/membership-benefits";
import { listCategories } from "@/lib/services/categories";
import { listProducts } from "../lib/services/products";
import { Category, Product } from "../lib/services/types";
import LacTay from "@/assets/Lac-tay-cap-doi-bac-dinh-da-CZ-trai-tim-cua-bien-Erasmus-LILI_199377_3-400x400.jpg";
import VeChungToi from "@/assets/Ve-chung-toi-banner_1f.jpg";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

const useFetchData = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    listCategories().then(setCategories);
    listProducts().then((data) => {
      setProducts(
        data.map((product) => ({
          ...product,
          price: product.price ?? Math.floor(Math.random() * 100000) + 10,
        }))
      );
    });
  }, []);

  return { categories, products };
};

const ProductGrid = ({
  title,
  items,
  showViewAll = false,
  urlAll,
}: {
  title: string;
  items: Product[];
  showViewAll?: boolean;
  urlAll?: string;
}) => (
  <>
    <div className="flex items-center gap-2 max-w-[1420px] w-full mx-auto">
      <Divider className="my-4 shrink" />
      <p className="whitespace-nowrap text-xl">{title}</p>
      <Divider className="my-4 shrink" />
    </div>
    <div className="max-w-[1420px] mx-auto grid grid-cols-2 gap-4 p-4 text-sm md:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2 hover:shadow-lg transition-transform duration-300"
        >
          <Link href={`/${item.slug}`} className="group">
            <div className="overflow-hidden rounded-t-xl">
              <Image
                src={item.url || LacTay}
                className="aspect-square rounded-t-xl hover:scale-105 transition-transform duration-300"
                alt={item.title}
              />
            </div>
          </Link>
          <Link href={`/${item.slug}`} className="group">
            <span className="line-clamp-2 text-center md:px-2 hover:text-[#c60018]">{item.title}</span>
          </Link>
          <span className="text-[#c60018] font-semibold">{formatCurrency(item.price)}</span>
        </div>
      ))}
      {showViewAll && (
        <Button variant="black" className="col-span-full bg-white border border-black place-self-center">
          <Link href={urlAll || "/"} className="group">
            Xem tất cả {title.toLowerCase()}
          </Link>
        </Button>
      )}
    </div>
  </>
);

export default function Home() {
  const { categories, products } = useFetchData();

  const featuredProducts = useMemo(() => products.slice(0, 4), [products]);

  return (
    <>
      <div className="h-[34rem] md:h-[40rem]">
        <SliderBanner />
      </div>

      <MembershipBenefits />

      <div>
        <div className="flex items-center gap-2 max-w-[1420px] w-full mx-auto">
          <Divider className="my-4 shrink" />
          <p className="whitespace-nowrap text-xl">XU HƯỚNG TÌM KIẾM</p>
          <Divider className="my-4 shrink" />
        </div>

        <div className="max-w-[1420px] lg:px-[100px] mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-3 xl:grid-cols-6">
          {(categories || []).map((item, index) => (
            <Link key={index} href={`/${item.slug}`} className="group">
              <div className="flex flex-col items-center gap-4 group">
                <div className="overflow-hidden rounded-xl transition-transform duration-300 group-hover:-translate-y-2">
                  <Image src={LacTay} className="aspect-square rounded-xl lg:w-[150px]" alt={item.banner} />
                  <div className="absolute bg-gray-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="hover:text-[#c60018]">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ProductGrid title="Sản phẩm yêu thích nhất" items={products} showViewAll urlAll="san-pham-duoc-yeu-thich-nhat" />
      <ProductGrid title="Sản phẩm mới" items={featuredProducts} showViewAll />
      <ProductGrid title="Sản phẩm khuyến mãi" items={featuredProducts} showViewAll />

      <div
        className="size-full flex flex-col justify-center gap-4 p-4"
        style={{ backgroundImage: `url(${VeChungToi.src})` }}
      >
        <h2 className="text-2xl text-center font-medium">LiLi - Premium Jewelry - Trang Sức Cao Cấp</h2>
        <p className="text-center">
          Đến với LiLi, trang sức không chỉ là một phụ kiện – đó là hiện thân của niềm đam mê, tình yêu của chúng tôi.
        </p>
        <Button variant="black" className="bg-white border border-black place-self-center">
          Về chúng tôi
        </Button>
      </div>
    </>
  );
}
