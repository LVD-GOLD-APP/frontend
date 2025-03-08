"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/lib/services/types";
import ProductReviews from "./product-reviews";
import SimilarProducts from "./similar-products";

type Props = {
  description: string;
  related_products: Product[];
};

export default function ProductTabs({ description }: Props) {
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
          <div className="mb-6 text-sm" dangerouslySetInnerHTML={{ __html: description ?? "" }} />
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
            <h2 className="mb-6 text-xl font-semibold text-center">SẢN PHẨM TƯƠNG TỰ</h2>
            <SimilarProducts />
          </section>
        </div>
      </TabsContent>
    </Tabs>
  );
}
