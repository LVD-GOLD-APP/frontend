"use client";

import QuantitySelector from "@/app/san-pham/quantity-selector";
import { Divider } from "@heroui/divider";
import { ShoppingBag, Trash2Icon } from "lucide-react";
import Image from "next/image";
import DrawerHeroUI from "./DrawerHeroUI";
import { Button } from "../ui/button";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  onOpen: () => void;
}

export const ShoppingCartComponent = ({ isOpen, onOpenChange, onOpen }: Props) => {
  const mockData = [
    {
      url: "https://lili.vn/wp-content/uploads/2021/12/Bong-tai-bac-nu-tron-hinh-bong-hoa-5-canh-Cute-LILI_749976_1.jpg",
      title: "Bông tai bạc nữ tròn đính đá CZ hình bông hoa 5 cánh Cute LILI_749976",
      price: 900000,
      total: 900000,
    },
    {
      url: "https://lili.vn/wp-content/uploads/2021/12/Bong-tai-bac-nu-tron-hinh-bong-hoa-5-canh-Cute-LILI_749976_1.jpg",
      title: "Bông tai bạc nữ tròn đính đá CZ hình bông hoa 5 cánh Cute LILI_749976",
      total: 900000,
    },
  ];

  return (
    <div>
      <ShoppingBag strokeWidth={1} size={28} color="black" onClick={onOpen} className="cursor-pointer" />
      <DrawerHeroUI
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        header={
          <div className="z-10 border-b-2 pb-2">
            <div className="flex justify-center items-center gap-2">
              <ShoppingBag strokeWidth={1} size={28} color="black" />
              <div className="text-large">GIỎ HÀNG</div>
            </div>
          </div>
        }
        body={
          <div className="h-full overflow-y-auto">
            {mockData.length ? (
              <div>
                {mockData
                  .concat(mockData)
                  .concat(mockData)
                  .concat(mockData)
                  .map((data, index) => {
                    return (
                      <div key={index}>
                        <div className="flex gap-4 px-4">
                          <div>
                            <Image
                              className="border-1 border-gray-300 rounded-lg"
                              src={data.url}
                              alt={""}
                              width={200}
                              height={200}
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                              <div>{data.title}</div>
                              <div>
                                <Trash2Icon className="h-4 w-4" />
                              </div>
                            </div>
                            <div>
                              <div>Giá: {data.price}đ</div>
                              <div className="flex justify-between items-end">
                                <QuantitySelector />
                                <div>{data.total}đ</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="py-2">
                          <Divider />
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div>Không có sản phẩm trong giỏ hàng</div>
            )}
          </div>
        }
        footer={
          <div className="w-full">
            <div className="flex justify-between">
              <div className="text-[20px]">Tổng giá</div>
              <div className="text-[20px] text-[#C60018]">8.861.000₫</div>
            </div>
            <div className="pt-2">
              <Button className="text-[20px] bg-[#C60018] border-none text-white w-full">THANH TOÁN</Button>
            </div>
          </div>
        }
      />
    </div>
  );
};
