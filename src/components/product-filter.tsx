"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function ProductFilter() {
  const [priceRange, setPriceRange] = useState([0, 5000000]);

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const formatPrice = (price: number) => {
    return (
      new Intl.NumberFormat("vi-VN", {
        style: "decimal",
        maximumFractionDigits: 0,
      }).format(price) + "đ"
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Bộ lọc sản phẩm</h3>
        <Button variant="outline" size="sm">
          Xóa tất cả
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Accordion type="multiple" className="flex gap-4">
          <AccordionItem value="price">
            <AccordionTrigger>Giá</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 w-64">
                <Slider defaultValue={[0, 5000000]} max={5000000} step={100000} onValueChange={handlePriceChange} />
                <div className="flex justify-between text-sm">
                  <span>{formatPrice(priceRange[0])}</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="material">
            <AccordionTrigger>Chất liệu</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2">
                <Checkbox id="material-1" />
                <Label htmlFor="material-1">Bạc 925</Label>
                <Checkbox id="material-2" />
                <Label htmlFor="material-2">Bạc mạ vàng</Label>
                <Checkbox id="material-3" />
                <Label htmlFor="material-3">Bạc mạ bạch kim</Label>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="style">
            <AccordionTrigger>Kiểu dáng</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2">
                <Checkbox id="style-1" />
                <Label htmlFor="style-1">Bông tai nụ</Label>
                <Checkbox id="style-2" />
                <Label htmlFor="style-2">Bông tai tròn</Label>
                <Checkbox id="style-3" />
                <Label htmlFor="style-3">Bông tai dài</Label>
                <Checkbox id="style-4" />
                <Label htmlFor="style-4">Bông tai kẹp</Label>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="stone">
            <AccordionTrigger>Đá</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2">
                <Checkbox id="stone-1" />
                <Label htmlFor="stone-1">Đá CZ</Label>
                <Checkbox id="stone-2" />
                <Label htmlFor="stone-2">Đá Moissanite</Label>
                <Checkbox id="stone-3" />
                <Label htmlFor="stone-3">Pha lê Swarovski</Label>
                <Checkbox id="stone-4" />
                <Label htmlFor="stone-4">Ngọc trai</Label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Button className="w-full mt-4">Áp dụng</Button>
    </div>
  );
}
