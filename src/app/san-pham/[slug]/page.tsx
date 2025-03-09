"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductImageGallery from "@/app/san-pham/product-image-gallery";
import Breadcrumbs from "@/components/breadcrumbs";
import { useFetchData } from "@/lib/hooks/useFetchData";
import { VariantProduct } from "@/lib/services/types";
import MembershipBenefits from "../membership-benefits";
import ProductInfo from "../product-info";
import ProductTabs from "../product-tabs";
import StickyCheckoutBar from "../sticky-checkout-bar";

interface PageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: PageProps) {
  const { productDetail } = useFetchData(params.slug);
  const { title, images, related_products = [], description } = productDetail || {};
  const [selectedVariant, setSelectedVariant] = useState<VariantProduct | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const productInfoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (productInfoRef.current) {
        const rect = productInfoRef.current.getBoundingClientRect();
        const isBelowViewport = rect.bottom <= window.innerHeight;

        if (!hasScrolled && isBelowViewport) {
          setHasScrolled(true);
        }

        setIsStickyVisible(isBelowViewport && hasScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

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
          <div className="relative grid grid-cols-2 gap-6 overflow-visible rounded-md lg:grid-cols-5 lg:border">
            {/* Product Images */}
            <div className="px-40 lg:p-4 lg:pr-0 lg:sticky lg:top-[90px] self-start col-span-2 lg:col-span-2">
              <ProductImageGallery imageList={images} selectedImage={selectedVariant?.image?.url ?? null} />
            </div>

            {/* Product Info */}
            <div ref={productInfoRef} className="col-span-2 p-4 pl-6 border-l border-gray-200 lg:col-span-3">
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
        </div>

        {/* StickyCheckoutBar - Animation */}
        <AnimatePresence>
          {isStickyVisible && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-0 left-0 w-full"
            >
              {productDetail && <StickyCheckoutBar productDetail={productDetail} />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

