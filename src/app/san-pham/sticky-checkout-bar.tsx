"use client"

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Product } from "@/lib/services/types";

type Props = {
  productDetail: Product;
};

export default function StickyCheckoutBar({ productDetail }: Props) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "₫"
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
      <div className="max-w-[1420px] mx-auto px-[10%] py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden border rounded-md">
              <Image src={productDetail.images[0].url} alt="Product thumbnail" fill className="object-cover" />
            </div>
            <div className="hidden sm:block">
              <h3 className="mb-1 text-sm font-medium line-clamp-3">{productDetail.title}</h3>
              {/* <div className="font-medium text-red-600">1.139.000₫</div> */}
            </div>
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" className="w-8 h-8 border-r rounded-none" onClick={decrement}>
                <Minus className="w-3 h-3" />
              </Button>
              <div className="w-12 text-center">{quantity}</div>
              <Button variant="ghost" size="icon" className="w-8 h-8 border-l rounded-none" onClick={increment}>
                <Plus className="w-3 h-3" />
              </Button>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-12 h-12 text-base font-medium">
              MUA NGAY
            </Button>
          </div>
          <Button className="h-12 px-12 text-base font-medium text-white bg-red-600 hover:bg-red-700">MUA NGAY</Button>
        </div>
      </div>
    </div>
  )
}

