import Image from "next/image"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"

interface RelatedProduct {
  id: string
  name: string
  price: number
  image: string
  slug: string
}

interface RelatedProductsProps {
  products: RelatedProduct[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/san-pham/${product.slug}`}
          className="group flex items-center gap-2 p-2 border rounded-lg hover:shadow-sm transition-shadow"
        >
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
            <p className="text-red-600 font-medium text-sm">{formatCurrency(product.price)}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

