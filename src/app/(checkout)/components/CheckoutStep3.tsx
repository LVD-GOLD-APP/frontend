import MembershipBenefits from "@/app/(main)/san-pham/membership-benefits";
import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";

function CheckoutStep3() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center my-4 sm:my-6 lg:my-8">
        <div className="flex-grow h-px bg-black mx-2 sm:mx-4"></div>
        <span className="text-sm sm:text-base lg:text-lg font-medium whitespace-nowrap text-center">
          XÁC NHẬN ĐƠN HÀNG THÀNH CÔNG
        </span>
        <div className="flex-grow h-px bg-black mx-2 sm:mx-4"></div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2">
        <div className="flex flex-col gap-2 p-4">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">MÃ ĐƠN HÀNG: 170757</h2>
          <div>
            <div className="">
              <h2 className="text-lg font-semibold border-b pb-2 mb-4">THÔNG TIN ĐƠN HÀNG</h2>

              <div className="flex items-start gap-3 mb-4">
                <img src="link-hinh-anh-1.jpg" alt="product" className="w-16 h-16 object-cover border" />
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Nhẫn cặp đôi bạc đính kim cương Moissanite Theophilus LILI_672438
                  </p>
                </div>
                <div className="text-sm font-medium">1.751.000₫</div>
              </div>

              <div className="flex items-start gap-3 mb-4 border-t pt-4">
                <div className="w-6 h-6 rounded-full bg-gray-200 text-xs flex items-center justify-center font-medium text-gray-600">
                  🎁
                </div>
                <div className="flex-1 text-sm">
                  <p>Quà Tặng: Bộ đóng gói cao cấp, ý nghĩa - L1</p>
                  <p className="text-gray-500 text-xs">Loại: L1</p>
                </div>
                <div className="text-sm text-gray-500">0₫</div>
              </div>

              <div className="flex items-start gap-3 mb-4 border-t pt-4">
                <div className="w-6 h-6 rounded-full bg-gray-200 text-xs flex items-center justify-center font-medium text-gray-600">
                  2
                </div>
                <div className="flex-1 text-sm">
                  <p>Quà Tặng: Hộp trang sức bọc da Royal - L2</p>
                  <p className="text-gray-500 text-xs">Loại: L2</p>
                </div>
                <div className="text-sm text-gray-500">0₫</div>
              </div>

              <div className="border-t pt-4 text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Tổng số phụ:</span>
                  <span>1.751.000₫</span>
                </div>
                <div className="flex justify-between">
                  <span>Giao nhận hàng:</span>
                  <span>Giao nhanh chóng (1-4 ngày)</span>
                </div>
                <div className="flex justify-between">
                  <span>Phương thức thanh toán:</span>
                  <span>Thanh toán tiền mặt khi nhận hàng (COD)</span>
                </div>
              </div>

              <div className="mt-4 border-t pt-4 flex justify-between items-center text-base font-semibold text-red-600">
                <span>TỔNG CỘNG:</span>
                <span>1.751.000₫</span>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <h2 className="text-lg font-semibold mb-4">THÔNG TIN QUÝ KHÁCH HÀNG</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-gray-700">test@example.us</p>
              </div>
              <div>
                <p className="font-semibold">Số điện thoại</p>
                <p className="text-sm text-gray-700">6019521325</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-1">Địa chỉ thanh toán</p>
                <p className="text-sm text-gray-700 leading-5">
                  fdfd
                  <br />
                  1600 Fake Street
                  <br />
                  Xã An Phú Tây
                  <br />
                  Huyện Bình Chánh
                  <br />
                  Tp. Hồ Chí Minh
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">Địa chỉ giao hàng</p>
                <p className="text-sm text-gray-700 leading-5">
                  fdfd
                  <br />
                  1600 Fake Street
                  <br />
                  Xã An Phú Tây
                  <br />
                  Huyện Bình Chánh
                  <br />
                  Tp. Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="pb-4 border-b text-sm leading-relaxed">
            <p className="font-semibold mb-2">LƯU Ý:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                Vui lòng <span className="font-medium">kiểm tra</span> lại đúng{" "}
                <span className="font-medium">Số Điện Thoại</span> và các thông tin khác.
              </li>
              <li>
                Nếu <span className="font-medium">cần thêm thông tin</span>, LiLi sẽ gọi xác nhận lại với bạn.
              </li>
              <li>
                Bạn được <span className="font-medium">kiểm tra hàng</span>, ưng ý mới nhận hàng và thanh toán.
              </li>
              <li>
                Mọi thắc mắc liên quan đến đơn hàng, vui lòng gọi đến số hotline
                <a href="tel:0388468620" className="font-semibold underline ml-1">
                  0388.468.620
                </a>
                , hoạt động 24/7.
              </li>
            </ul>
          </div>
          <MembershipBenefits />
          <div className="p-4 mx-auto">
            <Link href="/">
              <Button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-semibold rounded">
                <span className="text-lg">»</span>
                TIẾP TỤC MUA SẮM
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutStep3;
