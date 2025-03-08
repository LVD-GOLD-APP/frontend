"use client";

import ProductImageGallery from "@/app/san-pham/product-image-gallery";
import { Button } from "@/components/ui/button";
import { useFetchData } from "@/lib/hooks/useFetchData";
import { VariantProduct } from "@/lib/services/types";
import { formatCurrency } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import BenefitsSection from "../benefits-section";
import ColorSelector from "../color-selector";
import GiftBoxSection from "../gift-box-section";
import MembershipBenefits from "../membership-benefits";
import ProductTabs from "../product-tabs";
import QuantitySelector from "../quantity-selector";
import RelatedProducts from "../related-products";
import StickyCheckoutBar from "../sticky-checkout-bar";

interface PageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: PageProps) {
  const { productDetail } = useFetchData(params.slug);

  const { title, description, images, variants = [], related_products = [], price } = productDetail || {};

  const [selectedVariant, setSelectedVariant] = useState<VariantProduct | null>(null);

  const handleColorSelect = (colorId: number | null) => {
    setSelectedVariant(variants.find((variant) => variant.id === colorId) || null);
  };

  const displayedPrice = useMemo(() => {
    if (!variants.length) return null;
    return variants[0].price_2
      ? `${formatCurrency(variants[0].price)} - ${formatCurrency(variants[0].price_2)}`
      : formatCurrency(variants[0].price);
  }, [variants]);

  return (
    <>
      <div className="max-w-[1420px] mx-auto px-1 lg:px-4 py-6 pb-20">
        {/* Breadcrumb */}
        <nav className="container mx-auto flex items-center text-sm text-gray-600 overflow-x-auto whitespace-nowrap scrollbar-hide pl-3 mb-6">
          <Link href="/" className="flex items-center shrink-0">
            <Home className="h-4 w-4 mr-1" />
            Trang chủ
          </Link>
          {["Vòng - Lắc", "Vòng - Lắc tay", "Vòng - Lắc tay nữ"].map((text) => (
            <Link key={text} href="/vong-tay" className="flex items-center shrink-0">
              <ChevronRight className="h-4 w-4 mx-1" />
              {text}
            </Link>
          ))}
          <ChevronRight className="h-4 w-4 mx-1 hidden sm:md:lg:block shrink-0" />
          <span className="text-gray-500 hidden sm:md:lg:block shrink-0">{title}</span>
        </nav>

        <div className="grid grid-cols-1 sm:md:lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <ProductImageGallery imageList={images} selectedImage={selectedVariant?.image?.url ?? null} />

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <hr className="my-4 border-t border-gray-300" />

            <div className="text-sm mb-6" dangerouslySetInnerHTML={{ __html: description ?? "" }} />

            {/* Price */}
            {displayedPrice && <div className="text-2xl font-bold text-red-600 mb-6">{displayedPrice}</div>}

            {/* Color Selection */}
            {variants.length ? (
              <div className="flex gap-14 items-center mb-6">
                <div className="font-medium">Màu Sắc</div>
                <ColorSelector variants={variants} onSelectColor={handleColorSelect} />
                {selectedVariant && (
                  <div className="text-2xl font-bold text-red-600">{formatCurrency(selectedVariant.price ?? 0)}</div>
                )}
              </div>
            ) : (
              <div className="text-2xl font-bold text-red-600">{formatCurrency(price ?? 0)}</div>
            )}

            {/* Discount Section */}
            <div className="bg-gray-50 p-3 rounded-md mb-6 flex items-center">
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <span className="ml-2">Đăng ký để nhận ngay hộp trang sức trị giá 224.000₫ + tích lũy, giảm giá...</span>
            </div>

            {/* Purchase Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <QuantitySelector />
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 w-1/2 md:w-1/3">MUA NGAY</Button>
              <Button variant="black" className="border-gray-300 px-6 py-6 w-full md:w-1/3">
                GỌI TƯ VẤN MIỄN PHÍ
              </Button>
            </div>

            {/* Related Products */}
            {related_products.length ? (
              <div className="mb-6">
                <h3 className="font-medium mb-4">Bộ Sản Phẩm Thường Được Chọn Cùng</h3>
                <RelatedProducts related_products={related_products} />
              </div>
            ) : (
              <></>
            )}

            {/* Benefits Section */}
            <GiftBoxSection />
            <BenefitsSection />
          </div>
        </div>

        <MembershipBenefits />
        <ProductTabs related_products={related_products} />
      </div>

      <StickyCheckoutBar />
    </>
  );
}
