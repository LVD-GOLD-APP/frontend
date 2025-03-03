"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CheckoutSteps from "../checkout-steps"

const specialOffers = [
  {
    id: 1,
    name: "Hộp quà tặng hình bông hoa hồng LILI_718846",
    originalPrice: 843000,
    salePrice: 284000,
    mainImage: "/placeholder.svg?height=400&width=400",
    thumbnails: [
      "/placeholder.svg?height=100&width=100&text=View+1",
      "/placeholder.svg?height=100&width=100&text=View+2",
      "/placeholder.svg?height=100&width=100&text=View+3",
      "/placeholder.svg?height=100&width=100&text=View+4",
    ],
  },
  {
    id: 2,
    name: "Hộp đựng trang sức gỗ cao cấp LILI_161301",
    originalPrice: 3604000,
    salePrice: 2162000,
    mainImage: "/placeholder.svg?height=400&width=400",
    thumbnails: [
      "/placeholder.svg?height=100&width=100&text=View+1",
      "/placeholder.svg?height=100&width=100&text=View+2",
      "/placeholder.svg?height=100&width=100&text=View+3",
      "/placeholder.svg?height=100&width=100&text=View+4",
    ],
    type: "3 ngăn",
  },
  {
    id: 3,
    name: "Hộp đựng trang sức bọc da quý tộc LILI_755345",
    originalPrice: 572000,
    salePrice: 192000,
    mainImage: "/placeholder.svg?height=400&width=400",
    thumbnails: [
      "/placeholder.svg?height=100&width=100&text=View+1",
      "/placeholder.svg?height=100&width=100&text=View+2",
      "/placeholder.svg?height=100&width=100&text=View+3",
      "/placeholder.svg?height=100&width=100&text=View+4",
    ],
    type: "Hộp nhẫn hoặc bông tai",
    colors: ["Đỏ"],
  },
  {
    id: 4,
    name: "Tủ hộp đựng đồ trang sức bọc da LILI_423965",
    originalPrice: 2685000,
    salePrice: 1611000,
    mainImage: "/placeholder.svg?height=400&width=400",
    thumbnails: [
      "/placeholder.svg?height=100&width=100&text=View+1",
      "/placeholder.svg?height=100&width=100&text=View+2",
      "/placeholder.svg?height=100&width=100&text=View+3",
      "/placeholder.svg?height=100&width=100&text=View+4",
    ],
    colors: ["Đen"],
  },
]

export default function SpecialOffersPage() {
  const router = useRouter()

  const handleSkip = () => {
    router.push("/thanh-toan/hoan-tat")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/logo.svg" alt="LILI Premium Jewelry" className="h-12" />
        </div>

        <div className="mb-8">
          <CheckoutSteps currentStep={2} />
        </div>

        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gray-100 py-3 mb-4">
            <h1 className="text-center font-medium">ƯU ĐÃI ĐẶC BIỆT DÀNH RIÊNG CHO QUANG</h1>
          </div>

          <div className="text-center mb-4 text-sm">
            Bạn chỉ được chọn duy nhất <span className="font-medium">1 ưu đãi</span>. Với số lượng có hạn, hãy{" "}
            <span className="font-medium">Thêm Ngay</span> ưu đãi bên dưới vào đơn hàng hoặc chọn{" "}
            <span className="font-medium">Bỏ Qua</span> ở dưới đây
          </div>

          <Button
            variant="ghost"
            onClick={handleSkip}
            className="w-full py-2 mb-6 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Bỏ Qua Ưu Đãi Này
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {specialOffers.map((offer) => (
              <div key={offer.id} className="border rounded p-4">
                <div className="relative aspect-square mb-3">
                  <Image
                    src={offer.mainImage || "/placeholder.svg"}
                    alt={offer.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="grid grid-cols-4 gap-2 mb-3">
                  {offer.thumbnails.map((thumbnail, index) => (
                    <div key={index} className="relative aspect-square border rounded">
                      <Image
                        src={thumbnail || "/placeholder.svg"}
                        alt={`${offer.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Product Info */}
                <h3 className="text-sm font-medium mb-2 min-h-[40px]">{offer.name}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-500 line-through text-sm">
                    {new Intl.NumberFormat("vi-VN").format(offer.originalPrice)}đ
                  </span>
                  <span className="text-red-600 font-bold">
                    {new Intl.NumberFormat("vi-VN").format(offer.salePrice)}đ
                  </span>
                </div>

                {/* Type Selection */}
                {offer.type && (
                  <div className="mb-3">
                    <Select defaultValue={offer.type}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Loại" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={offer.type}>{offer.type}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Color Selection */}
                {offer.colors && (
                  <div className="mb-3">
                    <Select defaultValue={offer.colors[0]}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Màu sắc" />
                      </SelectTrigger>
                      <SelectContent>
                        {offer.colors.map((color) => (
                          <SelectItem key={color} value={color}>
                            {color}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Video Sản Phẩm
                  </Button>
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={() => router.push("/thanh-toan/hoan-tat")}
                  >
                    THÊM NGAY
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 py-2 mb-6">
            <Button variant="ghost" onClick={handleSkip} className="w-full hover:bg-transparent">
              Bỏ Qua Ưu Đãi Này
            </Button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Biết đấy với những sản phẩm ở trên rất hiếm khi có mức ưu đãi như vậy. Khi bạn rời khỏi đây, ưu đãi này sẽ
            không còn nữa. Hãy nhấn <span className="font-medium">THÊM NGAY</span> để chớp lấy cơ hội này nhé!
          </p>
        </div>
      </div>
    </div>
  )
}

