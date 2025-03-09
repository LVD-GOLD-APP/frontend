"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/lib/services/types";
import ProductReviews from "./product-reviews";
import SimilarProducts from "./similar-products";


// Define the props interface
interface ProductTabsProps {
  product?: Product
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const productDescription = product?.description || "Không có mô tả chi tiết cho sản phẩm này."
  const productDetails = ""
  const productSpecifications = {}

  return (
    <Tabs defaultValue="description" className="w-full mt-12">
      <TabsList className="w-full h-auto p-0 border-b rounded-none">
        <TabsTrigger
          value="description"
          className="rounded-none flex-1 h-12 data-[state=active]:border-b-2 data-[state=active]:border-red-600"
        >
          MÔ TẢ CHI TIẾT
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="rounded-none flex-1 h-12 data-[state=active]:border-b-2 data-[state=active]:border-red-600"
        >
          ĐÁNH GIÁ
        </TabsTrigger>
        <TabsTrigger
          value="similar"
          className="rounded-none flex-1 h-12 data-[state=active]:border-b-2 data-[state=active]:border-red-600"
        >
          MẪU TƯƠNG TỰ
        </TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-6">
        <div className="prose max-w-none">
          <h2>Thông tin chi tiết về {product?.title || "sản phẩm"}</h2>
          <p>{productDescription}</p>

          {productDetails && (
            <>
              <h3>Chi tiết sản phẩm</h3>
              <div dangerouslySetInnerHTML={{ __html: productDetails }} />
            </>
          )}

          {Object.keys(productSpecifications).length > 0 && (
            <>
              <h3>Thông số kỹ thuật</h3>
              <table className="w-full border-collapse">
                <tbody>
                  {Object.entries(productSpecifications).map(([key, value]) => (
                    <tr key={key} className="border-b">
                      <td className="py-2 font-medium">{key}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </TabsContent>

      <TabsContent value="reviews" className="mt-6">
        <ProductReviews />
      </TabsContent>

      <TabsContent value="similar" className="mt-6">
        <div className="space-y-12">
          <section>
            <h2 className="mb-6 text-xl font-semibold text-center">CÓ THỂ BẠN THÍCH...</h2>
            <SimilarProducts />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-6 text-center">SẢN PHẨM TƯƠNG TỰ</h2>
          </section>
        </div>
      </TabsContent>
    </Tabs>
  );
}
