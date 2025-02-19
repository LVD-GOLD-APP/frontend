'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Gift, Handshake, IdCard, Menu, Newspaper, ThumbsUp, UsersRound } from "lucide-react";
import { Button } from "../ui/button";
import { Divider } from "@heroui/divider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export const DrawerCustom = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu strokeWidth={1} size={28} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetDescription className="text-black">
            <Button variant="outline" className="bg-white border border-black">
              Sản phẩm đã xem
            </Button>
            <Divider className="my-4" />
            <div className="grid grid-cols-4">
              <div className="flex flex-col items-center p-1 aspect-square">
                <IdCard size={42} strokeWidth={1} />
                <h3 className="text-xs font-bold">Ưu đãi thành viên</h3>
              </div>

              <div className="flex flex-col items-center p-1 aspect-square">
                <ThumbsUp size={42} strokeWidth={1} />
                <h3 className="text-xs font-bold">Đánh giá từ Google</h3>
              </div>

              <div className="flex flex-col items-center p-1 aspect-square">
                <Gift size={42} strokeWidth={1} />
                <h3 className="text-xs font-bold">Quà tặng miễn phí</h3>
              </div>

              <div className="flex flex-col items-center p-1 aspect-square">
                <Handshake size={42} strokeWidth={1} />
                <h3 className="text-xs font-bold">Ưu đãi affiliate</h3>
              </div>
            </div>
            <Divider className="my-4" />
            <h2 className="mb-4 text-xl">Danh mục sản phẩm</h2>
            <Accordion className="bg-[#EDEDED]" type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="grow">
                    VÒNG - LẮC
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col">
                    <h2 className="mt-3 mb-2">XU HƯỚNG TÌM KIẾM</h2>
                    <Divider className="border-black mx-4 w-auto" />
                    <span className="my-2">Lắc tay bạc nữ</span>
                    <span className="my-2">Lắc tay bạc nam</span>
                    <span className="my-2">Lắc tay bạc đôi</span>
                    <span className="my-2">Lắc chân bạc nữ</span>
                    <span className="my-2">Vòng pandora - Hạt charm bạc</span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="mt-3 mb-2">LOẠI</h2>
                    <Divider className="border-black mx-4 w-auto" />
                    <span className="my-2">Vòng - lắc tay</span>
                    <span className="my-2">Vòng - lắc chân</span>
                    <span className="my-2">Charm Pandora</span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="mt-3 mb-2">CHẤT LIỆU</h2>
                    <Divider className="border-black mx-4 w-auto" />
                    <span className="my-2">Bạc</span>
                    <span className="my-2">Đá quý</span>
                    <span className="my-2">Ngọc trai</span>
                    <span className="my-2">Vàng</span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="mt-3 mb-2">GIỚI TÍNH</h2>
                    <Divider className="border-black mx-4 w-auto" />
                    <span className="my-2">Nữ</span>
                    <span className="my-2">Nam</span>
                    <span className="my-2">Cặp đôi</span>
                    <span className="my-2">Trẻ em</span>
                  </div>
                  <div className="flex flex-col">
                    <Button variant="outline" className="mx-4 w-auto bg-[#EDEDED] border border-black">
                      Xem tất cả
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex items-center m-4 gap-4">
              <Newspaper size={32} strokeWidth={1} />
              <h2>Tin tức</h2>
            </div>
            <div className="flex items-center m-4 gap-4">
              <UsersRound size={32} strokeWidth={1} />
              <h2>Về chúng tôi</h2>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}
