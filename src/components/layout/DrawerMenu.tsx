"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Divider } from "@heroui/divider";
import { Gift, Handshake, IdCard, Menu, Newspaper, ThumbsUp, UsersRound } from "lucide-react";
import { Button } from "../ui/button";
import DrawerHeroUI from "./DrawerHeroUI";

export const features = [
  { icon: IdCard, label: "Ưu đãi thành viên", url: "/member-benefits" },
  { icon: ThumbsUp, label: "Đánh giá từ Google", url: "/google-reviews" },
  { icon: Gift, label: "Quà tặng miễn phí", url: "/free-gifts" },
  { icon: Handshake, label: "Ưu đãi affiliate", url: "/affiliate-deals" },
];

export const categoriesList = [
  {
    title: "VÒNG - LẮC",
    items: [
      {
        title: "XU HƯỚNG TÌM KIẾM",
        links: [
          { name: "Lắc tay bạc nữ", url: "/bracelets/women" },
          { name: "Lắc tay bạc nam", url: "/bracelets/men" },
          { name: "Lắc tay bạc đôi", url: "/bracelets/couples" },
          { name: "Lắc chân bạc nữ", url: "/anklets/women" },
          { name: "Vòng pandora - Hạt charm bạc", url: "/pandora-charms" },
        ],
      },
      {
        title: "CHẤT LIỆU",
        links: [
          { name: "Bạc", url: "/materials/silver" },
          { name: "Đá quý", url: "/materials/gemstone" },
          { name: "Ngọc trai", url: "/materials/pearl" },
          { name: "Vàng", url: "/materials/gold" },
        ],
      },
      {
        title: "GIỚI TÍNH",
        links: [
          { name: "Nữ", url: "/gender/women" },
          { name: "Nam", url: "/gender/men" },
          { name: "Cặp đôi", url: "/gender/couples" },
          { name: "Trẻ em", url: "/gender/kids" },
        ],
      },
    ],
  },
  {
    title: "NHẪN",
    items: [
      {
        title: "XU HƯỚNG TÌM KIẾM",
        links: [
          { name: "Nhẫn bạc nữ", url: "/rings/women" },
          { name: "Nhẫn bạc nam", url: "/rings/men" },
          { name: "Nhẫn bạc đôi", url: "/rings/couples" },
        ],
      },
      {
        title: "CHẤT LIỆU",
        links: [
          { name: "Bạc", url: "/materials/silver" },
          { name: "Đá quý", url: "/materials/gemstone" },
          { name: "Ngọc trai", url: "/materials/pearl" },
          { name: "Vàng", url: "/materials/gold" },
        ],
      },
      {
        title: "GIỚI TÍNH",
        links: [
          { name: "Nữ", url: "/gender/women" },
          { name: "Nam", url: "/gender/men" },
          { name: "Cặp đôi", url: "/gender/couples" },
        ],
      },
    ],
  },
];

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  onOpen: () => void;
}

export const DrawerMenu = ({ isOpen, onOpenChange, onOpen }: Props) => {
  return (
    <div>
      <Menu strokeWidth={1} size={28} color="black" onClick={onOpen} className="cursor-pointer" />
      <DrawerHeroUI
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        body={
          <div className="h-full overflow-y-auto">
            <div>
              <Button variant="outline" className="bg-white border border-black">
                Sản phẩm đã xem
              </Button>
              <Divider className="my-4" />
              {/* Icons Grid */}
              <div className="grid grid-cols-4">
                {features.map(({ icon: Icon, label, url }, index) => (
                  <a key={index} href={url} className="flex flex-col items-center p-1 aspect-square">
                    <Icon size={42} strokeWidth={1} />
                    <h3 className="text-xs font-bold">{label}</h3>
                  </a>
                ))}
              </div>
            </div>
            {/* Danh mục sản phẩm */}
            {categoriesList.map((category, index) => (
              <Accordion key={index} className="bg-[#EDEDED]" type="multiple">
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>
                    <span className="grow">{category.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    {category.items.map(({ title, links }) => (
                      <div key={title} className="flex flex-col">
                        <h2 className="mt-3 mb-2">{title}</h2>
                        <Divider className="border-black mx-4 w-auto" />
                        {links.map(({ name, url }, idx) => (
                          <a key={idx} href={url} className="my-2">
                            {name}
                          </a>
                        ))}
                      </div>
                    ))}
                    <div className="flex flex-col">
                      <Button variant="outline" className="mx-4 w-auto bg-[#EDEDED] border border-black">
                        Xem tất cả
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}

            {/* Links */}
            {[
              { icon: Newspaper, label: "Tin tức", url: "/news" },
              { icon: UsersRound, label: "Về chúng tôi", url: "/about-us" },
            ].map(({ icon: Icon, label, url }, index) => (
              <a key={index} href={url} className="flex items-center m-4 gap-4">
                <Icon size={32} strokeWidth={1} />
                <h2>{label}</h2>
              </a>
            ))}
          </div>
        }
      />
    </div>
  );
};
