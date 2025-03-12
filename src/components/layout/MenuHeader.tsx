"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Divider } from "@heroui/divider";

import ImgMenu from "@/assets/Lac-tay-bac-nu-ma-bach-kim-dinh-pha-le-co-bon-la-LILI_612672_34.jpg";
import Image from "next/image";

const categoriesList = [
  {
    title: "VÒNG - LẮC",
    url: "",
    image: ImgMenu,
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
        title: "LOẠI",
        links: [
          { name: "Vòng - Lắc tay", url: "" },
          { name: "Vòng - Lắc chân", url: "" },
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
    url: "",
    image: ImgMenu,
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
  {
    title: "DÂY CHUYỀN",
    url: "",
  },
  {
    title: "BÔNG TAI",
    url: "",
  },
  {
    title: "KHUYÊN XỎ",
    url: "",
  },
  {
    title: "TRANG SỨC ĐÔI",
    url: "",
  },
  {
    title: "TRANG SỨC BỘ",
    url: "",
  },
  {
    title: "PHONG THUỶ",
    url: "",
  },
  {
    title: "QUÀ TẶNG",
    url: "",
  },
  {
    title: "PHỤ KIỆN",
    url: "",
  },
  {
    title: "SẢN PHẨM MỚI",
    url: "",
  },
];

function MenuHeader() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-4 justify-center">
        {categoriesList.map((category, index) => {
          const hasItems = category.items && category.items.length > 0;

          return (
            <div
              key={index}
              className="duration-100 rounded-md text-center relative"
              onMouseEnter={() => hasItems && setHoveredIndex(index)}
              onMouseLeave={() => hasItems && setHoveredIndex(null)}
            >
              <Link href={category.url} className="block truncate text-[14px] pt-4 pb-2 mr-5">
                {category.title}
              </Link>

              {hasItems && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={hoveredIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="fixed left-0 w-full bg-white shadow-md z-50 border-b border-t border-[#C4001F] overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="max-w-[1420px] mx-auto flex gap-10 p-3">
                    {category.items.map(({ title, links }) => (
                      <div key={title} className="flex flex-col items-start w-full">
                        <h2 className="mt-3 mb-2 font-bold truncate">{title}</h2>
                        <Divider />
                        {links.map(({ name, url }, idx) => (
                          <Link key={idx} href={url} className="my-2 block hover:text-blue-500">
                            {name}
                          </Link>
                        ))}
                      </div>
                    ))}
                    {category.image && <Image src={category.image.src} alt="" width={300} height={300} />}
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuHeader;
