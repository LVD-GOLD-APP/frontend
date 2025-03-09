import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductImageGallery({
  imageList = [],
  selectedImage,
}: {
  imageList?: { url: string }[];
  selectedImage?: string | null;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);

  const imagesToShow = useMemo(() => {
    if (selectedImage) {
      return [{ url: selectedImage }, ...imageList.filter((img) => img.url !== selectedImage)];
    }
    return imageList;
  }, [selectedImage, imageList]);

  useEffect(() => {
    if (mainSwiper) {
      mainSwiper.slideTo(0);
      setCurrentIndex(0);
    }
  }, [selectedImage, mainSwiper]);

  const goToPrevSlide = () => {
    if (mainSwiper && currentIndex > 0) {
      mainSwiper.slideTo(currentIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (mainSwiper && currentIndex < imagesToShow.length - 1) {
      mainSwiper.slideTo(currentIndex + 1);
    }
  };

  return (
    <div>
      <div className="relative rounded-md overflow-hidden mb-4">
        <button
          ref={prevBtnRef}
          onClick={goToPrevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white/60 p-3 rounded-full shadow-lg hover:bg-white transition ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
        >
          ❮
        </button>
        <button
          ref={nextBtnRef}
          onClick={goToNextSlide}
          disabled={currentIndex === imagesToShow.length - 1}
          className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white/60 p-3 rounded-full shadow-lg hover:bg-white transition ${
            currentIndex === imagesToShow.length - 1 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
        >
          ❯
        </button>

        <Swiper
          modules={[Pagination, Thumbs]}
          pagination={{ clickable: true }}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          onSwiper={setMainSwiper}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
            thumbsSwiper?.slideTo(swiper.activeIndex); // Đồng bộ thumbnail
          }}
          loop={false} // Không cho phép lặp lại vô hạn
          className="relative"
        >
          {imagesToShow.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square relative">
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={`Product image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        modules={[FreeMode, Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.activeIndex);
          mainSwiper?.slideTo(swiper.activeIndex); // Đồng bộ ảnh chính
        }}
        className="w-full"
      >
        {imagesToShow.map((image, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div
              onClick={() => {
                mainSwiper?.slideTo(index);
                thumbsSwiper?.slideTo(index);
              }}
              className={`aspect-square relative border-2 rounded-md overflow-hidden cursor-pointer transition-opacity ${
                index === currentIndex ? "border-red-500 opacity-100" : "border-gray-300 opacity-50"
              }`}
            >
              <Image src={image.url || "/placeholder.svg"} alt="Thumbnail" fill className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

