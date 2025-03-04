"use client";
import SanPhamMoiNhatPc from "@/assets/Banner-San-pham-moi-nhat-PC.jpg";
import TopSanPhamYeuThichPc from "@/assets/Banner-Top-san-pham-yeu-thich-PC.jpg";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const SliderBanner = () => {
  return (
    <Swiper
      className="h-full w-full bg-[#EDEDED]"
      slidesPerView={1}
      navigation
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Image className="h-full" src={SanPhamMoiNhatPc} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image className="h-full" src={TopSanPhamYeuThichPc} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
