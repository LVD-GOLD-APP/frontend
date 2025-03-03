import Link from "next/link";
import { Home, ChevronRight, Check } from "lucide-react";
import ProductImageGallery from "@/app/san-pham/product-image-gallery";
import QuantitySelector from "../quantity-selector";
import ColorSelector from "../color-selector";
import RelatedProducts from "../related-products";
import GiftBoxSection from "../gift-box-section";
import BenefitsSection from "../benefits-section";
import MembershipBenefits from "../membership-benefits";
import ProductTabs from "../product-tabs";
import StickyCheckoutBar from "../sticky-checkout-bar";
import { ProductActions } from "../product-action";
import { ProductActionsNow } from "../product-action-now";

interface PageProps {
    params: {
        slug: string;
    };
}

export default function ProductPage({ params }: PageProps) {
    return (
        <>
            <div className="container mx-auto px-4 py-6 pb-20">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm mb-6 text-gray-600">
                    <Link href="/" className="flex items-center">
                        <Home className="h-4 w-4 mr-1" />
                        Trang chủ
                    </Link>
                    <ChevronRight className="h-4 w-4 mx-1" />
                    <Link href="/vong-tay">Vòng - Lắc</Link>
                    <ChevronRight className="h-4 w-4 mx-1" />
                    <Link href="/vong-tay">Vòng - Lắc tay</Link>
                    <ChevronRight className="h-4 w-4 mx-1" />
                    <Link href="/vong-tay">Vòng - Lắc tay nữ</Link>
                    <ChevronRight className="h-4 w-4 mx-1" />
                    <span className="text-gray-500">
                        Lắc tay bạc nữ đính pha lê Swarovski trái tim của biển LILI_579467
                    </span>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <ProductImageGallery />
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
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
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
                                <span>
                                    Đăng ký để nhận ngay hộp trang sức trị giá 224.000₫ + tích lũy, giảm giá...
                                </span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-medium mb-2">Màu Sắc</h3>
                            <ColorSelector />
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <QuantitySelector />
                            <ProductActionsNow />
                        </div>

                        <div className="mb-6">
                            <h3 className="font-medium mb-4">Bộ Sản Phẩm Thường Được Chọn Cùng</h3>
                            <RelatedProducts />
                        </div>

                        <ProductActions />

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
                    <ProductTabs />
                </div>

                <div className="mt-12">
                    <MembershipBenefits />
                </div>
            </div>
            <StickyCheckoutBar />
        </>
    );
}