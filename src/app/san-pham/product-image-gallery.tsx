"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/placeholder.svg?height=500&width=500",
  "/placeholder.svg?height=500&width=500&text=Image+2",
  "/placeholder.svg?height=500&width=500&text=Image+3",
  "/placeholder.svg?height=500&width=500&text=Image+4",
]

export default function ProductImageGallery() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const selectImage = (index: number) => {
    setCurrentImage(index)
  }

  return (
    <div>
      <div className="relative rounded-md overflow-hidden mb-4">
        <div className="aspect-square relative">
          <Image
            src={images[currentImage] || "/placeholder.svg"}
            alt="Product image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`border rounded-md overflow-hidden ${
              currentImage === index ? "border-primary" : "border-gray-200"
            }`}
          >
            <div className="aspect-square relative">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

