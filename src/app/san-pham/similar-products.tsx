"use client";

import ProductCardCustom from "@/components/ProductCardCustom";
import { Button } from "@/components/ui/button";
import { useFetchData } from "@/lib/hooks/useFetchData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function SimilarProducts() {
  const { products } = useFetchData();

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div ref={scrollContainerRef} className="flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar">
        {products.map((item) => (
          <ProductCardCustom key={item.id} item={item} />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
