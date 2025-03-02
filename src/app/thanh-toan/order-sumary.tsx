"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Gift, Plus, Minus } from "lucide-react"

const orderItems = [
  {
    id: 1,
    name: "Lắc tay bạc nữ đính pha lê Swarovski trái tim của biển LILI_579467 - Hồng",
    price: 10251000,
    quantity: 3,
    image: "/placeholder.svg?height=80&width=80",
  },
]

const giftItems = [
  {
    id: 1,
    name: "Quà Tặng: Bộ đóng gói cao cấp, ý nghĩa - L1",
    image: "/placeholder.svg?height=60&width=60",
    isLimited: true,
  },
  {
    id: 2,
    name: "Quà Tặng: Hộp trang sức bọc da Royal - L1",
    image: "/placeholder.svg?height=60&width=60",
    isLimited: true,
  },
  {
    id: 3,
    name: "Quà Tặng: Hộp đựng đa trang sức bọc nhung",
    image: "/placeholder.svg?height=60&width=60",
    isLimited: true,
  },
]

export default function OrderSummary() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">THÔNG TIN ĐƠN HÀNG</h2>

      {/* Order Items */}
      <div className="space-y-4 mb-6">
        {orderItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded-md" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium mb-2">{item.name}</h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-md">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Minus className="h-3 w-3" />
                  </Button>
                  <div className="w-12 text-center">{item.quantity}</div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <div className="text-red-600 font-medium">{new Intl.NumberFormat("vi-VN").format(item.price)}₫</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gift Items */}
      <div className="space-y-4 mb-6">
        {giftItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded-md" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm">{item.name}</h3>
                {item.isLimited && (
                  <Badge variant="secondary" className="text-xs">
                    SỐ CÓ HẠN
                  </Badge>
                )}
              </div>
              <div className="text-red-600 text-sm">0₫</div>
            </div>
          </div>
        ))}
      </div>

      {/* Coupon */}
      <div className="flex gap-2 mb-6">
        <Input placeholder="Mã ưu đãi" />
        <Button variant="secondary">Áp Dụng</Button>
      </div>

      <Separator className="mb-4" />

      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span>Tạm Tính</span>
          <span className="font-medium">{new Intl.NumberFormat("vi-VN").format(10251000)}₫</span>
        </div>
        <div className="flex justify-between">
          <span>Giao Hàng</span>
          <span className="text-green-600">Miễn Phí</span>
        </div>
      </div>

      <Separator className="mb-4" />

      {/* Final Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="font-medium">TỔNG</span>
        <span className="text-xl font-bold text-red-600">{new Intl.NumberFormat("vi-VN").format(10251000)}₫</span>
      </div>

      {/* Benefits */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-gray-600" />
          <span className="text-sm">Hoàn tiền nếu không hài lòng</span>
        </div>
        <div className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-gray-600" />
          <span className="text-sm">10 ngày đổi trả tận nơi</span>
        </div>
        <div className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-gray-600" />
          <span className="text-sm">Cam kết chất lượng sản phẩm</span>
        </div>
      </div>
    </Card>
  )
}