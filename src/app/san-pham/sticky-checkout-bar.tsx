"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function StickyCheckoutBar() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
      <div className="max-w-[1420px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 border rounded-md overflow-hidden flex-shrink-0">
              <Image src="/placeholder.svg?height=64&width=64" alt="Product thumbnail" fill className="object-cover" />
            </div>
            <div className="hidden sm:block">
              <h3 className="text-sm font-medium line-clamp-1 mb-1">
                Lắc tay bạc nữ đính pha lê Swarovski trái tim của biển LILI_579467
              </h3>
              <div className="text-red-600 font-medium">1.139.000₫</div>
            </div>
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none border-r" onClick={decrement}>
                <Minus className="h-3 w-3" />
              </Button>
              <div className="w-12 text-center">{quantity}</div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none border-l" onClick={increment}>
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-12 h-12 text-base font-medium"
              onClick={() => setCartOpen(true)}
            >
              MUA NGAY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
