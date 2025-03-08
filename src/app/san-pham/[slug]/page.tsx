"use client";

import ProductImageGallery from "@/app/san-pham/product-image-gallery";
import Breadcrumbs from "@/components/breadcrumbs";
import { useFetchData } from "@/lib/hooks/useFetchData";
import { VariantProduct } from "@/lib/services/types";
import { useState } from "react";
import MembershipBenefits from "../membership-benefits";
import ProductInfo from "../product-info";
import ProductTabs from "../product-tabs";
import StickyCheckoutBar from "../sticky-checkout-bar";

interface PageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: PageProps) {
  const { productDetail } = useFetchData(params.slug);

  const { title, images, related_products = [] } = productDetail || {};

  const [selectedVariant, setSelectedVariant] = useState<VariantProduct | null>(null);

  return (
    <>
      <div>
        <Breadcrumbs
          title={title ?? ""}
          links={[
            { text: "Vòng - Lắc", href: "/vong-lac" },
            { text: "Vòng - Lắc tay", href: "/vong-lac-tay" },
            { text: "Vòng - Lắc tay nữ", href: "/vong-lac-tay-nu" },
          ]}
        />
        <div className="relative max-w-[1420px] mx-auto px-1 lg:px-4 py-4 pb-10">
          <div className="relative grid grid-cols-2 lg:grid-cols-5 gap-6 lg:border rounded-md overflow-visible">
            {/* Product Images */}
            <div className="px-40 lg:p-4 lg:pr-0 lg:sticky lg:top-[90px] self-start col-span-2 lg:col-span-2">
              <ProductImageGallery imageList={images} selectedImage={selectedVariant?.image?.url ?? null} />
            </div>

            {/* Product Info */}
            <div className="border-l border-gray-200 p-4 pl-6 col-span-2 lg:col-span-3">
              {productDetail && (
                <ProductInfo
                  productDetail={productDetail}
                  onSelectedVariant={setSelectedVariant}
                  selectedVariant={selectedVariant}
                />
              )}
            </div>
          </div>
          <MembershipBenefits />
          <ProductTabs related_products={related_products} />
        </div>
        <StickyCheckoutBar />
      </div>
    </>
  );
}
