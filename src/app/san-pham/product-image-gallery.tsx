"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SanPhamMoiNhatPc from "@/assets/Banner-San-pham-moi-nhat-PC.jpg";
import TopSanPhamYeuThichPc from "@/assets/Banner-Top-san-pham-yeu-thich-PC.jpg";

const images = [SanPhamMoiNhatPc, TopSanPhamYeuThichPc];

export default function ProductImageGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  console.log(currentImage);
  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const selectImage = (index: number) => {
    setCurrentImage(index);
  };
  return (
    <div>
      <div className="relative rounded-md overflow-hidden mb-4">
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{ clickable: true }}
          thumbs={{ swiper: images[currentImage].src || "/placeholder.svg" }}
          className="relative"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square relative">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Product image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="prev-btn absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md"
          aria-label="Previous image"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="next-btn absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md"
          aria-label="Next image"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <Swiper spaceBetween={10} slidesPerView={4} freeMode watchSlidesProgress className="w-full">
        {images.map((image, index) => (
          <SwiperSlide key={index} className="cursor-pointer" onClick={() => selectImage(index)}>
            <div className="aspect-square relative border rounded-md overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
