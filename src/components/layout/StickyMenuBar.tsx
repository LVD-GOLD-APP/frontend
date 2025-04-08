"use client";

import { useDisclosure } from "@heroui/react";
import { Crown, Gift, Home, Menu, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { DrawerMenu } from "./DrawerMenu";

const menuItems = [
  { label: "Trang Chủ", icon: <Home size={20} />, type: "link", href: "/" },
  { label: "Danh Mục", icon: <Menu size={20} />, type: "drawer" },
  { label: "Best Seller", icon: <Crown size={20} />, type: "link", href: "/best-seller", active: true },
  { label: "Ưu Đãi", icon: <Gift size={20} />, type: "link", href: "/uu-dai" },
  { label: "Tài Khoản", icon: <User size={20} />, type: "link", href: "/account" },
];

function StickyMenuBar() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const router = useRouter();

  const handleClick = (item: {
    label: string;
    icon: React.ReactNode;
    type: string;
    href?: string;
    active?: boolean;
  }) => {
    if (item.type === "link") {
      router.push(item.href ?? "");
    } else if (item.type === "drawer") {
      onOpenChange();
    }
  };

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
        <div className="max-w-[1420px] mx-auto px-4 py-2 flex justify-between items-center">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center flex-1 px-2 py-2 rounded-md cursor-pointer ${
                item.active ? "bg-red-600 text-white" : "text-black hover:text-red-600"
              }`}
              onClick={() => handleClick(item)}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <DrawerMenu isOpen={isOpen} onOpenChange={onOpenChange} onOpen={onOpen} />
    </>
  );
}

export default StickyMenuBar;
