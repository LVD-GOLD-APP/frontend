import Image from "next/image"
import { Button } from "@/components/ui/button"
import CheckoutSteps from "../checkout-steps"
import { ThumbsUp, Share2, Users, Gift } from "lucide-react"

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/logo.svg" alt="LILI Premium Jewelry" className="h-12" />
        </div>

        {/* Checkout Steps */}
        <div className="mb-12">
          <CheckoutSteps currentStep={3} isComplete />
        </div>

        <div className="max-w-[1000px] mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <h1 className="text-2xl font-medium">XÁC NHẬN ĐƠN HÀNG THÀNH CÔNG</h1>
              <div className="absolute left-0 right-0 h-px bg-gray-300 top-1/2 -z-10" />
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-white border rounded-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-medium mb-4">MÃ ĐƠN HÀNG: 167868</h2>
                <h3 className="font-medium mb-2">THÔNG TIN ĐƠN HÀNG</h3>

                {/* Order Items */}
                <div className="space-y-4 mb-4">
                  <div className="flex gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image src="/placeholder.svg" alt="Product" fill className="object-cover rounded" />
                    </div>
                    <div>
                      <p className="text-sm">
                        Dây chuyền bạc nữ đính pha lê Swarovski trái tim đại dương LILI_295787 - Hồng
                      </p>
                      <p className="text-sm text-gray-600">Màu sắc: Hồng</p>
                    </div>
                    <div className="text-sm">979.000đ</div>
                  </div>
                </div>

                {/* Gift Items */}
                <div className="space-y-2 mb-4">
                  <div className="flex gap-3">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image src="/placeholder.svg" alt="Gift" fill className="object-cover rounded" />
                    </div>
                    <div className="text-sm">
                      <p>Quà Tặng: Bộ đóng gói cao cấp, ý nghĩa - L1</p>
                      <p>Loại: L1</p>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Tổng số phụ:</span>
                    <span>979.000đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Giao nhận hàng:</span>
                    <span>Giao nhanh chóng (1-4 ngày)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phương thức thanh toán:</span>
                    <span>Thanh toán tiền mặt khi nhận hàng (COD)</span>
                  </div>
                  <div className="flex justify-between font-medium text-red-600">
                    <span>TỔNG CỘNG:</span>
                    <span>979.000đ</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">THÔNG TIN QUÝ KHÁCH HÀNG</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium">Số điện thoại</p>
                    <p>0325387482</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Địa chỉ thanh toán</p>
                      <p>Lâm</p>
                      <p>test</p>
                      <p>Hà Nội</p>
                    </div>
                    <div>
                      <p className="font-medium">Địa chỉ giao hàng</p>
                      <p>Lâm</p>
                      <p>test</p>
                      <p>Hà Nội</p>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="mt-6 p-4 bg-gray-50 rounded text-sm space-y-2">
                  <p className="font-medium">LƯU Ý:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>- Vui lòng kiểm tra lại số Điện Thoại và các thông tin khác.</li>
                    <li>- Nếu cần thêm thông tin, LILI sẽ gọi xác nhận lại với bạn.</li>
                    <li>- Bên được kiểm tra hàng, ưng ý mới nhận hàng và thanh toán.</li>
                    <li>
                      - Mọi thắc mắc liên quan đến đơn hàng, vui lòng gọi đến số hotline 0388.468.620 hoặc đồng 24/7.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 border rounded text-center">
              <ThumbsUp className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-medium mb-1">ƯU ĐÃI ĐÁNH GIÁ</h4>
              <p className="text-xs text-gray-600">
                Đánh giá để nhận thẻ điện thoại trị giá 20.000đ đến hàng và mã ưu đãi 10%
              </p>
            </div>
            <div className="p-4 border rounded text-center">
              <Share2 className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-medium mb-1">ƯU ĐÃI AFFILIATE</h4>
              <p className="text-xs text-gray-600">
                Tham gia để nhận hoa hồng lên đến 17,5% giá trị đơn hàng và nhiều ưu đãi
              </p>
            </div>
            <div className="p-4 border rounded text-center">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-medium mb-1">ƯU ĐÃI THÀNH VIÊN</h4>
              <p className="text-xs text-gray-600">
                Thành viên sẽ nhận được hộp trang sức trị giá 224.000đ và xu tích lũy...
              </p>
            </div>
            <div className="p-4 border rounded text-center">
              <Gift className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-medium mb-1">NHẬN QUÀ MIỄN PHÍ</h4>
              <p className="text-xs text-gray-600">
                Nhận ngay rất nhiều quà tặng hấp dẫn miễn phí phí cùng trang sức LILI
              </p>
            </div>
          </div>

          {/* Continue Shopping Button */}
          <div className="text-center">
            <Button variant="outline" className="min-w-[200px] bg-black text-white hover:bg-gray-800">
              TIẾP TỤC MUA SẮM
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

