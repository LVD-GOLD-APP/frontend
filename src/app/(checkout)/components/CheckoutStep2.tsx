import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";

const products = [
  {
    id: 1,
    name: "Hộp quà tặng hoa hồng sáp Tesoro LILI_879955",
    oldPrice: 604000,
    newPrice: 192000,
    color: "Đen",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Tủ hộp đựng đồ trang sức bọc da LILI_655215",
    oldPrice: 1261000,
    newPrice: 594000,
    color: "Vàng nhạt",
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Bộ vệ sinh trang sức bạc cao cấp LILI_213946",
    oldPrice: 619000,
    newPrice: 384000,
    color: "",
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    name: "Hộp quà tặng đèn Led nai hoa hồng sáp LILI_334929",
    oldPrice: 1072000,
    newPrice: 384000,
    color: "",
    image: "/images/product4.jpg",
  },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

interface Props {
  onNextStep: () => void;
}

export default function CheckoutStep2({ onNextStep }: Props) {
  return (
    <div className="p-4">
      <h2 className="text-center text-xl font-bold mb-2">ƯU ĐÃI ĐẶC BIỆT DÀNH RIÊNG CHO {undefined}</h2>
      <p className="text-center text-sm text-gray-600 mb-4">
        Bạn chỉ được chọn duy nhất 1 <strong>ưu đãi</strong>. Với số lượng có hạn, hãy
        <strong> Thêm Ngay </strong>
        ưu đãi bên dưới vào đơn hàng hoặc chọn <strong>Bỏ Qua</strong> ở dưới đây
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl p-3 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-full h-48 relative mb-2">
                <Image src={product.image} alt={product.name} fill className="object-contain rounded" />
              </div>
              <h3 className="text-sm font-medium line-clamp-2 mb-1">{product.name}</h3>
              <div className="text-sm text-gray-400 line-through">{formatPrice(product.oldPrice)}</div>
              <div className="text-red-600 font-semibold text-lg mb-2">{formatPrice(product.newPrice)}</div>
            </div>
            {product.color && (
              <select className="border text-sm px-2 py-1 rounded mb-2">
                <option>{product.color}</option>
              </select>
            )}

            <div>
              <Button variant="bordered" className="text-sm mb-2 w-full border-1">
                ▶ Video Sản Phẩm
              </Button>
              <Button className="bg-red-600 text-white w-full">THÊM NGAY</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4 w-full">
        <Button className="w-full text-sm" onClick={onNextStep}>
          Bỏ Qua Ưu Đãi Này
        </Button>
        <div className="text-[16px] text-[#737373] pt-2">
          {undefined} biết đấy với những sản phẩm ở trên rất hiếm khi có mức ưu đãi như vậy. Khi bạn rời khỏi đây, ưu
          đãi này sẽ không còn nữa. Hãy nhấn THÊM NGAY để chớp lấy cơ hội này nhé!
        </div>
      </div>
    </div>
  );
}
