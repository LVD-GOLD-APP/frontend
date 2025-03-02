"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Gift, Truck } from "lucide-react";

export default function CheckoutForm() {
  const [hasAlternateRecipient, setHasAlternateRecipient] = useState(false);

  return (
    <div className="space-y-6">
      {/* Order Information */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">THÔNG TIN ĐẶT HÀNG</h2>
        <div className="space-y-2 text-sm">
          <p>Mọi thông tin của bạn sẽ được LILI bảo mật tuyệt đối</p>
          <div className="flex items-center gap-2 text-red-600">
            <Gift className="h-4 w-4" />
            <span>
              Quà tặng: Bộ đóng gói sản phẩm cao cấp - L1 đã được áp dụng
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            <span>
              Quà tặng: Hộp trang sức bọc da Royal - Lắc đơn đã được áp dụng
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            <span>
              Quà Tặng: Hộp đựng đa trang sức bọc nhung đã được áp dụng
            </span>
          </div>
        </div>
      </Card>

      {/* Customer Information */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">THÔNG TIN KHÁCH HÀNG</h2>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Họ tên</Label>
              <Input id="name" placeholder="Nhập họ tên" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Số điện thoại (Kiểm tra số)</Label>
              <Input id="phone" placeholder="Nhập số điện thoại" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Nhập email" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">Tỉnh/Thành Phố</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn Tỉnh/Thành phố" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hanoi">Hà Nội</SelectItem>
                  <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="district">Quận/Huyện</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn Quận/Huyện" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hoangmai">Hoàng Mai</SelectItem>
                  <SelectItem value="caugiay">Cầu Giấy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Địa chỉ</Label>
            <Input id="address" placeholder="Nhập địa chỉ" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Ghi chú đơn hàng</Label>
            <Textarea id="notes" placeholder="Nhập ghi chú" />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="alternate-recipient"
              checked={hasAlternateRecipient}
              onCheckedChange={(checked) =>
                setHasAlternateRecipient(checked as boolean)
              }
            />
            <Label htmlFor="alternate-recipient">
              Gửi người khác nhận hàng (nếu có)
            </Label>
          </div>
        </div>
      </Card>

      {/* Shipping Method */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">PHƯƠNG THỨC GIAO HÀNG</h2>
        <div className="flex items-center justify-between p-3 border rounded-md">
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-gray-600" />
            <span>Giao nhanh chóng (1-4 ngày)</span>
          </div>
          <span className="text-green-600 font-medium">Miễn phí</span>
        </div>
      </Card>

      {/* Payment Method */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">PHƯƠNG THỨC THANH TOÁN</h2>
        <RadioGroup defaultValue="cod" className="space-y-3">
          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="cod" id="cod" />
            <Label htmlFor="cod">Thanh toán tiền mặt khi nhận hàng (COD)</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="bank" id="bank" />
            <Label htmlFor="bank">
              Chuyển khoản ngân hàng hoặc ví điện tử MoMo, Zalopay... (Tiết kiệm
              20.000₫)
            </Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="momo" id="momo" />
            <Label htmlFor="momo">Quét Mã MoMo (Tiết kiệm 10.000₫)</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="shopeepay" id="shopeepay" />
            <Label htmlFor="shopeepay">
              Quét Mã ShopeePay (Tiết kiệm 10.000₫)
            </Label>
          </div>
        </RadioGroup>
      </Card>

      {/* Submit Button */}
      <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg">
        ĐẶT HÀNG
      </Button>
    </div>
  );
}
