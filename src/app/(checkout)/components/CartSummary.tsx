"use client";

import BenefitsSection from "@/app/(main)/san-pham/benefits-section";
import { Divider } from "@heroui/divider";
import Image from "next/image";

type CartItem = {
  id: string;
  name: string;
  sku: string;
  color: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

type GiftItem = {
  id: string;
  title: string;
  note: string;
  imageUrl: string;
};

type Props = {
  product: CartItem;
  gifts: GiftItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
};

export default function CartSummary({ product, gifts, subtotal, discount, shippingFee }: Props) {
  const total = subtotal - discount + shippingFee;

  const renderItem = (item: CartItem) => (
    <div className="flex items-start gap-3 border-b pb-3">
      <Image width={60} height={60} src={item.imageUrl} alt={item.name} className="w-14 h-14 object-cover rounded" />
      <div className="flex-1">
        <p className="font-medium leading-snug">
          {item.name}
          <br />
          {item.sku} - {item.color}
        </p>
      </div>
      <div className="text-right min-w-[80px] text-sm font-semibold">{item.price.toLocaleString("vi-VN")}₫</div>
    </div>
  );

  const renderGift = (gift: GiftItem) => (
    <div key={gift.id} className="flex items-start gap-3 border-b pb-3">
      <Image width={60} height={60} src={gift.imageUrl} alt={gift.title} className="w-14 h-14 object-cover rounded" />
      <div className="flex-1">
        <p className="font-medium text-sm">Quà Tặng: {gift.title}</p>
        <div className="text-xs mt-1">
          ƯU ĐÃI:
          <span className="bg-gray-700 text-white text-[10px] px-2 py-0.5 rounded ml-1">{gift.note}</span>
        </div>
      </div>
      <div className="text-right min-w-[80px] text-sm font-medium">0₫</div>
    </div>
  );

  return (
    <div className="space-y-4 text-sm text-gray-800 flex flex-col gap-2">
      {renderItem(product)}

      {gifts.map((gift) => renderGift(gift))}

      <div className="flex gap-2">
        <input type="text" placeholder="Mã ưu đãi" className="flex-1 border rounded px-3 py-2 text-sm outline-none" />
        <button className="px-6 py-2 bg-gray-700 text-white rounded text-sm font-medium">Áp Dụng</button>
      </div>

      <div className="border-t pt-3 space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Tạm Tính</span>
          <span>{subtotal.toLocaleString("vi-VN")}₫</span>
        </div>
        <div className="flex justify-between">
          <span>Thanh Toán Online</span>
          <span className="text-green-600">-{discount.toLocaleString("vi-VN")}₫</span>
        </div>
        <div className="flex justify-between">
          <span>Giao Hàng</span>
          <span>{shippingFee > 0 ? `${shippingFee.toLocaleString("vi-VN")}₫` : "Miễn Phí"}</span>
        </div>
        <div className="flex justify-between pt-2 border-t font-semibold text-red-600 text-base">
          <span>TỔNG</span>
          <span>{total.toLocaleString("vi-VN")}₫</span>
        </div>
      </div>

      <Divider />

      <BenefitsSection />
    </div>
  );
}
