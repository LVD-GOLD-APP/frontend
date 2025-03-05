import { SliderBanner } from "@/components/layout/SliderBanner";
import { Divider } from "@heroui/divider";
import { Gift, Handshake, IdCard, ThumbsUp } from "lucide-react";
import LacTay from "@/assets/Lac-tay-cap-doi-bac-dinh-da-CZ-trai-tim-cua-bien-Erasmus-LILI_199377_3-400x400.jpg";
import VeChungToi from "@/assets/Ve-chung-toi-banner_1f.jpg";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MembershipBenefits from "./san-pham/membership-benefits";

export default function Home() {
  return (
    <>
      <div className="h-[34rem] md:h-[40rem]">
        <SliderBanner />
      </div>
      <MembershipBenefits />

      <div className="flex items-center gap-2 max-w-[1420px] w-full mx-auto">
        <Divider className="my-4 shrink" />
        <p className="whitespace-nowrap text-xl">XU HƯỚNG TÌM KIẾM</p>
        <Divider className="my-4 shrink" />
      </div>
      <div className="max-w-[1420px] mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-3 xl:grid-cols-6">
        {[
          { src: LacTay, label: "Vòng - Lắc", slug: "bong-tai" },
          { src: LacTay, label: "Vòng - Lắc", slug: "bong-tai" },
          { src: LacTay, label: "Vòng - Lắc", slug: "bong-tai" },
          { src: LacTay, label: "Vòng - Lắc", slug: "bong-tai" },
          { src: LacTay, label: "Vòng - Lắc", slug: "bong-tai" },
          { src: LacTay, label: "Vòng - Lắc", slug: "bong-tai" },
        ].map((item, index) => (
          <Link key={index} href={`/${item.slug}`} className="group">
            <div className="flex flex-col items-center gap-4 group">
              <div className="overflow-hidden rounded-xl transition-transform duration-300 group-hover:-translate-y-2">
                <Image src={item.src} className="aspect-square rounded-xl" alt={item.label} />
                <div className="absolute inset-0 bg-gray-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2 max-w-[1420px] w-full mx-auto">
        <Divider className="my-4 shrink" />
        <p className="whitespace-nowrap text-xl">SẢN PHẨM YÊU THÍCH NHẤT</p>
        <Divider className="my-4 shrink" />
      </div>
      <div className="max-w-[1420px] mx-auto grid grid-cols-2 gap-4 p-4 text-sm md:grid-cols-3 xl:grid-cols-4">
        {[
          { id: 1, src: LacTay, name: "Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944", price: "817.000 đ" },
          { id: 2, src: LacTay, name: "Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944", price: "817.000 đ" },
          { id: 3, src: LacTay, name: "Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944", price: "817.000 đ" },
          { id: 4, src: LacTay, name: "Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944", price: "817.000 đ" },
        ].map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2 transition-all duration-300 hover:shadow-lg"
          >
            <div className="overflow-hidden rounded-t-xl">
              <Image
                src={item.src}
                className="aspect-square rounded-t-xl transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <span className="line-clamp-2 text-center md:px-2">{item.name}</span>
            <span className="text-[#c60018] font-semibold">{item.price}</span>
          </div>
        ))}
        <Button variant="black" className="col-span-full bg-white border border-black place-self-center">
          Xem tất cả sản phẩm yêu thích nhất
        </Button>
      </div>
      <div className="flex items-center gap-2 max-w-[1420px] w-full mx-auto">
        <Divider className="my-4 shrink" />
        <p className="whitespace-nowrap text-xl">SẢN PHẨM MỚI</p>
        <Divider className="my-4 shrink" />
      </div>
      <div className="max-w-[1420px] mx-auto grid grid-cols-2 gap-4 p-4 text-sm md:grid-cols-3 xl:grid-cols-4">
        {[
          { id: 1, src: LacTay, name: "Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944", price: "817.000 đ" },
          { id: 2, src: LacTay, name: "Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944", price: "817.000 đ" },
          { id: 3, src: LacTay, name: "Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944", price: "817.000 đ" },
          { id: 4, src: LacTay, name: "Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944", price: "817.000 đ" },
        ].map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2 transition-all duration-300 hover:shadow-lg"
          >
            <div className="overflow-hidden rounded-t-xl">
              <Image
                src={item.src}
                className="aspect-square rounded-t-xl transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <span className="line-clamp-2 text-center md:px-2">{item.name}</span>
            <span className="text-[#c60018] font-semibold">{item.price}</span>
          </div>
        ))}
        <Button variant="black" className="col-span-full bg-white border border-black place-self-center">
          Xem tất cả sản phẩm mới
        </Button>
      </div>
      <div className="flex items-center gap-2 max-w-[1420px] w-full mx-auto">
        <Divider className="my-4 shrink" />
        <p className="whitespace-nowrap text-xl">SẢN PHẨM KHUYẾN MÃI</p>
        <Divider className="my-4 shrink" />
      </div>
      <div className="max-w-[1420px] mx-auto grid grid-cols-2 gap-4 p-4 text-sm md:grid-cols-3 xl:grid-cols-4">
        {[
          { id: 1, src: LacTay, name: "Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944", price: "817.000 đ" },
          { id: 2, src: LacTay, name: "Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944", price: "817.000 đ" },
          { id: 3, src: LacTay, name: "Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944", price: "817.000 đ" },
          { id: 4, src: LacTay, name: "Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944", price: "817.000 đ" },
        ].map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2 transition-all duration-300 hover:shadow-lg"
          >
            <div className="overflow-hidden rounded-t-xl">
              <Image
                src={item.src}
                className="aspect-square rounded-t-xl transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <span className="line-clamp-2 text-center md:px-2">{item.name}</span>
            <span className="text-[#c60018] font-semibold">{item.price}</span>
          </div>
        ))}
        <Button variant="black" className="col-span-full bg-white border border-black place-self-center">
          Xem tất cả sản phẩm khuyến mãi
        </Button>
      </div>
      <div
        className="size-full flex flex-col justify-center gap-4 p-4"
        style={{ backgroundImage: `url(${VeChungToi.src})` }}
      >
        <h2 className="text-2xl text-center font-medium">LiLi - Premium Jewelry - Trang Sức Cao Cấp</h2>
        <p className="text-center">
          Đến với LiLi, trang sức không chỉ là một phụ kiện – đó là hiện thân của niềm đam mê, tình yêu của chúng tôi,
          và cuối cùng, là món quà của LiLi dành cho bạn
        </p>
        <Button variant="black" className="col-span-full bg-white border border-black place-self-center">
          Về chúng tôi
        </Button>
      </div>
    </>
  );
}
