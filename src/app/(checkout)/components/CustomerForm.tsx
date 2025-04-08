import { Checkbox, Input, Textarea } from "@heroui/react";
import { useState } from "react";
import AddressForm from "./AddressForm";

export default function CustomerForm() {
  const [sendToOther, setSendToOther] = useState(false);

  return (
    <div className="space-y-4 my-2">
      <h2 className="text-xl">THÔNG TIN KHÁCH HÀNG</h2>
      {/* Thông tin cơ bản */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input required label="Họ tên" placeholder="Nhập họ tên" />
        <Input required label="Số điện thoại" placeholder="Nhập số điện thoại" />
        <Input required label="Email" placeholder="Nhập email" type="email" />
      </div>
      {/* Địa chỉ */}
      <div>
        <AddressForm />
      </div>
      {/* Ghi chú */}
      <Textarea label="Ghi chú" placeholder="Nhập ghi chú (nếu có)" />
      {/* Checkbox */}
      <Checkbox isSelected={sendToOther} onValueChange={setSendToOther}>
        Gửi người khác nhận hàng (nếu có)
      </Checkbox>
      {/* Thông tin người nhận khác */}
      {sendToOther && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input required label="Họ tên người nhận" placeholder="Nhập họ tên người nhận" />
            <Input required label="Số điện thoại người nhận" placeholder="Nhập số điện thoại người nhận" />
          </div>
          <div>
            <AddressForm />
          </div>
        </>
      )}
    </div>
  );
}
