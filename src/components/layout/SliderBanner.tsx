"use client";
import { useFetchData } from "@/lib/hooks/useFetchData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const SliderBanner = () => {
  const { banners } = useFetchData();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative swiper-custom">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="prev-btn absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white/60 p-3 rounded-full shadow-lg hover:bg-white"
      >
        ❮
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="next-btn absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white/60 p-3 rounded-full shadow-lg hover:bg-white"
      >
        ❯
      </button>

      <Swiper
        className="h-full w-full bg-[#EDEDED]"
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Navigation]}
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <Link href={img.slug}>
              <Image
                src={isLargeScreen ? img.image.url : img.image_mobile.url}
                alt="Slider Banner"
                width={1920}
                height={1080}
                className="w-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
