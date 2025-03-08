import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
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

  return (
    <div>
      <div className="relative rounded-md overflow-hidden mb-4">
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={setMainSwiper}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
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
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="w-full"
        onSwiper={setThumbsSwiper}
      >
        {imagesToShow.map((image, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div
              className={`aspect-square relative border-2 rounded-md overflow-hidden ${
                index === currentIndex ? "border-red-500" : "border-gray-300"
              }`}
            >
              <Image src={image.url || "/placeholder.svg"} alt="Thumbnail" fill className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
