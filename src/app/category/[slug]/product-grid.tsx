"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const products = [
  {
    id: "255281",
    name: "Dây chuyền bạc nữ mảnh nhỏ đính đá CZ hình trái tim cách điệu NoAn LILI_255281",
    price: 952000,
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=View+2",
      "/placeholder.svg?height=400&width=400&text=View+3",
    ],
    colors: ["silver", "gold", "rose-gold"],
  },
  {
    id: "831944",
    name: "Dây chuyền bạc nữ đính đá CZ cá tính LILI_831944",
    price: 1023000,
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=View+2",
      "/placeholder.svg?height=400&width=400&text=View+3",
    ],
    colors: ["silver"],
  },
  {
    id: "528145",
    name: "Dây chuyền đôi bạc tình yêu tình bạn thân BFF đính đá CZ Forever Love LILI_528145",
    price: 2098000,
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=View+2",
      "/placeholder.svg?height=400&width=400&text=View+3",
    ],
    colors: ["silver", "gold"],
  },
  {
    id: "413858",
    name: "Dây chuyền bạc nữ đính kim cương Moissanite trơn cách điệu LILI_413858",
    price: 1619000,
    priceRange: "1.619.000₫ - 1.620.000₫",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["silver", "rose-gold"],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=View+2",
      "/placeholder.svg?height=400&width=400&text=View+3",
    ],
  },
  {
    id: "295787",
    name: "Dây chuyền bạc nữ đính pha lê Swarovski trái tim đại dương LILI_295787",
    price: 979000,
    image: "/placeholder.svg?height=400&width=400",
    colors: ["pink", "purple", "blue", "green"],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=View+2",
      "/placeholder.svg?height=400&width=400&text=View+3",
    ],
  },
  {
    id: "106179",
    name: "Dây chuyền bạc đôi đính đá mã não rồng và phượng Water LILI_106179",
    price: 1759000,
    image: "/placeholder.svg?height=400&width=400",
    colors: ["white", "black"],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=View+2",
      "/placeholder.svg?height=400&width=400&text=View+3",
    ],
  },
  {
    id: "866671",
    name: "Dây chuyền bạc nữ đẹp đính pha lê Aurora trái tim hoa lá LILI_866671",
    price: 901000,
    image: "/placeholder.svg?height=400&width=400",
    colors: ["white", "blue"],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=View+2",
      "/placeholder.svg?height=400&width=400&text=View+3",
    ],
  },
  {
    id: "741969",
    name: "Dây chuyền đôi bạc cặp đính đá CZ công chúa hoàng tử LILI_741969",
    price: 1930000,
    image: "/placeholder.svg?height=400&width=400",
    colors: ["silver"],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=View+2",
      "/placeholder.svg?height=400&width=400&text=View+3",
    ],
  },
  {
    id: "295787",
    name: "Dây chuyền bạc nữ đính pha lê Swarovski trái tim đại dương LILI_295787",
    price: 979000,
    image: "/placeholder.svg?height=400&width=400",
    colors: ["pink", "purple", "blue", "green"],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=View+2",
      "/placeholder.svg?height=400&width=400&text=View+3",
    ],
  },
  {
    id: "295789",
    name: "Dây chuyền bạc nữ đính pha lê Swarovski trái tim đại dương LILI_295787",
    price: 979000,
    image: "/placeholder.svg?height=400&width=400",
    colors: ["pink", "purple", "blue", "green"],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=View+2",
      "/placeholder.svg?height=400&width=400&text=View+3",
    ],
  },
  {
    id: "295789",
    name: "Dây chuyền bạc nữ đính pha lê Swarovski trái tim đại dương LILI_295787",
    price: 979000,
    image: "/placeholder.svg?height=400&width=400",
    colors: ["pink", "purple", "blue", "green"],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=View+2",
      "/placeholder.svg?height=400&width=400&text=View+3",
    ],
  },
  {
    id: "295727",
    name: "Dây chuyền bạc nữ đính pha lê Swarovski trái tim đại dương LILI_295787",
    price: 979000,
    image: "/placeholder.svg?height=400&width=400",
    colors: ["pink", "purple", "blue", "green"],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=View+2",
      "/placeholder.svg?height=400&width=400&text=View+3",
    ],
  },
  // ... thêm các sản phẩm khác
]

interface ProductGridProps {
  itemsPerPage?: number
}

export default function ProductGrid({ itemsPerPage = 12 }: ProductGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({})

  const totalProducts = products.length
  const totalPages = Math.ceil(totalProducts / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayProducts = products.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleImageHover = (productId: string) => {
    if (!currentImageIndex[productId]) {
      setCurrentImageIndex({ ...currentImageIndex, [productId]: 0 })
    }
    const product = products.find((p) => p.id === productId)
    if (product) {
      const nextIndex = (currentImageIndex[productId] + 1) % product.images.length
      setCurrentImageIndex({ ...currentImageIndex, [productId]: nextIndex })
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {displayProducts.map((product) => (
          <Link
            key={product.id}
            href={`/san-pham/${product.id}`}
            className="group"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
              </div>

              <div className="p-3 text-center">
                <h3 className="text-sm leading-tight mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h3>

                <div className="text-red-600 font-bold mb-3">
                  {new Intl.NumberFormat("vi-VN").format(product.price)}₫
                </div>

                {product.colors && (
                  <div className="flex items-center justify-center gap-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={`${color}-${index}`}
                        className={cn("w-6 h-6 rounded-sm border transition-transform hover:scale-110", {
                          "bg-gray-200 border-gray-300": color === "silver",
                          "bg-yellow-500 border-yellow-600": color === "gold",
                          "bg-pink-300 border-pink-400": color === "rose-gold",
                        })}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-9 h-9"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => handlePageChange(page)}
              className={cn("w-9 h-9", currentPage === page ? "bg-red-600 hover:bg-red-700" : "")}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-9 h-9"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

