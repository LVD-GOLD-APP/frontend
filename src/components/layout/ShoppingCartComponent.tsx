"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Divider } from "@heroui/divider";
import { ShoppingCart } from "lucide-react";

export const ShoppingCartComponent = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart strokeWidth={1} size={28} color="black" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetDescription className="text-black">
            <div className="text-large">GIỎ HÀNG</div>
            <Divider className="my-4" />
            <div>Không có sản phẩm trong giỏ hàng</div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
