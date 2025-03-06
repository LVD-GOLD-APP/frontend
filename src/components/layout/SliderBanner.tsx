"use client";
import SanPhamMoiNhatPc from "@/assets/Banner-San-pham-moi-nhat-PC.jpg";
import TopSanPhamYeuThichPc from "@/assets/Banner-Top-san-pham-yeu-thich-PC.jpg";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const SliderBanner = () => {
  const imgs = [SanPhamMoiNhatPc, TopSanPhamYeuThichPc];

  return (
    <Swiper
      className="h-full w-full bg-[#EDEDED]"
      slidesPerView={1}
      navigation={{
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {imgs.map((img, index) => {
        return (
          <SwiperSlide key={index}>
            <Image className="h-full" src={img} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
