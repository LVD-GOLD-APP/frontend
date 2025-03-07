import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, ChevronRight, Check } from "lucide-react"
import ProductImageGallery from "@/app/san-pham/product-image-gallery"
import QuantitySelector from "../quantity-selector"
import ColorSelector from "../color-selector"
import RelatedProducts from "../related-products"
import GiftBoxSection from "../gift-box-section"
import BenefitsSection from "../benefits-section"
import MembershipBenefits from "../membership-benefits"
import ProductTabs from "../product-tabs"
import StickyCheckoutBar from "../sticky-checkout-bar"
import instance from "@/lib/axios-interceptor"

interface Product {
  id: string
  name: string
  description: string
  price: number
  discountPrice?: number
  images: string[]
  colors: string[]
  relatedProducts: any[]
  slug: string
}

interface PageProps {
  params: {
    slug: string
  }
}

type ProductResponse =  Product[]

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const response = await instance.get<ProductResponse>(`/api/products`)

    if (!response || !response.data) {
      console.error("Dữ liệu từ API không hợp lệ:", response)
      return null
    }

    const product = response.data.find((prod) => prod.slug === slug)

    console.log("Sản phẩm tìm thấy:", product)

    return product || null
  } catch (error: any) {
    console.error("Lỗi khi gọi API:", error.message)
    return null
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = params
  const product = await getProduct(slug)

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
        <h2 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h2>
        <p className="text-gray-600 mb-6 text-center">Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <Button variant="default" asChild>
          <a href="/">Quay về trang chủ</a>
        </Button>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "₫"
  }

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
            <span className="text-gray-500 hidden sm:md:lg:block shrink-0">{product.name}</span>
          </nav>
        </div>
        <div className="grid grid-cols-1 sm:md:lg:grid-cols-2 gap-8">
          <div>
            <ProductImageGallery images={product.images} />
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <hr className="my-4 border-t border-gray-300" />

            <div className="text-sm mb-6">
              <p className="mb-2">{product.description}</p>
              <p className="text-red-600 font-semibold">
                Lưu ý: Nếu bạn yêu cầu khắc tên, vui lòng ấn liên hệ (góc phải) để được hỗ trợ
              </p>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-red-600">{formatPrice(product.price)}</span>
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
              <ColorSelector colors={product.colors} />
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6 justify-start xl:justify-between">
              <div className="">
                <QuantitySelector />
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 w-1/2 md:w-1/3">MUA NGAY</Button>
              <Button variant="outline" className="border-gray-300 px-6 py-6 w-full md:w-1/3">
                GỌI TƯ VẤN MIỄN PHÍ
              </Button>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-4">Bộ Sản Phẩm Thường Được Chọn Cùng</h3>
              <RelatedProducts products={product.relatedProducts} />
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 mb-6">BẤM ĐỂ MUA NGAY ƯU ĐÃI</Button>

            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm">
                  Sản phẩm hiện tại: {product.name} Màu sắc: Xanh dương - {formatPrice(product.price)}
                </p>
              </div>
              {product.relatedProducts &&
                product.relatedProducts.map((relatedProduct, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-2">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-sm">
                      {relatedProduct.name} Màu sắc: {relatedProduct.color} - {formatPrice(relatedProduct.price)} Chọn
                      từng số sản phẩm &gt;
                    </p>
                  </div>
                ))}
            </div>

            <GiftBoxSection />

            <BenefitsSection />
          </div>
        </div>
        <div className="mt-12">
          <MembershipBenefits />
        </div>
        <div className="mt-12">
          <ProductTabs product={product} />
        </div>
      </div>
      <StickyCheckoutBar product={product} />
    </>
  )
}

