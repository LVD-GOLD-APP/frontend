"use client";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ImgMenu from "@/assets/Lac-tay-bac-nu-ma-bach-kim-dinh-pha-le-co-bon-la-LILI_612672_34.jpg";

interface LinkItem {
  name: string;
  url: string;
}

interface MenuItem {
  title: string;
  links: LinkItem[];
}

interface DropdownMenuProps {
  title: string;
  url?: string;
  image?: { src: string };
  items?: MenuItem[];
}

const DropdownMenu = ({ title, url = "", image, items }: DropdownMenuProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasItems = items && items.length > 0;

  return (
    <div
      className="duration-100 rounded-md text-center relative"
      onMouseEnter={() => hasItems && setIsHovered(true)}
      onMouseLeave={() => hasItems && setIsHovered(false)}
    >
      <Link href={url} className={`block truncate text-[14px] pt-4 pb-2 px-4 ${isHovered && "text-red-500"}`}>
        {title}
      </Link>

      {hasItems && isHovered && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed left-0 w-full bg-white shadow-md z-50 border-b border-t border-[#C4001F] overflow-hidden"
        >
          <div className="max-w-[1420px] mx-auto flex gap-10 p-3">
            {items.map(({ title, links }) => (
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
            {image && <Image src={image.src} alt="" width={300} height={300} />}
          </div>
        </motion.div>
      )}
    </div>
  );
};

function MenuHeader() {
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

  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center">
        {categoriesList.map((category, index) => (
          <DropdownMenu
            key={index}
            title={category.title}
            url={category.url}
            image={category.image}
            items={category.items}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuHeader;
