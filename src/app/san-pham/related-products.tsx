import Image from "next/image"
import { Plus } from "lucide-react"

// Define the related product interface
interface RelatedProduct {
  id: string | number
  name: string
  image?: string
  price: number
  originalPrice?: number
}

// Define the props interface
interface RelatedProductsProps {
  products?: RelatedProduct[]
}

// Default related products as fallback
const defaultRelatedProducts = [
  {
    id: 1,
    name: "Lắc tay bạc nữ đính pha lê Swarovski",
    image: "/placeholder.svg?height=100&width=100",
    price: 1139000,
    originalPrice: 1200000,
  },
  {
    id: 2,
    name: "Dây chuyền bạc nữ đính pha lê Swarovski",
    image: "/placeholder.svg?height=100&width=100",
    price: 979000,
    originalPrice: 1030000,
  },
  {
    id: 3,
    name: "Bông tai bạc nữ đính đá Swarovski",
    image: "/placeholder.svg?height=100&width=100",
    price: 762000,
    originalPrice: 800000,
  },
]

export default function RelatedProducts({ products: propProducts }: RelatedProductsProps) {
  const products = propProducts && propProducts.length > 0 ? propProducts : defaultRelatedProducts

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "₫"
  }

  const totalPrice = products.reduce((sum, product) => sum + product.price, 0)

  const originalTotalPrice = products.reduce((sum, product) => {
    const originalPrice = product.originalPrice || product.price
    return sum + originalPrice
  }, 0)

  const savings = originalTotalPrice - totalPrice
  const hasDiscount = savings > 0

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className="text-lg font-medium">Tổng giá: </div>
        {hasDiscount && <div className="text-gray-500 line-through text-sm">{formatPrice(originalTotalPrice)}</div>}
        <div className="text-red-600 font-bold">{formatPrice(totalPrice)}</div>
        {hasDiscount && <div className="text-green-600 text-sm">Tiết kiệm {formatPrice(savings)}</div>}
      </div>
      <div className="flex items-center gap-2">
        {products.map((product, index) => (
          <div key={product.id} className="flex items-center">
            {index > 0 && (
              <div className="mx-1">
                <Plus className="h-4 w-4 text-gray-400" />
              </div>
            )}
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <div className="relative w-20 h-20">
                <Image
                  src={product.image || "/placeholder.svg?height=100&width=100"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

