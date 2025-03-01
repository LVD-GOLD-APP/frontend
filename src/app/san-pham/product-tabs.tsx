"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductReviews from "./product-reviews"
import RelatedProducts from "./related-products"
import SimilarProducts from "./similar-products"

export default function ProductTabs() {
  return (
    <Tabs defaultValue="description" className="w-full mt-12">
      <TabsList className="w-full border-b rounded-none h-auto p-0">
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
          <h2>Thông tin chi tiết về sản phẩm</h2>
          <p>
            Sản phẩm được làm từ bạc 925 cao cấp được đính kèm viên pha lê của hãng đá quý nổi tiếng thế giới Swarovski
            đến từ nước Áo. Là một trong những mẫu lắc tay đẹp nhất, với thiết kế là lựa chọn hoàn hảo cho bạn trong
            những trang phục dự tiệc trang trọng.
          </p>
          {/* Add more product details here */}
        </div>
      </TabsContent>

      <TabsContent value="reviews" className="mt-6">
        <ProductReviews />
      </TabsContent>

      <TabsContent value="similar" className="mt-6">
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold mb-6 text-center">CÓ THỂ BẠN THÍCH...</h2>
            <SimilarProducts />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-6 text-center">SẢN PHẨM TƯƠNG TỰ</h2>
            <RelatedProducts />
          </section>
        </div>
      </TabsContent>
    </Tabs>
  )
}

