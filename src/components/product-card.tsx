import Image from "next/image"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"

import BoTrangSuc from "@/assets/Bo-trang-suc-bac-dinh-da-pha-le-hinh-trai-tim-LILI_941338-10.jpg";


interface ProductCardProps {
  id: string
  name: string
  price: number
  priceRange?: [number, number]
  image: string
  slug: string
  colors?: string[]
}

export function ProductCard({ id, name, price, priceRange, image, slug, colors }: ProductCardProps) {
  return (
    <Link href={`/san-pham/${slug}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={BoTrangSuc}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4">
          <h3 className="text-sm font-medium line-clamp-2 h-10 mb-2">{name}</h3>
          <div className="text-red-600 font-semibold">
            {priceRange ? (
              <span>
                {formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])}
              </span>
            ) : (
              <span>{formatCurrency(price)}</span>
            )}
          </div>

          {colors && colors.length > 0 && (
            <div className="flex gap-1 mt-2">
              {colors.map((color) => (
                <div
                  key={color}
                  className="w-5 h-5 rounded-full border border-gray-200"
                  style={{
                    backgroundColor:
                      color === "white"
                        ? "#f8f8f8"
                        : color === "pink"
                          ? "#ec4899"
                          : color === "purple"
                            ? "#a855f7"
                            : color === "blue"
                              ? "#3b82f6"
                              : color === "green"
                                ? "#22c55e"
                                : color,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

