import Image from "next/image"
import { Plus } from "lucide-react"

const relatedProducts = [
  {
    id: 1,
    name: "Lắc tay bạc nữ đính pha lê Swarovski",
    image: "/placeholder.svg?height=100&width=100",
    price: "1.139.000₫",
  },
  {
    id: 2,
    name: "Dây chuyền bạc nữ đính pha lê Swarovski",
    image: "/placeholder.svg?height=100&width=100",
    price: "979.000₫",
  },
  {
    id: 3,
    name: "Bông tai bạc nữ đính đá Swarovski",
    image: "/placeholder.svg?height=100&width=100",
    price: "762.000₫",
  },
]

export default function RelatedProducts() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className="text-lg font-medium">Tổng giá: </div>
        <div className="text-gray-500 line-through text-sm">2.880.000₫</div>
        <div className="text-red-600 font-bold">2.736.000₫</div>
        <div className="text-green-600 text-sm">Tiết kiệm 144.000₫</div>
      </div>
      <div className="flex items-center gap-2">
        {relatedProducts.map((product, index) => (
          <div key={product.id} className="flex items-center">
            {index > 0 && (
              <div className="mx-1">
                <Plus className="h-4 w-4 text-gray-400" />
              </div>
            )}
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <div className="relative w-20 h-20">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

