"use client";
import { useMemo } from "react";

import VeChungToi from "@/assets/Ve-chung-toi-banner_1f.jpg";
import { SliderBanner } from "@/components/layout/SliderBanner";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { useFetchData } from "@/lib/hooks/useFetchData";
import { Divider } from "@heroui/divider";
import Image from "next/image";
import Link from "next/link";
import MembershipBenefits from "./san-pham/membership-benefits";

export default function Home() {
  const { searchTrending, products } = useFetchData();
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
          {searchTrending.map((item, index) => (
            <Link key={index} href={`/${item.slug}`} className="group">
              <div className="flex flex-col items-center gap-4 group">
                <div className="overflow-hidden rounded-xl transition-transform duration-300 group-hover:-translate-y-2">
                  <Image
                    src={item.image.url}
                    width={400}
                    height={400}
                    className="aspect-square rounded-xl lg:w-[150px]"
                    alt={`${item.image.url}`}
                  />
                  <div className="absolute bg-gray-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="hover:text-[#c60018] uppercase">{item.title}</span>
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
