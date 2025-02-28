"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

const similarProducts = [
  {
    id: 1,
    name: "Lắc tay bạc nữ mạ bạch kim đính đá CZ có 4 lá LILI_612672",
    price: "1.022.000₫",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["white", "purple", "blue"],
  },
  {
    id: 2,
    name: "Lắc tay bạc nữ đính pha lê Swarovski trái tim của biển LILI_579467",
    price: "1.139.000₫",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["pink", "blue", "purple"],
  },
  {
    id: 3,
    name: "Lắc tay bạc nữ đính đá CZ hình bông hoa hồng LILI_787759",
    price: "841.000₫ - 875.000₫",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["white", "blue"],
  },
  {
    id: 4,
    name: "Lắc tay bạc Ta S999 nữ có 4 lá cách điệu đẹp LILI_661577",
    price: "1.165.000₫ - 1.187.000₫",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["white", "blue"],
  },
]

const colorMap: Record<string, string> = {
  white: "bg-gray-200",
  pink: "bg-pink-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
}

export default function SimilarProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative">
      <div ref={scrollContainerRef} className="flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar">
        {similarProducts.map((product) => (
          <div key={product.id} className="flex-none w-[300px]">
            <div className="border rounded-lg p-4 h-full">
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.name}</h3>
              <div className="text-red-600 font-medium mb-2">{product.price}</div>
              <div className="flex gap-1">
                {product.colors.map((color, index) => (
                  <div key={index} className={`w-6 h-6 rounded-md ${colorMap[color]}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

