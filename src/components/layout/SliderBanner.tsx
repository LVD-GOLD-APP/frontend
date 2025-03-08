"use client";
import { useFetchData } from "@/lib/hooks/useFetchData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const SliderBanner = () => {
  const { banners } = useFetchData();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="swiper-custom">
      <Swiper
        className="h-full w-full bg-[#EDEDED]"
        slidesPerView={1}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{ clickable: true }}
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <Link href={img.slug}>
              <Image src={isLargeScreen ? img.image.url : img.image_mobile.url} alt="" width={1920} height={1080} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
