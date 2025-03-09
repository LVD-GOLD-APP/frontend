import { Button } from "@/components/ui/button";
import { Product, VariantProduct } from "@/lib/services/types";
import { formatCurrency } from "@/lib/utils";
import { useMemo } from "react";
import BenefitsSection from "./benefits-section";
import ColorSelector from "./color-selector";
import GiftBoxSection from "./gift-box-section";
import QuantitySelector from "./quantity-selector";
import RelatedProducts from "./related-products";

type Props = {
  productDetail: Product;
  selectedVariant: VariantProduct | null;
  onSelectedVariant?: (variant: VariantProduct | null) => void;
};

function ProductInfo({ productDetail, onSelectedVariant, selectedVariant }: Props) {
  const { title, variants = [], related_products = [], price, sub_title } = productDetail || {};

  const displayedPrice = useMemo(() => {
    if (!variants.length) return null;
    return variants[0].price_2
      ? `${formatCurrency(variants[0].price)} - ${formatCurrency(variants[0].price_2)}`
      : formatCurrency(variants[0].price);
  }, [variants]);

  const handleColorSelect = (colorId: number | null) => {
    const selected = variants.find((variant) => variant.id === colorId) || null;
    onSelectedVariant?.(selected);
  };

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">{title}</h1>
      <hr className="my-4 border-t border-gray-300" />

      <div className="mb-6 text-sm" dangerouslySetInnerHTML={{ __html: sub_title ?? "" }} />

      {/* Price */}
      {displayedPrice && <div className="mb-6 text-2xl font-bold text-red-600">{displayedPrice}</div>}

      {/* Color Selection */}
      {variants.length ? (
        <div className="flex items-center mb-6 gap-14">
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
      <div className="flex items-center p-3 mb-6 rounded-md bg-gray-50">
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
      <div className="flex flex-wrap items-center gap-4 mb-6 justify-between">
        <QuantitySelector />
        <Button className="w-1/2 px-8 py-6 text-white bg-red-600 hover:bg-red-700 md:w-1/3">MUA NGAY</Button>
        <Button variant="black" className="w-full px-6 py-6 border-gray-300 md:w-1/3">
          GỌI TƯ VẤN MIỄN PHÍ
        </Button>
      </div>

      {/* Related Products */}
      {related_products.length ? (
        <div className="mb-6">
          <h3 className="mb-4 font-medium">Bộ Sản Phẩm Thường Được Chọn Cùng</h3>
          <RelatedProducts related_products={related_products} />
        </div>
      ) : (
        <></>
      )}

      {/* Benefits Section */}
      <GiftBoxSection />
      <BenefitsSection />
    </>
  );
}

export default ProductInfo;
