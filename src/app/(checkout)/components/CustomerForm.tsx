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
        <Input size="sm" isRequired label="Họ tên" />
        <Input size="sm" isRequired label="Số điện thoại" />
        <Input size="sm" isRequired label="Email" />
      </div>
      {/* Địa chỉ */}
      <div>
        <AddressForm />
      </div>
      {/* Ghi chú */}
      <Textarea size="sm" label="Ghi chú" />
      {/* Checkbox */}
      <Checkbox size="sm" isSelected={sendToOther} onValueChange={setSendToOther}>
        <div className="text-[#737373] text-[14px]">Gửi người khác nhận hàng (nếu có)</div>
      </Checkbox>
      {/* Thông tin người nhận khác */}
      {sendToOther && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input size="sm" isRequired label="Họ tên người nhận" />
            <Input size="sm" isRequired label="Số điện thoại người nhận" />
          </div>
          <div>
            <AddressForm />
          </div>
        </>
      )}
    </div>
  );
}
