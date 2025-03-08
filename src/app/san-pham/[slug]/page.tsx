"use client";
import ProductImageGallery from "@/app/san-pham/product-image-gallery";
import { Button } from "@/components/ui/button";
import { useFetchData } from "@/lib/hooks/useFetchData";
import { VariantProduct } from "@/lib/services/types";
import { Check, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BenefitsSection from "../benefits-section";
import ColorSelector from "../color-selector";
import GiftBoxSection from "../gift-box-section";
import MembershipBenefits from "../membership-benefits";
import ProductTabs from "../product-tabs";
import QuantitySelector from "../quantity-selector";
import RelatedProducts from "../related-products";
import StickyCheckoutBar from "../sticky-checkout-bar";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: PageProps) {
  const { productDetail } = useFetchData(params.slug);
  console.log(productDetail);

  const variants = Array.isArray(productDetail?.variants) ? productDetail.variants : [];
  const [selectedVariant, setSelectedVariant] = useState<VariantProduct | null>(null);

  const handleColorSelect = (colorId: number | null) => {
    const selected = variants.find((variant) => variant.id === colorId) || null;
    setSelectedVariant(selected);
  };

  return (
    <>
      <div className="max-w-[1420px] mx-auto px-1 lg:px-4 py-6 pb-20">
        {/* Breadcrumb */}
        <div className="container mx-auto pl-3">
          <nav className="flex items-center text-sm mb-6 text-gray-600 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link href="/" className="flex items-center shrink-0">
              <Home className="h-4 w-4 mr-1" />
              Trang chủ
            </Link>
            <Link href="/vong-tay" className="flex items-center shrink-0">
              <ChevronRight className="h-4 w-4 mx-1" />
              Vòng - Lắc
            </Link>
            <Link href="/vong-tay" className="flex items-center shrink-0">
              <ChevronRight className="h-4 w-4 mx-1" />
              Vòng - Lắc tay
            </Link>
            <Link href="/vong-tay" className="flex items-center shrink-0">
              <ChevronRight className="h-4 w-4 mx-1" />
              Vòng - Lắc tay nữ
            </Link>
            <ChevronRight className="h-4 w-4 mx-1 hidden sm:md:lg:block shrink-0" />
            <span className="text-gray-500 hidden sm:md:lg:block shrink-0">
              Lắc tay bạc nữ đính pha lê Swarovski trái tim của biển LILI_579467
            </span>
          </nav>
        </div>
        <div className="grid grid-cols-1 sm:md:lg:grid-cols-2 gap-8">
          <div>
            <ProductImageGallery
              imageList={productDetail?.images}
              selectedImage={selectedVariant?.image?.url || null}
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4">
              Lắc Tay Bạc Nữ Đính Pha Lê Swarovski Trái Tim Của Biển LILI_579467
            </h1>
            <hr className="my-4 border-t border-gray-300" />

            <div className="text-sm mb-6">
              <p className="mb-2">
                Sản phẩm được làm từ bạc 925 cao cấp được đính kèm viên pha lê của hãng đá quý nổi tiếng thế giới
                Swarovski đến từ nước Áo. Là một trong những mẫu lắc tay đẹp nhất, với thiết kế là lựa chọn hoàn hảo cho
                bạn trong những trang phục dự tiệc trang trọng. Bạn có muốn cùng nổi bật trang thành năng động chưa lòng
                ấy không nào?
              </p>
              <p className="text-red-600 font-semibold">
                Lưu ý: Nếu bạn yêu cầu khắc tên, vui lòng ấn liên hệ (góc phải) để được hỗ trợ
              </p>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-red-600">1.139.000₫</span>
            </div>

            <div className="bg-gray-50 p-3 rounded-md mb-6">
              <div className="flex items-center">
                <div className="mr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 7H4C2.9 7 2 7.9 2 9V15C2 16.1 2.9 17 4 17H20C21.1 17 22 16.1 22 15V9C22 7.9 21.1 7 20 7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 11C16 12.1 15.1 13 14 13C12.9 13 12 12.1 12 11C12 9.9 12.9 9 14 9C15.1 9 16 9.9 16 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>Đăng ký để nhận ngay hộp trang sức trị giá 224.000₫ + tích lũy, giảm giá...</span>
              </div>
            </div>

            <div className="mb-6 flex gap-14 items-center">
              <div className="font-medium">Màu Sắc</div>
              <ColorSelector variants={variants} onSelectColor={handleColorSelect} />
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6 justify-start xl:justify-between">
              <div className="">
                <QuantitySelector />
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 w-1/2 md:w-1/3">MUA NGAY</Button>
              <Button variant="black" className="border-gray-300 px-6 py-6 w-full md:w-1/3">
                GỌI TƯ VẤN MIỄN PHÍ
              </Button>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-4">Bộ Sản Phẩm Thường Được Chọn Cùng</h3>
              <RelatedProducts />
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 mb-6">BẤM ĐỂ MUA NGAY ƯU ĐÃI</Button>

            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm">
                  Sản phẩm hiện tại: Lắc tay bạc nữ đính pha lê Swarovski trái tim của biển LILI_579467 Màu sắc: Xanh
                  dương - 1.139.000₫
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm">
                  Dây chuyền bạc nữ đính pha lê Swarovski trái tim đại dương LILI_295787 Màu sắc: Xanh dương - 979.000₫
                  Chọn từng số sản phẩm &gt;
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm">
                  Bông tai bạc nữ đính đá Swarovski trái tim của biển LILI_141382 Màu sắc: Xanh dương - 762.000₫ Chọn
                  từng số sản phẩm &gt;
                </p>
              </div>
            </div>

            <GiftBoxSection />

            <BenefitsSection />
          </div>
        </div>
        <div className="mt-12">
          <MembershipBenefits />
        </div>
        <div className="mt-12">
          <ProductTabs />
        </div>
      </div>
      <StickyCheckoutBar />
    </>
  );
}
