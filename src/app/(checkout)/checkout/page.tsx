"use client";

import { Divider } from "@heroui/divider";
import CustomerForm from "../components/CustomerForm";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className="flex flex-col items-center my-2">
            <div>THÔNG TIN ĐẶT HÀNG</div>
            <div>Mọi thông tin của bạn sẽ được LiLi bảo mật tuyệt đối</div>
          </div>
          <Divider className="my-2" />
          <div className="flex flex-col gap-2 my-2">
            <div className="border-l-1 border-[#C4001F] pl-[6px]">Ưu đãi thanh toán Online đã được áp dụng</div>
            <div className="border-l-1 border-[#C4001F] pl-[6px]">Quà tặng: Bộ đóng gói sản phẩm cao cấp - L1</div>
            <div className="border-l-1 border-[#C4001F] pl-[6px]">
              Quà tặng: Hộp trang sức bọc da Royal - Nhẫn đôi đã được áp dụng
            </div>
          </div>
          <CustomerForm />
        </div>
        <div>THÔNG TIN ĐƠN HÀNG</div>
      </div>
    </div>
  );
}
