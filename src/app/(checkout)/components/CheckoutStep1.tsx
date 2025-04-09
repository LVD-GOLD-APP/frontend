"use client";

import { Divider } from "@heroui/divider";
import CustomerForm from "./CustomerForm";
import GiftOptions from "./GiftOptions";
import PaymentOptions from "./PaymentOptions";
import CartSummary from "./CartSummary";
import { Button } from "@heroui/button";

interface Props {
  onNextStep: () => void;
}

function CheckoutStep1({ onNextStep }: Props) {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2  gap-2">
      <div className="flex flex-col gap-2 p-4 text-[14px]">
        <div className="flex flex-col items-center my-2">
          <div className="text-[20px]">THÔNG TIN ĐẶT HÀNG</div>
          <div>Mọi thông tin của bạn sẽ được LiLi bảo mật tuyệt đối</div>
        </div>
        <Divider />
        <div className="flex flex-col gap-2 my-2">
          <div className="border-l-1 border-[#C4001F] pl-[6px] text-[14px] text-[#737373]">
            Ưu đãi thanh toán Online đã được áp dụng
          </div>
          <div className="border-l-1 border-[#C4001F] pl-[6px] text-[14px] text-[#737373]">
            Quà tặng: Bộ đóng gói sản phẩm cao cấp - L1
          </div>
          <div className="border-l-1 border-[#C4001F] pl-[6px] text-[14px] text-[#737373]">
            Quà tặng: Hộp trang sức bọc da Royal - Nhẫn đôi đã được áp dụng
          </div>
        </div>
        <CustomerForm />
        <div className="space-y-4 my-2">
          <h2 className="text-xl uppercase">Phương thức giao hàng</h2>
          <div className="border border-gray-200 rounded-md">
            <div className="flex justify-between p-3 text-[#737373] text-[14px]">
              <div>Giao nhanh chóng (1-4 ngày)</div>
              <div>Miễn phí</div>
            </div>
          </div>
        </div>
        <div>
          <PaymentOptions />
        </div>
        <div>
          <GiftOptions />
        </div>
        <div>
          <div className="space-y-2 mt-4">
            <Button
              onClick={onNextStep}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded text-sm uppercase transition"
            >
              Đặt Hàng
            </Button>
            <div className="bg-gray-100 text-center text-xs text-gray-700 py-2 rounded">
              Xin chân thành cảm ơn bạn, LiLi rất hân hạnh được phục vụ!
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="my-2 text-[20px]">THÔNG TIN ĐƠN HÀNG</div>
        <CartSummary
          product={{
            id: "1",
            name: "Lắc tay bạc nữ mạ bạch kim đính đá CZ có 4 lá",
            sku: "LILI_612672",
            color: "Trắng",
            price: 1022000,
            quantity: 1,
            imageUrl: "/images/product.jpg",
          }}
          gifts={[
            {
              id: "gift-1",
              title: "Bộ đóng gói cao cấp, ý nghĩa - L1",
              note: "SL CÓ HẠN",
              imageUrl: "/images/gift-1.jpg",
            },
            {
              id: "gift-2",
              title: "Hộp trang sức bọc da Royal - L1",
              note: "SL CÓ HẠN",
              imageUrl: "/images/gift-2.jpg",
            },
          ]}
          subtotal={1022000}
          discount={20000}
          shippingFee={0}
        />
      </div>
    </div>
  );
}

export default CheckoutStep1;
