"use client";
import { ProductFilter } from "@/components/product-filter";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { FilterIcon } from "lucide-react";

export const DrawerFilter = () => {
  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <div className="flex gap-4 w-full border border-black rounded-md py-1 px-4 justify-center">
          <FilterIcon />
          <div className="">BỘ LỌC & SẮP XẾP</div>
        </div>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetDescription className="text-black pt-4 px-2">
            <ProductFilter />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
