"use client";
import Link from "next/link";
import React, { useState } from "react";

const categoriesList = [
  {
    title: "VÒNG - LẮC",
    url: "",
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
    url: "",
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
    <div>
      <div className="flex flex-wrap relative gap-4 justify-center">
        {categoriesList.map((category, index) => (
          <div
            key={index}
            className="relative hover:text-red-400 duration-100 rounded-md max-w-[150px] text-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href={category.url} className="block truncate text-[14px] mr-5">
              {category.title}
            </Link>
            {category.items?.length && hoveredIndex === index && (
              <div className="flex gap-10 absolute top-3 left-0 w-fit bg-white shadow-md p-3 transition-transform duration-300 ease-out transform translate-y-2 z-50">
                {category.items?.map(({ title, links }) => (
                  <div key={title} className="flex flex-col w-full">
                    <h2 className="mt-3 mb-2 font-bold truncate">{title}</h2>
                    {links.map(({ name, url }, idx) => (
                      <Link key={idx} href={url} className="my-2 block hover:text-blue-500">
                        {name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuHeader;
