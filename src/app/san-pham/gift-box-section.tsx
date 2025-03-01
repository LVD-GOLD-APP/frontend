import Image from "next/image"
import { Gift } from "lucide-react"

const giftBoxes = [
  {
    id: 1,
    title: "Bộ đóng gói cao cấp, ý nghĩa",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "Hộp đựng trang sức bọc da Royal",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "Hộp đựng đa trang sức bọc nhung",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "Món quà bí mật đặc biệt Mystery",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function GiftBoxSection() {
  return (
    <div className="mb-8">
      <div className="bg-gray-100 p-3 rounded-md mb-4">
        <div className="flex items-center gap-2 font-medium text-gray-800">
          <Gift className="h-5 w-5 text-red-600" />
          <h3 className="uppercase">BỘ QUÀ CAO CẤP SỐ LƯỢNG CÓ HẠN</h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {giftBoxes.map((gift) => (
          <div key={gift.id} className="border border-gray-200 rounded-md p-3 flex items-center gap-3">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image src={gift.image || "/placeholder.svg"} alt={gift.title} fill className="object-cover" />
            </div>
            <p className="text-sm font-medium">{gift.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

