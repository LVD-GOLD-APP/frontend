"use client"; // Đây là một Client Component

import { useState, useEffect } from "react";
import Logo from "@/assets/Logo.svg";
import { DrawerCustom } from "@/components/layout/DrawerCustom";
import MenuHeader from "@/components/layout/MenuHeader";
import { SliderTop } from "@/components/layout/SliderTop";
import { Button } from "@/components/ui/button";
import { Input } from "@heroui/input";
import { EyeIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartComponent } from "@/components/layout/ShoppingCartComponent";

export default function Header() {
  const [hideSlider, setHideSlider] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideSlider(true);
      } else {
        setHideSlider(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-20 bg-white border-b border-[#C4001F] transition-all duration-300">
      <div
        className={`h-9 overflow-hidden transition-all duration-300 ${
          hideSlider ? "h-0 opacity-0" : "h-9 opacity-100"
        }`}
      >
        <SliderTop />
      </div>

      <div className="flex justify-between w-full max-w-[1420px] mx-auto">
        <div className="px-2">
          <Link href={"/"}>
            <Image className="h-14 max-w-24" src={Logo} alt="" />
          </Link>
        </div>
        <div className="px-2 flex items-center w-[500px]">
          <Input type="search" variant="bordered" radius="sm" placeholder="Tìm sản phẩm" />
        </div>
        <div className="px-2 gap-4 flex justify-end items-center">
          <Button variant="black" className="bg-white border border-black lg:flex hidden">
            <UserIcon />
            Tài khoản
          </Button>
          <Button variant="black" className="bg-white border border-black lg:flex hidden">
            <EyeIcon />
            Sản phẩm đã xem
          </Button>
          <ShoppingCartComponent />
          <div className="flex lg:hidden">
            <DrawerCustom />
          </div>
        </div>
      </div>
      <div className="max-w-[1420px] px-10 mx-auto lg:flex hidden">
        <MenuHeader />
      </div>
    </div>
  );
}
