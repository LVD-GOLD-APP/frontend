import { Button } from "@/components/ui/button";
import { Product } from "@/lib/services/types";
import { formatCurrency } from "@/lib/utils";
import { CheckSquare, Plus, Square } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface Props {
  related_products: Product[];
}

export default function RelatedProducts({ related_products }: Props) {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<
    Record<number, { price: number; title: string; color: string }>
  >({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setSelectedProducts(related_products.map((p) => p.id));
  }, [related_products]);

  const toggleSelectProduct = (id: number) => {
    setSelectedProducts((prev) => (prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]));
  };

  const openVariantModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariant((prev) => ({
      ...prev,
      [product.id]: product.variants[0] || { price: product.price, title: "", color: "" },
    }));
    setShowModal(true);
  };

  const handleSelectVariant = (productId: number, variant: { price: number; title: string; color: string }) => {
    setSelectedVariant((prev) => ({ ...prev, [productId]: variant }));
  };

  const selectedItems = related_products.filter((p) => selectedProducts.includes(p.id));
  const getProductPrice = (product: Product) =>
    selectedVariant[product.id]?.price || product.variants[0]?.price || product.price;
  const getTitleProductColor = (product: Product) =>
    selectedVariant[product.id]?.title || product.variants[0]?.title || "N/A";

  const totalPrice = selectedItems.reduce((sum, product) => sum + getProductPrice(product), 0);
  const originalTotalPrice = related_products.reduce((sum, product) => sum + getProductPrice(product), 0);
  const savings = originalTotalPrice - totalPrice;

  return (
    <div className="p-4 bg-white border rounded-lg shadow-md">
      {selectedProducts.length > 0 && (
        <div className="mb-4 text-center">
          <span className="text-lg font-semibold">Tổng giá: </span>
          <span className="text-sm text-gray-500 line-through">{formatCurrency(originalTotalPrice)}</span>
          <span className="mx-2 text-lg font-bold text-red-600">{formatCurrency(totalPrice)}</span>
          <span className="text-sm text-green-600">Tiết kiệm {formatCurrency(savings)}</span>
        </div>
      )}

      <div className="flex items-center justify-center gap-2 mb-4">
        {selectedItems.map((product, index) => (
          <div key={product.id} className="flex items-center">
            {index > 0 && <Plus className="w-6 h-6 mx-2 text-gray-400" />}
            <div className="relative w-24 h-24 overflow-hidden border rounded-md">
              <Image
                src={product.images[0]?.url || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {selectedProducts.length > 0 && (
        <Button className="w-full py-6 mb-6 text-white bg-red-600 hover:bg-red-700">BẤM ĐỂ MUA NGAY ƯU ĐÃI</Button>
      )}

      <div className="mt-4 text-sm">
        {related_products.map((product) => {
          const isSelected = selectedProducts.includes(product.id);
          const hasVariants = product.variants && product.variants.length > 0;
          return (
            <div key={product.id} className="flex items-start gap-2">
              <button onClick={() => toggleSelectProduct(product.id)}>
                {isSelected ? (
                  <CheckSquare className="w-5 h-5 text-red-500" />
                ) : (
                  <Square className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div className="flex flex-wrap items-center gap-x-1">
                <span className={isSelected ? "text-black" : "text-gray-500 line-through"}>
                  {product.title} -{" "}
                  <span className="font-semibold text-red-600">{formatCurrency(getProductPrice(product))}</span>{" "}
                  {hasVariants && <span>- Màu sắc: {getTitleProductColor(product)}</span>}
                </span>
                {hasVariants && (
                  <span onClick={() => openVariantModal(product)} className="text-blue-600 underline whitespace-nowrap">
                    Chọn thông số sản phẩm
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-[400px]">
            <h2 className="mb-4 text-lg font-bold text-center">CHỌN THÔNG SỐ SẢN PHẨM</h2>
            <div className="flex justify-center mb-4">
              <Image
                src={selectedProduct.images[0]?.url || "/placeholder.svg"}
                alt={selectedProduct.title}
                width={100}
                height={100}
                className="rounded-md"
              />
            </div>
            <p className="mb-2 text-center text-gray-700">{selectedProduct.title}</p>
            <div className="text-lg font-bold text-center text-red-600">
              {formatCurrency(getProductPrice(selectedProduct))}
            </div>
            <div className="text-center text-gray-700">Màu sắc: {getTitleProductColor(selectedProduct)}</div>
            <div className="flex justify-center gap-2 mt-4">
              {selectedProduct.variants.map((variant, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 border rounded-md ${
                    selectedVariant[selectedProduct.id]?.price === variant.price ? "border-red-500" : ""
                  }`}
                  style={{ backgroundColor: variant.color || "#ccc" }}
                  onClick={() => handleSelectVariant(selectedProduct.id, variant)}
                />
              ))}
            </div>
            <button onClick={() => setShowModal(false)} className="w-full py-2 mt-4 text-white bg-red-600 rounded-lg">
              XÁC NHẬN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
