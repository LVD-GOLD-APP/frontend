import ProductCardCustom from "@/components/ProductCardCustom";
import { IProduct } from "@/lib/types/IProduct";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SimilarProducts({ products }: { products: IProduct[] }) {
  return (
    <div className="relative">
      <button className="prev-btn absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300">
        ❮
      </button>
      <button className="next-btn absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300">
        ❯
      </button>

      <Swiper
        slidesPerView={4}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{ clickable: true }}
        loop
        modules={[Navigation]}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id} className="px-5">
            <ProductCardCustom item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
