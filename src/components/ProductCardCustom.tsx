import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product, VariantProduct } from "@/lib/services/types";
import { formatCurrency } from "@/lib/utils";

const ProductCardCustom = ({ item }: { item: Product }) => {
  const variants = Array.isArray(item.variants) ? item.variants : [];
  const [selectedVariant, setSelectedVariant] = useState<VariantProduct | null>(
    variants.length > 0 ? variants[0] : null
  );

  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2 hover:shadow-lg transition-transform duration-300 h-full">
      <Link href={`/san-pham/${item.slug}`} className="group">
        <div className="overflow-hidden rounded-t-xl">
          <Image
            src={selectedVariant?.image?.url || item.images[0]?.url || "/default-image.png"}
            width={400}
            height={400}
            className="aspect-square rounded-t-xl hover:scale-105 transition-transform duration-300"
            alt={item.title}
          />
        </div>
      </Link>

      <div className="flex flex-col flex-1 justify-between items-center w-full px-2">
        <Link href={`/san-pham/${item.slug}`} className="group">
          <span className="line-clamp-2 text-center hover:text-[#c60018] min-h-[48px]">{item.title}</span>
        </Link>

        <span className="text-[#c60018] font-semibold">{formatCurrency(selectedVariant?.price || item.price)}</span>

        <div className="min-h-[32px] flex items-center">
          {variants.length > 1 && (
            <div className="flex gap-2 mt-2">
              {variants.map((variant) => (
                <button
                  key={variant.id}
                  className={`w-6 h-6 rounded-full border ${
                    selectedVariant?.id === variant.id ? "border-[#c60018]" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: variant.color }}
                  onClick={() => setSelectedVariant(variant)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardCustom;
