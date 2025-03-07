"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import { Navigation, Pagination, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Define the props interface
interface ProductImageGalleryProps {
  images?: string[]
}

export default function ProductImageGallery({ images = [] }: ProductImageGalleryProps) {
  // Use default placeholder images if no images are provided
  const imageUrls = images.length > 0 ? images : ["/placeholder.svg", "/placeholder.svg"]

  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1))
  }

  const selectImage = (index: number) => {
    setCurrentImage(index)
  }

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
          initialSlide={currentImage}
          onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
          className="relative"
        >
          {imageUrls.map((image, index) => (
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
          className="prev-btn absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md z-10"
          aria-label="Previous image"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="next-btn absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md z-10"
          aria-label="Next image"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {imageUrls.length > 1 && (
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          className="w-full"
          initialSlide={currentImage}
        >
          {imageUrls.map((image, index) => (
            <SwiperSlide
              key={index}
              className={`cursor-pointer ${currentImage === index ? "border-2 border-red-600" : ""}`}
              onClick={() => selectImage(index)}
            >
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
      )}
    </div>
  )
}

